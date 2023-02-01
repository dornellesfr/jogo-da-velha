import React, { useEffect, useState } from 'react';
import '../styles/attributes.css';
import Empty from './Empty';
import O from './O';
import X from './X';
import TableComponents from '../utils/interfaces/fields.interface';
import includesArray from '../utils/includesArrays';

function Table() {
  const [fields, setField] = useState([
    { square: <Empty />, id: 0, ocuppied: 0 },
    { square: <Empty />, id: 1, ocuppied: 0 },
    { square: <Empty />, id: 2, ocuppied: 0 },
    { square: <Empty />, id: 3, ocuppied: 0 },
    { square: <Empty />, id: 4, ocuppied: 0 },
    { square: <Empty />, id: 5, ocuppied: 0 },
    { square: <Empty />, id: 6, ocuppied: 0 },
    { square: <Empty />, id: 7, ocuppied: 0 },
    { square: <Empty />, id: 8, ocuppied: 0 },
  ]);
  const [count, setCount] = useState(0);
  const [playsX, setPlaysX]: any = useState([]);
  const [playsO, setPlaysO]: any = useState([]);
  const [statusPlay, setStatusPlay] = useState(true);

  useEffect(() => {
    const positionsToWin = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];
    if (includesArray(playsX, positionsToWin)) { setStatusPlay(false); }
    if (includesArray(playsO, positionsToWin)) { setStatusPlay(false); }
  }, [playsO, playsX]);

  function markWithXorO(squareId: number) {
    const newSquares = fields.filter((field: TableComponents) => field.id !== squareId);

    if (count % 2 === 0) {
      const mark = { square: <X />, id: squareId, ocuppied: 1 };
      if (newSquares.length < 9) newSquares.push(mark);
      setPlaysX([...playsX, squareId]);
    } else {
      const mark = { square: <O />, id: squareId, ocuppied: 1 };
      if (newSquares.length < 9) newSquares.push(mark);
      setPlaysO([...playsO, squareId]);
    }

    newSquares.sort((a, b) => a.id - b.id);
    setField(newSquares);
  }

  function makeAPlay(id: number) {
    if (!statusPlay) return;

    const idOccupied = fields.some((field) => field.id === id && field.ocuppied === 1);

    if (idOccupied) return;

    setCount(count + 1);
    const payload = id;

    markWithXorO(payload);
  }

  return (
    <div className="table-game">
      { fields.map(({ square, id }: any) => (
        <div
          className="item-table"
          role="presentation"
          key={id}
          onClick={() => makeAPlay(id)}
        >
          { square }
        </div>
      )) }
    </div>

  );
}

export default Table;
