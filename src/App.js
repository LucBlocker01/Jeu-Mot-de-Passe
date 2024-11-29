import {useState} from 'react'
import Password from "./components/Password";
import RulesList from "./components/RulesList";

function App() {
  let [passV, setPassV] = useState("");
  let [length, setLength] = useState(1);
  let [fulfilledStatus, setStatus] = useState(Array.from({length}, () => false))
  return (
    <div className="App">
      <Password passV={passV} setPassV={setPassV} length={length} fulfilledStatus={fulfilledStatus}></Password>
      <RulesList length={length} setLength={setLength} passV={passV} fulfilledStatus={fulfilledStatus} setStatus={setStatus}></RulesList>
    </div>
  );
}

export default App;
