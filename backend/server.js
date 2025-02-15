import express from 'express';
import cors from 'cors';
import convertToRoman from './src/converter.js';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.get('/romannumeral', (req, res) => {
  const query = req.query.query;
  const number = parseInt(query, 10);

  const result = convertToRoman(number);

  if (result.startsWith('Invalid input')) {
    return res.status(400).json({ error: result });
  }

  res.json({ input: query, output: result });
});

export { app };

app.listen(PORT, () => console.log(`Server running on localhost:${PORT}`));
