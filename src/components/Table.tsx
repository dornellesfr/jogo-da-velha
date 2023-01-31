import React, { useState } from 'react';
import '../styles/attributes.css';
import Empty from './Empty';
import O from './O';
import X from './X';
import TableComponents from '../utils/interfaces/fields.interface';

function Table({ start }: any) {
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

  // function getDraw() {
  //   const all = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  // }

  // function getWinner() {
  //   const positionToWin = [
  //     [0, 1, 2], [3, 4, 5], [6, 7, 8],
  //     [0, 3, 6], [1, 4, 7], [2, 5, 8],
  //     [0, 4, 8], [2, 4, 6],
  //   ];
  // }

  function markWithXorO(typeOfMark: TableComponents) {
    const newSquares = fields.filter((field: TableComponents) => field.id !== typeOfMark.id);

    if (newSquares.length < 9) newSquares.push(typeOfMark);
    newSquares.sort((a, b) => a.id - b.id);
    setField(newSquares);
  }

  function changeMarking(id: number) {
    if (!start) return;
    const idOccupied = fields.find((field) => field.id === id && field.ocuppied === 1);
    if (idOccupied) return;

    setCount(count + 1);
    const oPlay = { id, square: <O />, ocuppied: 1 };
    const xPlay = { id, square: <X />, ocuppied: 1 };

    if (count % 2 === 0) {
      markWithXorO(oPlay);
      return;
    }
    markWithXorO(xPlay);
  }

  return (
    <div className="table-game">
      { fields.map(({ square, id, ocuppied }: any) => (
        <div
          className="item-table"
          role="presentation"
          key={id}
          id={ocuppied}
          onClick={() => changeMarking(id)}
        >
          { square }
        </div>
      )) }
    </div>

  );
}

export default Table;
