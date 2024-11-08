import { render } from '@testing-library/react';
import App from './App';

test('check rendered output', () => {
  const { container } = render(<App />);
  console.log(container.innerHTML); // Check the output here
});