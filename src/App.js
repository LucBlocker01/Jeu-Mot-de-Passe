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
      <div class="overlay"></div>
      <div class="modal modalEgg">
        <p>JACQUES EST MORT</p>
      </div>
      <div class="modal modalFood">
        <p>JACQUES A ÉTÉ SURALIMENTÉ</p>
      </div>
      <div class="modal modalEnd">
        <p>MERCI D'AVOIR JOUÉ! PLUS DE RÈGLES ARRIVERONS BIENTÔT!</p>
      </div>
    </div>
  );
}

export default App;
