import Password from "./components/Password";
import RulesList from "./components/RulesList";

function App() {
  return (
    <div className="App">
      <Password></Password>
      <RulesList length={10}></RulesList>
    </div>
  );
}

export default App;
