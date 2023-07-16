import Container from "./Components/Container";
import FiltersCard from "./Components/FiltersCard";
import Footer from "./Components/Footer";
import ImageCard from "./Components/ImageCard";

function App() {
  return (
    <Container>
      <p className="headerText">Image Editor</p>

      <div className="card">
        <ImageCard />
        <FiltersCard />
      </div>

      <Footer />
    </Container>
  );
}

export default App;
