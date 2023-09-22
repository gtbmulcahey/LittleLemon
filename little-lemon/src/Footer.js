import './css/Footer.css';
import { ImageDisplay } from './ImageDisplay';
import { printProps } from './printProps';
import Logo from './images/Logo.svg';
import { Link } from 'react-router-dom';

function Footer() {
  const ImageWrapped = printProps(ImageDisplay);

  return (
      <footer>
        <ImageWrapped height="32" width="100" alt="little lemon" imageImported={Logo}/>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Menu">Menu</Link></li>
          <li><Link to="/Bookings">Reservations</Link></li>
          <li><Link to="/OrderOnline">Order Online</Link></li>
          <li><Link to="/Login">Login</Link></li>
        </ul>

        <ul>
          <li><Link to="\">Address</Link></li>
          <li><Link to="\">Phone Number</Link></li>
          <li><Link to="\">Email</Link></li>
        </ul>

        <ul>
          <li><Link to="\">Social Media Link1</Link></li>
          <li><Link to="\">Social Media Link2</Link></li>
          <li><Link to="\">Social Media Link3</Link></li>
        </ul>
      </footer>
  );
}

export default Footer;