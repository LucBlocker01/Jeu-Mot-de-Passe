import {useState} from 'react'
import Password from "./components/Password";
import RulesList from "./components/RulesList";

function App() {
  let [passV, setPassV] = useState("");
  return (
    <div className="App">
      <Password passV={passV} setPassV={setPassV}></Password>
      <RulesList length={2} passV={passV}></RulesList>
    </div>
  );
}

export default App;
