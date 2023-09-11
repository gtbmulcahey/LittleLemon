import './App.css';
import './css/Testimonials.css';
import { TestimonialCard } from './TestimonialCard';

function Testimonials() {

  // name, rating, review, imageName, imageAlt
  const reviews = [
    {
        id: 1,
        name: "Hope Penny",
        review: "Review of fantastic food goes here",
        rating: "5.0",
        imageName: "asianWoman.jpg",
        imageAlt: "Hope Penny"
    },
    {
      id: 2,
      name: "Zahara Clemons",
      review: "Review of fantastic food goes here",
      rating: "5.0",
      imageName: "blackWoman.jpg",
      imageAlt: "Zahara Clemons"
  },
  {
    id: 3,
    name: "Jason Heinz",
    review: "Review of fantastic food goes here",
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