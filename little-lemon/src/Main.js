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

function Main() {
  
  const [field, setField] = useState('res-date');
  //const initialAvailableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const initialState = {availableTimes: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']};



  //create a function called initializeTimes which will create the initial state for the availableTimes.
  // const initializeTimes = () => {
  //   return initialAvailableTimes;
  // }
  
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
  const [state, dispatch] = useReducer(reducer, initialState); 
  
  useEffect(() => {
    console.log(`field is ${field} right now`);
    console.log(`availableTimes: ${state.availableTimes}`);
}, [field, state]);

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
