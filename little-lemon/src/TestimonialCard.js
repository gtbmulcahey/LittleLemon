import './App.css';
import { ImageDisplay } from './ImageDisplay';
import { printProps } from './printProps';

export const TestimonialCard = ({testimonial}) => {
    const {name, rating, review, imageName, imageAlt} = testimonial;
    const ImageWrapped = printProps(ImageDisplay);
  return (
      <>
      <div>{rating}</div>
        <span>
            <ImageWrapped className="testimonial-image" alt={imageAlt} imageName={imageName} />
        </span>
        <div>
            <span>{name}</span>
            <span>{review}</span>
        </div>
      </>
  );
}