import { fireEvent, render, screen, queryByAttribute } from '@testing-library/react';
import {BrowserRouter, Router} from 'react-router-dom';
import userEvent from "@testing-library/user-event";
import BookingForm from './BookingForm';
import App from './App';
import Main from './Main';

test('renders static text', () => {
  const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
  
  render(<BookingForm availableTimes={availableTimes}/>);
  const dateTitle = screen.getByText("Choose date");
  expect(dateTitle).toBeInTheDocument();
});

test('dates coming in', () => {

  const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
  render(<BookingForm availableTimes={availableTimes}/>);
  const timeStuff = screen.getByLabelText(/Choose time/);

});

// test('render main', async  () => {
//   const component = render(<Main />);
//   const specials = await component.findByText("This Week's Specials");
//   expect(specials).toBeInTheDocument();
//   const reservationsLink = await component.findByText('Reservations');
//   expect(reservationsLink).toBeInTheDocument();
//   await fireEvent.click(reservationsLink, {button: 0});
  
  

//   //const logSpy = jest.spyOn(console, 'log');
//   //console.log(logSpy);
//  //expect(logSpy.availableTimes).toBe([17:00]);
// });
