import { render, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import App from './App';

jest.mock('axios');

test('Square a Number', async () => {
  const { getByLabelText, getByText } = render(<App />);

  const input = getByLabelText('Type Your Number');
  fireEvent.change(input, { target: { value: '5' } });

  const squareButton = getByText('Square');
  fireEvent.click(squareButton);

  await waitFor(() => expect(axios.post).toHaveBeenCalled());

  // Add assertions for the expected behavior after receiving the result from the API
});
