import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders math operation inputs', () => {
  render(<App />);
  
  const number1Input = screen.getByPlaceholderText('Number 1');
  const number2Input = screen.getByPlaceholderText('Number 2');
  const operationSelect = screen.getByRole('combobox');
  const calculateButton = screen.getByText('Calculate');

  expect(number1Input).toBeInTheDocument();
  expect(number2Input).toBeInTheDocument();
  expect(operationSelect).toBeInTheDocument();
  expect(calculateButton).toBeInTheDocument();
});

test('performs addition correctly', async () => {
  render(<App />);
  
  const number1Input = screen.getByPlaceholderText('Number 1');
  const number2Input = screen.getByPlaceholderText('Number 2');
  const operationSelect = screen.getByRole('combobox');
  const calculateButton = screen.getByText('Calculate');
  const resultText = screen.getByText('Result:');

  fireEvent.change(number1Input, { target: { value: '5' } });
  fireEvent.change(number2Input, { target: { value: '7' } });
  fireEvent.change(operationSelect, { target: { value: '+' } });

  fireEvent.click(calculateButton);

  // Simulating the asynchronous nature of the axios call
  await screen.findByText('12');
  expect(resultText).toHaveTextContent('Result:');
  expect(screen.getByRole('heading', { name: '12' })).toBeInTheDocument();
});

test('performs subtraction correctly', async () => {
  render(<App />);
  
  const number1Input = screen.getByPlaceholderText('Number 1');
  const number2Input = screen.getByPlaceholderText('Number 2');
  const operationSelect = screen.getByRole('combobox');
  const calculateButton = screen.getByText('Calculate');
  const resultText = screen.getByText('Result:');

  fireEvent.change(number1Input, { target: { value: '10' } });
  fireEvent.change(number2Input, { target: { value: '3' } });
  fireEvent.change(operationSelect, { target: { value: '-' } });

  fireEvent.click(calculateButton);

  await screen.findByText('7');
  expect(resultText).toHaveTextContent('Result:');
  expect(screen.getByRole('heading', { name: '7' })).toBeInTheDocument();
});

test('performs multiplication correctly', async () => {
  render(<App />);
  
  const number1Input = screen.getByPlaceholderText('Number 1');
  const number2Input = screen.getByPlaceholderText('Number 2');
  const operationSelect = screen.getByRole('combobox');
  const calculateButton = screen.getByText('Calculate');
  const resultText = screen.getByText('Result:');

  fireEvent.change(number1Input, { target: { value: '4' } });
  fireEvent.change(number2Input, { target: { value: '5' } });
  fireEvent.change(operationSelect, { target: { value: '*' } });

  fireEvent.click(calculateButton);

  await screen.findByText('20');
  expect(resultText).toHaveTextContent('Result:');
  expect(screen.getByRole('heading', { name: '20' })).toBeInTheDocument();
});

test('performs division correctly', async () => {
  render(<App />);
  
  const number1Input = screen.getByPlaceholderText('Number 1');
  const number2Input = screen.getByPlaceholderText('Number 2');
  const operationSelect = screen.getByRole('combobox');
  const calculateButton = screen.getByText('Calculate');
  const resultText = screen.getByText('Result:');

  fireEvent.change(number1Input, { target: { value: '15' } });
  fireEvent.change(number2Input, { target: { value: '3' } });
  fireEvent.change(operationSelect, { target: { value: '/' } });

  fireEvent.click(calculateButton);

  await screen.findByText('5');
  expect(resultText).toHaveTextContent('Result:');
  expect(screen.getByRole('heading', { name: '5' })).toBeInTheDocument();
});

test('handles large number inputs', async () => {
  render(<App />);
  
  const number1Input = screen.getByPlaceholderText('Number 1');
  const number2Input = screen.getByPlaceholderText('Number 2');
  const operationSelect = screen.getByRole('combobox');
  const calculateButton = screen.getByText('Calculate');
  const resultText = screen.getByText('Result:');

  fireEvent.change(number1Input, { target: { value: '999999999999999' } });
  fireEvent.change(number2Input, { target: { value: '1' } });
  fireEvent.change(operationSelect, { target: { value: '+' } });

  fireEvent.click(calculateButton);

  await screen.findByText('1000000000000000');
  expect(resultText).toHaveTextContent('Result:');
  expect(screen.getByRole('heading', { name: '1000000000000000' })).toBeInTheDocument();
});

test('handles negative number inputs', async () => {
  render(<App />);
  
  const number1Input = screen.getByPlaceholderText('Number 1');
  const number2Input = screen.getByPlaceholderText('Number 2');
  const operationSelect = screen.getByRole('combobox');
  const calculateButton = screen.getByText('Calculate');
  const resultText = screen.getByText('Result:');

  fireEvent.change(number1Input, { target: { value: '-8' } });
  fireEvent.change(number2Input, { target: { value: '4' } });
  fireEvent.change(operationSelect, { target: { value: '*' } });

  fireEvent.click(calculateButton);

  await screen.findByText('-32');
  expect(resultText).toHaveTextContent('Result:');
  expect(screen.getByRole('heading', { name: '-32' })).toBeInTheDocument();
});

test('handles decimal inputs', async () => {
  render(<App />);
  
  const number1Input = screen.getByPlaceholderText('Number 1');
  const number2Input = screen.getByPlaceholderText('Number 2');
  const operationSelect = screen.getByRole('combobox');
  const calculateButton = screen.getByText('Calculate');
  const resultText = screen.getByText('Result:');

  fireEvent.change(number1Input, { target: { value: '3.5' } });
  fireEvent.change(number2Input, { target: { value: '2.5' } });
  fireEvent.change(operationSelect, { target: { value: '+' } });

  fireEvent.click(calculateButton);

  await screen.findByText('6');
  expect(resultText).toHaveTextContent('Result:');
  expect(screen.getByRole('heading', { name: '6' })).toBeInTheDocument();
});
