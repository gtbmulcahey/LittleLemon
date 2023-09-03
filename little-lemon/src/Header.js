import './App.css';
import { ImageDisplay } from './ImageDisplay';
import { printProps } from './printProps';

function Header() {

  const ImageWrapped = printProps(ImageDisplay);
  return (
      <header>
        <ImageWrapped height="32" width="100" alt="little lemon" imageName="Logo.svg" />
      </header>
  );
}

export default Header;