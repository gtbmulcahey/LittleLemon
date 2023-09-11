import './App.css';
import { ImageDisplay } from './ImageDisplay';
import { printProps } from './printProps';

export const SpecialCard = ({dish}) => {
    const {name, price, description, imageName, imageAlt} = dish;
    const ImageWrapped = printProps(ImageDisplay);
  return (
      <>
        <span>
            <ImageWrapped className="special-image" height="auto" maxHeight="10px" width="100%" maxWidth="10px" alt={imageAlt} imageName={imageName} />
        </span>
        <div>
          <div>
            <span>{name}</span>
            <span>{price}</span>
          </div>
          <span>{description}</span>
        </div>
      </>
  );
}