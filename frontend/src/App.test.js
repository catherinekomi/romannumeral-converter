import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { Provider, defaultTheme } from '@adobe/react-spectrum';
import '@testing-library/jest-dom';

global.fetch = jest.fn();

const customRender = (ui) => {
  return render(ui, {
    wrapper: ({ children }) => (
      <Provider theme={defaultTheme} scale='medium'>
        {children}
      </Provider>
    ),
  });
};

describe('Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders correctly', () => {
    customRender(<App />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Roman Numeral Converter'
    );
    expect(screen.getByLabelText(/enter a number/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /convert to roman numeral/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /reset/i })).toBeInTheDocument();
  });

  test('Updates input field when typing', () => {
    customRender(<App />);
    const input = screen.getByLabelText(/enter a number/i);
    fireEvent.change(input, { target: { value: '10' } });
    expect(input).toHaveValue('10');
  });

  test('Converts number on button click', async () => {
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ output: 'X' }),
    });

    customRender(<App />);
    const input = screen.getByLabelText(/enter a number/i);
    const button = screen.getByRole('button', {
      name: /convert to roman numeral/i,
    });

    fireEvent.change(input, { target: { value: '10' } });
    fireEvent.click(button);

    expect(await screen.findByText('Roman Numeral:')).toBeInTheDocument();
    expect(await screen.findByText('X')).toBeInTheDocument();
  });

  test('Displays an error alert if API request fails', async () => {
    global.fetch.mockResolvedValueOnce({
      ok: false,
      json: async () => ({ error: 'Invalid input' }),
    });

    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

    customRender(<App />);

    const input = screen.getByLabelText(/enter a number/i);
    const button = screen.getByRole('button', {
      name: /convert to roman numeral/i,
    });

    fireEvent.change(input, { target: { value: 'abc' } });
    fireEvent.click(button);

    await screen.findByRole('button', { name: /convert to roman numeral/i });
    expect(alertMock).toHaveBeenCalledWith('Invalid input');
    alertMock.mockRestore();
  });

  test('Resets input and result when reset button is clicked', async () => {
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ output: 'X' }),
    });

    customRender(<App />);
    const input = screen.getByLabelText(/enter a number/i);
    const convertButton = screen.getByRole('button', {
      name: /convert to roman numeral/i,
    });
    const resetButton = screen.getByRole('button', { name: /reset/i });

    fireEvent.change(input, { target: { value: '10' } });
    fireEvent.click(convertButton);

    expect(await screen.findByText('X')).toBeInTheDocument();

    fireEvent.click(resetButton);

    expect(input).toHaveValue('');
    expect(screen.queryByText('X')).not.toBeInTheDocument();
  });
});
