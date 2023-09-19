import './App.css';
import LittleLemonChicago from './LittleLemonChicago';
import { ImageDisplay } from './ImageDisplay';
import { printProps } from './printProps';
import restaurantfood from './images/restaurantfood.jpg';

function Banner() {
    const ImageWrapped = printProps(ImageDisplay);
  return (
      <div className='split olive-background'>
        <span>
            <LittleLemonChicago />
            <span className='white'>Little lemon banner description elaborate here asdfasdfa sdfasdfasf dasefasdfa dsf asdfaasdfasd fasdfa sdfa sfdasefasdfadsfasdfaas dfasdf asdf</span>
        </span>
        <span>
            <ImageWrapped className="banner-image" alt="little lemon" imageImported={restaurantfood} />
        </span>
      </div>
  );
}

export default Banner;