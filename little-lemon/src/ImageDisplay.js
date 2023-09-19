import './css/ImageDisplay.css';

export const ImageDisplay = ({alt, imageImported, className}) => {

    return (
        <img 
        className={className}
        alt={alt}
        src={imageImported}/>
    );
}