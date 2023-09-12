import './App.css';
import LittleLemonChicago from './LittleLemonChicago';
import { printProps } from './printProps';
import { ImageDisplay } from './ImageDisplay';

function About() {
    const ImageWrapped = printProps(ImageDisplay);
  return (
      <div className='split olive-background'> 
        <div>
            <LittleLemonChicago/>
            <div>Description of Adrian and Mario and how they became great in the restaurant business. Lorem ipsum....</div>
        </div>
        <span>
            <ImageWrapped className="about-image" alt="little lemon" imageName="Mario and Adrian b.jpg" />
            <ImageWrapped className="about-image" alt="little lemon" imageName="Mario and Adrian A.jpg" />
        </span>
      </div>
  );
}

export default About;