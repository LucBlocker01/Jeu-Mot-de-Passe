import {useState} from 'react'
import Password from "./components/Password";
import RulesList from "./components/RulesList";

function App() {
  let [passV, setPassV] = useState("");
  let [length, setLength] = useState(1);
  return (
    <div className="App">
      <Password passV={passV} setPassV={setPassV} length={length} setLength={setLength}></Password>
      <RulesList length={length} passV={passV}></RulesList>
    </div>
  );
}

export default App;
