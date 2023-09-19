import './App.css';
import { ImageDisplay } from './ImageDisplay';
import { printProps } from './printProps';
import Logo from './images/Logo.svg';

function Header() {

  const ImageWrapped = printProps(ImageDisplay);
  return (
      <header>
        <ImageWrapped height="32" width="100" alt="little lemon" imageImported={Logo} />
      </header>
  );
}

export default Header;