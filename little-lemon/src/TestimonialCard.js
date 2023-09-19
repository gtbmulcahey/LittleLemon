import './App.css';
import './css/Testimonials.css';
import { ImageDisplay } from './ImageDisplay';
import { printProps } from './printProps';

export const TestimonialCard = ({testimonial}) => {
    const {name, rating, review, imageImported, imageAlt} = testimonial;
    const ImageWrapped = printProps(ImageDisplay);
    console.log(`imageImported testimonial is ${imageImported}`)
  return (
      <div className="testimonial-card">
            <ImageWrapped className="testimonial-image" alt={imageAlt} imageImported={imageImported} />
            <span>{rating}</span>
            <span>
              {name}
          </span>
            <span className="review">{review}</span>

      </div>
  );
}