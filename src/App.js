import Button from "./Button";
import FlexContainer from "./Component/FlexContainer";
import { data } from "./data";
import Navigation from "./Component/Navigation";
import Header from "./Component/Header";

function App() {
  const renderButtons = () => {
    return data.map((item) => (
      <FlexContainer>
        {item.text.map((each, index) => (
          <div className="card" key={index}>
            <h6>{each}</h6>
            <Button {...item.properties[index]}></Button>
          </div>
        ))}
      </FlexContainer>
    ));
  };
  return (
    <div className="App">
      <Header />
      <main>
        <Navigation />
        <div className="style-container">
          <h1>Button &#x1F532;</h1>
          {renderButtons()}
        </div>
      </main>
    </div>
  );
}

export default App;
