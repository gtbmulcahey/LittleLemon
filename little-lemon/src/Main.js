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

function Main() {
  
  const [field, setField] = useState('res-date');
  //const initialState = {availableTimes: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']};

  // const fetchData = (date) => {
  //   if(! date) {
  //     return { 'availableTimes': availableTimesByDate[0].availableTimes};
  //   }
  // }

  //create a function called initializeTimes which will create the initial state for the availableTimes.
  const initializeTimes = (theDate) => {
    //return initialState;
    //Update the initializeTimes function that you previously created to use the fetchData API function to return the available times for today’s date. 
    console.log(`initialize times`);
    if(!theDate) {
      console.log(`availableTimesByDate[0].date ${availableTimesByDate[0].date}`);
      return availableTimesByDate[0].date;
    } else {
      for(let i = 0; i < availableTimesByDate.length; i++) {
        console.log(`availableTimesByDate[i].date is ${availableTimesByDate[i].date}`);
        console.log(`availabletimes is ${availableTimesByDate[i].availableTimes}`);
        return {availableTimes: availableTimesByDate[i].availableTimes};
      }
    }

    //return { 'availableTimes': availableTimesByDate[0].availableTimes};
    //fetchData(formatDate(new Date())); 
//Tip: You can create a Date object to represent today’s date.
  }

  const reducer = (state, action) => {
    //return {avaiableTimes: initialAvailableTimes};
    console.log('in the reducer');
    console.log(`action.type is ${action.type}`);
    switch(action.type) {
      case 'updateTimesBasedOnDate':
        return {availableTimes: state.availableTimes};
    }  
  };
  
  //change availableTimes to a reducer using the useReducer function and provide the two previous functions as parameters.
  const [state, dispatch] = useReducer(reducer, initializeTimes('2023-09-22')); 

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
  
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Nav/>
        <Routes> 
          <Route path="/" element={<Home/>}></Route>
          <Route path="/About" element={<About/>}></Route>
          <Route path="/Menu" element={<Menu/>}></Route>
          <Route path="/Bookings" element={<Bookings  availableTimes={state.availableTimes} dispatch={dispatch} field={field} setField={setField}/>}></Route>
          <Route path="/OrderOnline" element={<OrderOnline/>}></Route>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default Main;
