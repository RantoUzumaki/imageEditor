import { MdRotateLeft, MdRotateRight } from "react-icons/md";
import { LuFlipHorizontal2, LuFlipVertical2 } from "react-icons/lu";

const FiltersCard = () => {
  return (
    <div className="filterCard">
      <p className="filterText">Filters</p>

      <div className="filterBtns">
        <button className="active">Brightness</button>
        <button>Saturation</button>
        <button>Inversion</button>
        <button>Grayscale</button>
      </div>

      <div className="scaleContainer">
        <div>
          <p className="scaleText">Brightness</p>
          <p className="scalePercentage">100%</p>
        </div>
        <input
          type="range"
          name="scaleRanger"
          id="scaleRanger"
          min={0}
          max={200}
        />
      </div>

      <p className="filterText">Rotate & Flip</p>

      <div className="changerBtns">
        <button>
          <MdRotateLeft />
        </button>
        <button>
          <MdRotateRight />
        </button>
        <button>
          <LuFlipHorizontal2 />
        </button>
        <button>
          <LuFlipVertical2 />
        </button>
      </div>
    </div>
  );
};

export default FiltersCard;
