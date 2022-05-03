import './App.css';
import { useState } from 'react';


function App() {
  const [greet, setGreet] = useState("");
  const [name, setName] = useState(false);
  const clickas = () => {
  const inp = document.getElementById("inp").value;
    setName (inp);
    setGreet (true);
    if (greet){
      setGreet(false);
    }
  }
  return (
    <div className="App">
      <input id="inp" type = "text" ></input>
      <button onClick = {clickas}>{!greet ? "show": "hide"}</button> 
      <br />
      <h1>{greet ? `Hello ${name}`: "" }</h1>
    </div>
  );
}

export default App;
