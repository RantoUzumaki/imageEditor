import { useRef, useState } from "react";
import Container from "./Components/Container";
import FiltersCard from "./Components/FiltersCard";
import Footer from "./Components/Footer";
import ImageCard from "./Components/ImageCard";

function App() {
  const [data, setData] = useState({
    img: "",
    fileName: "",
    filter: "Brightness",
    brightnessVal: 100,
    saturationVal: 100,
    inversionVal: 0,
    grayscaleVal: 0,
    rotate: 0,
    flipHorizontal: 1,
    flipVertical: 1,
  });

  const imageRef = useRef();

  const onImageSelect = (e) => {
    if (e.target.files.length !== 0) {
      setData({
        ...data,
        img: URL.createObjectURL(e.target.files[0]),
        fileName: e.target.files[0].name,
      });
    }
  };

  const setFilterBtn = (e) => {
    setData({ ...data, filter: e.target.innerText });
  };

  const sliderChange = (e) => {
    if (data.filter === "Brightness") {
      setData({ ...data, brightnessVal: e.target.value });
    }
    if (data.filter === "Saturation") {
      setData({ ...data, saturationVal: e.target.value });
    }
    if (data.filter === "Inversion") {
      setData({ ...data, inversionVal: e.target.value });
    }
    if (data.filter === "Grayscale") {
      setData({ ...data, grayscaleVal: e.target.value });
    }
  };

  const setRotateFlip = (e) => {
    if (e === "left") {
      setData({ ...data, rotate: data.rotate - 90 });
    }
    if (e === "right") {
      setData({ ...data, rotate: data.rotate + 90 });
    }
    if (e === "horizontal") {
      setData({ ...data, flipHorizontal: data.flipHorizontal === 1 ? -1 : 1 });
    }
    if (e === "vertical") {
      setData({ ...data, flipVertical: data.flipVertical === 1 ? -1 : 1 });
    }
  };

  const onSaveImageClick = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = imageRef.current.naturalWidth;
    canvas.height = imageRef.current.naturalHeight;

    ctx.filter = `brightness(${data.brightnessVal}%) saturate(${data.saturationVal}%) invert(${data.inversionVal}%) grayscale(${data.grayscaleVal}%)`;
    ctx.translate(canvas.width / 2, canvas.height / 2);
    if (data.rotate !== 0) {
      ctx.rotate((data.rotate * Math.PI) / 180);
    }
    ctx.scale(data.flipHorizontal, data.flipVertical);
    ctx.drawImage(
      imageRef.current,
      -canvas.width / 2,
      -canvas.height / 2,
      canvas.width,
      canvas.height
    );

    const link = document.createElement("a");
    link.download = data.fileName;
    link.href = canvas.toDataURL();
    link.click();
  };

  const onResetClick = () => {
    setData({
      img: "",
      filter: "Brightness",
      brightnessVal: 100,
      saturationVal: 100,
      inversionVal: 0,
      grayscaleVal: 0,
      rotate: 0,
      flipHorizontal: 1,
      flipVertical: 1,
    });
  };

  return (
    <Container className={data.img === "" ? "container disable" : "container"}>
      <p className="headerText">Image Editor</p>

      <div className="card">
        <ImageCard data={data} imageRef={imageRef} />
        <FiltersCard
          filterData={data}
          setFilterData={setFilterBtn}
          onSliderChange={sliderChange}
          onSetRotateFlip={setRotateFlip}
        />
      </div>

      <Footer
        onImageSelect={onImageSelect}
        onResetClick={onResetClick}
        onSaveImageClick={onSaveImageClick}
      />
    </Container>
  );
}

export default App;
