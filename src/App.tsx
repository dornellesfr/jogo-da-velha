import React, { useState } from 'react';
import Table from './components/Table';

function App() {
  const [start, setStart] = useState(false);

  function startGame() {
    setStart(true);
  }

  return (
    <div>
      <h1>Jogo da velha</h1>
      <button type="button" onClick={startGame}>Iniciar o jogo</button>
      <Table start={start} />
    </div>
  );
}

export default App;
