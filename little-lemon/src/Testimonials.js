import './App.css';
import './css/Testimonials.css';
import { TestimonialCard } from './TestimonialCard';

function Testimonials() {

  // name, rating, review, imageName, imageAlt
  const reviews = [
    {
        id: 1,
        name: "Hope Penny",
        review: "Review of fantastic food goes here asdfasdfa dsfad fasdfas dfsdfa sdfasfd asdfasd fasdfasd fasdfasdf adfadsfasdf",
        rating: "5.0",
        imageName: "asianWoman.jpg",
        imageAlt: "Hope Penny"
    },
    {
      id: 2,
      name: "Zahara Clemons",
      review: "Review of fantastic food goes here adsfad fadfa dfa sdfak fkjf a;lkj fa;lfk ja;lk jfa;k fjas dlkfj slkfjdsl kjfds  lddkjfl skdjf",
      rating: "5.0",
      imageName: "blackWoman.jpg",
      imageAlt: "Zahara Clemons"
  },
  {
    id: 3,
    name: "Jason Heinz",
    review: "Review of fantastic food goes here aslfdkja fdkja;ldf kja;lsdkjf a;lkdfja skjf;al",
    rating: "5.0",
    imageName: "randomGuy.jpg",
    imageAlt: "Jason Heinz"
}
  ]

  return (
      <div className='gold-background'> 
        <h1>Testimonials</h1>
        <div className='testimonials'>
          <TestimonialCard testimonial={reviews[0]} />
          <TestimonialCard testimonial={reviews[1]} />
          <TestimonialCard testimonial={reviews[2]} />
        </div>
      </div>
  );
}

export default Testimonials;