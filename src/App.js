import Button from "./Button";
import FlexContainer from "./Component/FlexContainer";

function App() {
  return (
    <div className="App">
      <h2>Button</h2>
      <FlexContainer>
        <Button variant="outline" size="sm" startIcon="fa fa-glass" disabled />
      </FlexContainer>
    </div>
  );
}

export default App;
