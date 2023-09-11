import './App.css';
import Banner from './Banner';
import { SpecialCards } from './SpecialCards';
import Testimonials from './Testimonials';
import About from './About';

function Main() {
  return (
      <main>
        <Banner />
        <SpecialCards />
        <Testimonials />
        <About/>
      </main>
  );
}

export default Main;