import { useState } from 'react';
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
  const [availableTimes, setAvailableTimes] = useState(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
  const [field, setField] = useState('res-date');


  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Nav/>
        <Routes> 
          <Route path="/" element={<Home/>}></Route>
          <Route path="/About" element={<About/>}></Route>
          <Route path="/Menu" element={<Menu/>}></Route>
          <Route path="/Bookings" element={<Bookings availableTimes={availableTimes} field={field} setField={setField}/>}></Route>
          <Route path="/OrderOnline" element={<OrderOnline/>}></Route>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default Main;
