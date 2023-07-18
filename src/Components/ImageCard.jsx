import { NoImg } from "../Assets/images/Svg";
import PropTypes from "prop-types";

const ImageCard = ({ data, imageRef }) => {
  const {
    img,
    brightnessVal,
    saturationVal,
    inversionVal,
    grayscaleVal,
    rotate,
    flipHorizontal,
    flipVertical,
  } = data;

  return (
    <>
      <div className="imageCard">
        {img ? (
          <img
            style={{
              transform: `rotate(${rotate}deg) scale(${flipHorizontal}, ${flipVertical})`,
              filter: `brightness(${brightnessVal}%) saturate(${saturationVal}%) invert(${inversionVal}%) grayscale(${grayscaleVal}%)`,
            }}
            ref={imageRef}
            src={img}
            alt={img}
          />
        ) : (
          <NoImg />
        )}
      </div>
    </>
  );
};

ImageCard.propTypes = {
  data: PropTypes.any,
  imageRef: PropTypes.any,
};

export default ImageCard;
