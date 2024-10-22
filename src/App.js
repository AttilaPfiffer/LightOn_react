import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Jatekter from './components/Jatekter.js';
import { KattContext } from './contexts/KattContext.js';
import { useContext } from 'react';


function App() {
  
  const {lista} = useContext(KattContext)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Light On</h1>
      </header>
      <article>
          <Jatekter lista = {lista} />
      </article>
      <footer>Pfiffer Attila</footer>
    </div>
  );
}

export default App;
