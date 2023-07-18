import { MdRotateLeft, MdRotateRight } from "react-icons/md";
import { LuFlipHorizontal2, LuFlipVertical2 } from "react-icons/lu";
import PropTypes from "prop-types";
import { useRef } from "react";

const FiltersCard = ({
  filterData,
  setFilterData,
  onSliderChange,
  onSetRotateFlip,
}) => {
  const { filter, brightnessVal, saturationVal, inversionVal, grayscaleVal } =
    filterData;

  const sliderRange = useRef();

  const getValue = () => {
    if (filter === "Brightness") {
      sliderRange.current ? (sliderRange.current.max = 200) : null;
      return brightnessVal;
    }
    if (filter === "Saturation") {
      sliderRange.current ? (sliderRange.current.max = 200) : null;
      return saturationVal;
    }
    if (filter === "Inversion") {
      sliderRange.current ? (sliderRange.current.max = 100) : null;
      return inversionVal;
    }
    if (filter === "Grayscale") {
      sliderRange.current ? (sliderRange.current.max = 100) : null;
      return grayscaleVal;
    }
  };

  return (
    <div className="filterCard">
      <div>
        <p className="filterText">Filters</p>

        <div className="filterBtns">
          <button
            onClick={setFilterData}
            className={filter === "Brightness" ? "active" : ""}
          >
            Brightness
          </button>
          <button
            onClick={setFilterData}
            className={filter === "Saturation" ? "active" : ""}
          >
            Saturation
          </button>
          <button
            onClick={setFilterData}
            className={filter === "Inversion" ? "active" : ""}
          >
            Inversion
          </button>
          <button
            onClick={setFilterData}
            className={filter === "Grayscale" ? "active" : ""}
          >
            Grayscale
          </button>
        </div>
      </div>

      <div className="scaleContainer">
        <div>
          <p className="scaleText">{filter}</p>
          <p className="scalePercentage">{getValue()}%</p>
        </div>
        <input
          type="range"
          ref={sliderRange}
          name="scaleRanger"
          id="scaleRanger"
          min={0}
          max={200}
          value={getValue()}
          onInput={onSliderChange}
          onChange={onSliderChange}
        />
      </div>

      <div>
        <p className="filterText">Rotate & Flip</p>

        <div className="changerBtns">
          <button onClick={() => onSetRotateFlip("left")}>
            <MdRotateLeft />
          </button>
          <button onClick={() => onSetRotateFlip("right")}>
            <MdRotateRight />
          </button>
          <button onClick={() => onSetRotateFlip("horizontal")}>
            <LuFlipHorizontal2 />
          </button>
          <button onClick={() => onSetRotateFlip("vertical")}>
            <LuFlipVertical2 />
          </button>
        </div>
      </div>
    </div>
  );
};

FiltersCard.propTypes = {
  filterData: PropTypes.any,
  setFilterData: PropTypes.any,
  onSliderChange: PropTypes.any,
  onSetRotateFlip: PropTypes.any,
};

export default FiltersCard;
