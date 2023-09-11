import './App.css';
import './css/Testimonials.css';
import { ImageDisplay } from './ImageDisplay';
import { printProps } from './printProps';

export const TestimonialCard = ({testimonial}) => {
    const {name, rating, review, imageName, imageAlt} = testimonial;
    const ImageWrapped = printProps(ImageDisplay);
  return (
      <div className="testimonial-card">
      <div>{rating}</div>
        <div className="image-and-review">
            <ImageWrapped className="testimonial-image" alt={imageAlt} imageName={imageName} />
            <span>{review}</span>
        </div>
        <div>
            {name}
        </div>
      </div>
  );
}