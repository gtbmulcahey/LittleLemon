import './App.css';
import LittleLemonChicago from './LittleLemonChicago';
import { printProps } from './printProps';
import { ImageDisplay } from './ImageDisplay';
import MarioAndAdrianA from './images/Mario and Adrian A.jpg';
import MarioAndAdrianB from './images/Mario and Adrian b.jpg';


function About() {
    const ImageWrapped = printProps(ImageDisplay);
  return (
      <div className='split olive-background'> 
        <div>
            <LittleLemonChicago/>
            <div>Description of Adrian and Mario and how they became great in the restaurant business. Lorem ipsum....</div>
        </div>
        <span>
            <ImageWrapped className="about-image" alt="little lemon" imageImported={MarioAndAdrianB} />
            <ImageWrapped className="about-image" alt="little lemon" imageImported={MarioAndAdrianA} />
        </span>
      </div>
  );
}

export default About;