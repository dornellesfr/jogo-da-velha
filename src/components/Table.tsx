import React, { useState } from 'react';
import '../styles/attributes.css';
import Empty from './Empty';
import O from './O';

function Table() {
  const [field, setField]: any = useState({
    // eslint-disable-next-line object-property-newline
    a: <Empty />, b: <Empty />, c: <Empty />, // eslint-disable-next-line object-property-newline
    d: <Empty />, e: <Empty />, f: <Empty />, // eslint-disable-next-line object-property-newline
    g: <Empty />, h: <Empty />, i: <Empty />,
  });
  const [letter, setLetter] = useState('');
  const [start, setStart] = useState(false);

  const squareField = Object.keys(field);

  function change(square: string) {
    setField({ ...field, [square]: <O /> });
  }

  function startGame() {
    setStart(true);
  }
  return (
    <div>
      <button type="button" onChange={startGame}>Iniciar o jogo</button>
      { squareField.map((square) => (
        <div
          role="presentation"
          key={square}
          id={square}
          onClick={() => change(square)}
        >
          {field[square]}
        </div>
      )) }
    </div>

  );

  return <div>oii</div>;
}

export default Table;
