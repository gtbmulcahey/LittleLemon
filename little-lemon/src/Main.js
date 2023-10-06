import { useState, useReducer } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Home from './Home';
import Footer from './Footer';
import About from './About';
import Menu from './Menu';
import Bookings from './Bookings';
import OrderOnline from './OrderOnline';
import availableTimesByDate from "./mockData";
import ConfirmedBooking from './ConfirmedBooking';



function Main() {

  const [field, setField] = useState('reservationDate');
  
  const theDate = '2023-09-22';

  const initializeTimes = (theDate) => {
    for(let i = 0; i < availableTimesByDate.length; i++) {
      if(availableTimesByDate[i].date === theDate) {
        return {date: theDate, availableTimes: availableTimesByDate[i].availableTimes};
      }
    }
    return { date: theDate, availableTimes: ['10:00', '11:00']};
  }

  const reducerUpdateTimes = (state, action) => {
    console.log(`action.type is ${action.type}`);
    switch(action.type) {
      case 'updateTimesBasedOnDate':
        return state.availableTimes = initializeTimes(action.payload)};
  };

  const [state, dispatch] = useReducer(reducerUpdateTimes, theDate, initializeTimes); 

  
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Nav/>
        <Routes> 
          <Route path="/" element={<Home/>}></Route>
          <Route path="/About" element={<About/>}></Route>
          <Route path="/Menu" element={<Menu/>}></Route>
          <Route path="/Bookings" element={<Bookings date={state.date} availableTimes={state.availableTimes} dispatch={dispatch} field={field} setField={setField}/>}></Route>
          <Route path="/ConfirmedBooking" element={<ConfirmedBooking/>}></Route>
          <Route path="/OrderOnline" element={<OrderOnline/>}></Route>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default Main;
