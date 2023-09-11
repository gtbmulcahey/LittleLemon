import './App.css';
import './css/Specials.css';
import { ImageDisplay } from './ImageDisplay';
import { printProps } from './printProps';

export const SpecialCard = ({dish}) => {
    const {name, price, description, imageName, imageAlt} = dish;
    const ImageWrapped = printProps(ImageDisplay);
  return (
      <div className="special-card">
        <span>
            <ImageWrapped className="special-image" alt={imageAlt} imageName={imageName} />
        </span>
        <div>
          <div>
            <span>{name}</span>
            <span>{price}</span>
          </div>
          <span>{description}</span>
        </div>
      </div>
  );
}