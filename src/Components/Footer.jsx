import PropTypes from "prop-types";

const Footer = ({ onImageSelect, onResetClick, onSaveImageClick }) => {
  const onResetBtnClick = () => {
    const confirm = window.confirm("Are you sure you want to reset?");

    if (confirm) {
      onResetClick();
      return;
    } else {
      return;
    }
  };

  return (
    <div className="footer">
      <div className="left">
        <button onClick={onResetBtnClick}>RESET FILTERS</button>
      </div>

      <div className="right">
        <div className="imagePicker">
          <label>CHOOSE IMAGE</label>
          <input
            accept="image/*"
            onChange={onImageSelect}
            type="file"
            name="imagePicker"
            id="imagePicker"
          />
        </div>
        <button onClick={onSaveImageClick}>SAVE IMAGE</button>
      </div>
    </div>
  );
};

Footer.propTypes = {
  onImageSelect: PropTypes.any,
  onResetClick: PropTypes.any,
  onSaveImageClick: PropTypes.any,
};

export default Footer;
