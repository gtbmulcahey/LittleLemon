import './css/ImageDisplay.css';

export const ImageDisplay = ({alt, imageName, className}) => {

    const images = require.context('./images', true);

    return (
        <img 
        className={className}
        alt={alt}
        src={images(`./${imageName}`)}/>
    );
}