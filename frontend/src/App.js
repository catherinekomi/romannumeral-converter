import React, { useState } from 'react';
import {
  TextField,
  Button,
  Heading,
  View,
  Text,
  Flex,
} from '@adobe/react-spectrum';

function App() {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState('');

  const handleConvert = async () => {
    if (!number) return;

    try {
      const response = await fetch(
        `http://localhost:8080/romannumeral?query=${number}`
      );
      const data = await response.json();

      if (response.ok) {
        setResult(data.output);
      } else {
        window.alert(data.error);
      }
    } catch (error) {
      window.alert('Error fetching result');
    }
  };

  const handleInputChange = (value) => {
    setNumber(value);
  };

  const handleReset = () => {
    setNumber('');
    setResult('');
  };

  return (
    <Flex
      direction='column'
      alignItems='center'
      justifyContent='center'
      height='100vh'
    >
      <View maxWidth='400px' width='90%'>
        <Heading id='heading' level={1}>
          Roman Numeral Converter
        </Heading>
        <Flex marginTop='size-200' direction='column' gap='size-200'>
          <TextField
            id='number-input'
            label='Enter a number'
            value={number}
            onChange={handleInputChange}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                handleConvert();
              }
            }}
          />
          <Flex gap='size-200' marginTop='size-200'>
            <Button
              id='convert-button'
              variant='primary'
              onPress={handleConvert}
            >
              Convert to Roman Numeral
            </Button>
            <Button id='reset-button' variant='secondary' onPress={handleReset}>
              Reset
            </Button>
          </Flex>
          {result && (
            <Flex direction='row' alignItems='center' gap='size-100'>
              <Heading
                id='roman numerial number'
                level={4}
                marginBottom='0'
                marginTop='0'
              >
                Roman Numeral:
              </Heading>
              <Text>{result}</Text>
            </Flex>
          )}
        </Flex>
      </View>
    </Flex>
  );
}

export default App;
