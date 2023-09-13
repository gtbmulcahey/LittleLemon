import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import About from './About';
import Menu from './Menu';
import Reservations from './Reservations';
import OrderOnline from './OrderOnline';

function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Main/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Menu" element={<Menu/>}></Route>
        <Route path="/Reservations" element={<Reservations/>}></Route>
        <Route path="/OrderOnline" element={<OrderOnline/>}></Route>

      </Routes>
      <div className="App">
        <Header/>
        <Nav/>
        <Main>
        </Main>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
