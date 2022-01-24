import Button from "./Button";
import FlexContainer from "./Component/FlexContainer";
import { data } from "./data";

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
      <h1>Button &#x1F532;</h1>
      {renderButtons()}
    </div>
  );
}

export default App;
