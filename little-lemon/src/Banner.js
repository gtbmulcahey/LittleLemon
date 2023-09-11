import './App.css';
import LittleLemonChicago from './LittleLemonChicago';
import { ImageDisplay } from './ImageDisplay';
import { printProps } from './printProps';

function Banner() {
    const ImageWrapped = printProps(ImageDisplay);
  return (
      <div className='split olive-background'>
        <span className='half'>
            <LittleLemonChicago />
            <span className='white'>Little lemon banner description elaborate here asdfasdfasdfasdfasfdasefasdfadsfasdfaasdfasdfasdfasdfasfdasefasdfadsfasdfaasdfasdfasdfasdfasfdasefasdfadsfasdfa</span>
        </span>
        <span className='half'>
            <ImageWrapped className="banner-image" alt="little lemon" imageName="restaurantfood.jpg" />
        </span>
      </div>
  );
}

export default Banner;