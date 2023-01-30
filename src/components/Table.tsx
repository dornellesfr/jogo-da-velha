import React, { useState } from 'react';
import '../styles/attributes.css';
import Empty from './Empty';
import O from './O';

function Table() {
  const [field, setField] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [starting, setStarting] = useState(false);

  const cells = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  function change() {
    setField(O);
  }

  function startGame() {
    setStarting(true);
  }

  if (!starting) {
    return (
      <div>
        <button type="button" onClick={startGame}>Clique para iniciar o jogo</button>
        { cells.map((i) => (
          <div role="presentation" key={i} onClick={change} className="table-game"><Empty /></div>
        )) }
      </div>

    );
  }

  return <div>oii</div>;
}

export default Table;
