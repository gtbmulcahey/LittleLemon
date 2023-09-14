import './css/Footer.css';
import { ImageDisplay } from './ImageDisplay';
import { printProps } from './printProps';

function Footer() {
  const ImageWrapped = printProps(ImageDisplay);

  return (
      <footer>
        <ImageWrapped height="32" width="100" alt="little lemon" imageName="Logo.svg" />
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/About">About</a></li>
          <li><a href="/Menu">Menu</a></li>
          <li><a href="/Bookings">Reservations</a></li>
          <li><a href="/OrderOnline">Order Online</a></li>
          <li><a href="/Login">Login</a></li>
        </ul>

        <ul>
          <li><a href="\">Address</a></li>
          <li><a href="\">Phone Number</a></li>
          <li><a href="\">Email</a></li>
        </ul>

        <ul>
          <li><a href="\">Social Media Link1</a></li>
          <li><a href="\">Social Media Link2</a></li>
          <li><a href="\">Social Media Link3</a></li>
        </ul>
      </footer>
  );
}

export default Footer;