import './App.css';
import './css/Nav.css';

function Nav() {
  return (
      <nav>
        <a href="/">Home</a>
          <a href="/About">About</a>
          <a href="/Menu">Menu</a>
          <a href="/Bookings">Reservations</a>
          <a href="/OrderOnline">Order Online</a>
          <a href="/Login">Login</a>
      </nav>
  );
}

export default Nav;