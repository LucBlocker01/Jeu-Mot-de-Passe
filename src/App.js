import { useState, useRef, useEffect } from 'react'
import Password from "./components/Password";
import RulesList from "./components/RulesList";
import InfoPanel from "./components/InfoPanel";

function App() {
  let [passV, setPassV] = useState("");
  let [length, setLength] = useState(1);
  let [fulfilledStatus, setStatus] = useState(Array.from({length}, () => false))

  return (
    <div className="App">
     <div class="main">
      <Password passV={passV} setPassV={setPassV} length={length} fulfilledStatus={fulfilledStatus}></Password>
      <RulesList length={length} setLength={setLength} passV={passV} setPassV={setPassV} fulfilledStatus={fulfilledStatus} setStatus={setStatus}></RulesList>
     </div>
     <div class="side">
      <InfoPanel passV={passV} length={length}></InfoPanel>
     </div>
      <div class="overlay hidden"></div>
      <div class="modal hidden modalEgg">
        <p>Jacques a été tué...</p>
      </div>
      <div class="modal hidden modalEnd">
        <p>Merci d'avoir joué! Plus de règles arriverons bientôt!</p>
      </div>
    </div>
  );
}

export default App;
