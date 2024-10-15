import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Jatekter from './components/Jatekter.js';

function App() {
  
  const [lista, setLista] = useState([true, true, false, true, false, false, true, false, true])
  const [allapot, setAllapot] = useState(false)

  function katt(adat) {
    const slista = [...lista]


  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Light On</h1>
      </header>
      <article>
          <Jatekter lista = {lista} katt = {katt}/>
      </article>
      <footer>Pfiffer Attila</footer>
    </div>
  );
}

export default App;
