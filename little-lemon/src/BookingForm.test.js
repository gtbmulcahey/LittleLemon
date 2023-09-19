import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';
import Main from './Main';

test('renders static text', () => {
  render(<BookingForm availableTimes={['17:00']}/>);
  const dateTitle = screen.getByText("Choose date");
  expect(dateTitle).toBeInTheDocument();
});

test('render main', () => {
  render(<Main />);
});
