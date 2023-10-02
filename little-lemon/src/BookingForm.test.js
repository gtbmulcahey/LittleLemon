import { fireEvent, render, screen, cleanup, queryByAttribute } from '@testing-library/react';
import {BrowserRouter, Router} from 'react-router-dom';
import userEvent from "@testing-library/user-event";
import BookingForm from './BookingForm';
import './App.css';
import Main from './Main';

afterEach(cleanup);

test('renders static text', () => {
  const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
  
  render(<BookingForm availableTimes={availableTimes}/>);
  const dateTitle = screen.getByText("Choose date");
  expect(dateTitle).toBeInTheDocument();
});

test('rendersWithoutCrashing', () => {
  render(<Main/>);
});

test('rendersCorrectly', () => {
  const availableTimes = ['17:00', '18:00']
  const {getByTestId} = render(<BookingForm availableTimes={availableTimes}/>);
  expect(getByTestId('availableTimesTestId')).toHaveTextContent(availableTimes[0]);
  expect(getByTestId('availableTimesTestId')).toHaveTextContent(availableTimes[1]);
});

test('clickReservationsLink', async () =>{
  const {getByTestId} = render(<Main/>);
  const navBookingsLink = getByTestId('navBookings');
  fireEvent.click(navBookingsLink);
  expect(getByTestId('availableTimesTestId')).toHaveTextContent('10:00');
  expect(getByTestId('availableTimesTestId')).toHaveTextContent('11:00');
})