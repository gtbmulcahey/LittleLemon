import { useState, useReducer, useEffect } from 'react';
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
  
  const [field, setField] = useState('res-date');
  
  const theDate = '2023-09-22';

  const initializeTimes = (theDate) => {
    const formattedDate = formatDate(theDate);
    for(let i = 0; i < availableTimesByDate.length; i++) {
      if(availableTimesByDate[i].date === formattedDate) {
        return {availableTimes: availableTimesByDate[i].availableTimes};
      }
      return { availableTimes: ['10:00', '11:00']};
    }
  }

  const reducer = (state, action) => {
    console.log(`action.type is ${action.type}`);
    switch(action.type) {
      case 'updateTimesBasedOnDate':
        return state.availableTimes = initializeTimes(action.payload)};
  };

  const [state, dispatch] = useReducer(reducer, theDate, initializeTimes); 

  function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
  }

  const submitForm = (formData) => {
    //submitApi not working return true;
    console.log(`formData is ${formData}`);
    state.date = formData;
    console.log(`state.date is ${state.date}`);
    console.log(`state.availableTimes is ${state.availableTimes}`);
    window.open(`/ConfirmedBooking/`); 
  }
  
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Nav/>
        <Routes> 
          <Route path="/" element={<Home/>}></Route>
          <Route path="/About" element={<About/>}></Route>
          <Route path="/Menu" element={<Menu/>}></Route>
          <Route path="/Bookings" element={<Bookings submitForm={submitForm} availableTimes={state.availableTimes} dispatch={dispatch} field={field} setField={setField}/>}></Route>
          <Route path="/ConfirmedBooking" element={<ConfirmedBooking/>}></Route>
          <Route path="/OrderOnline" element={<OrderOnline/>}></Route>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default Main;
