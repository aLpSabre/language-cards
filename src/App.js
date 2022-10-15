import reactlogo from "./assets/react.svg"
import Container from "./componenets/container/container";


function App() {
  return (
    <>
      <div className="container">
        <img src={reactlogo} alt="logo" id="logo" />

        <Container />
      </div>

    </>
  );
}

export default App;
