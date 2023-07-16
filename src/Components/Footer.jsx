const Footer = () => {
  return (
    <div className="footer">
      <div className="left">
        <button>RESET FILTERS</button>
      </div>

      <div className="right">
        <div className="imagePicker">
          <label>CHOOSE IMAGE</label>
          <input type="file" name="imagePicker" id="imagePicker" />
        </div>
        <button>SAVE IMAGE</button>
      </div>
    </div>
  );
};

export default Footer;
