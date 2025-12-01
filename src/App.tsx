import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

export const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App: React.FC = () => {
  const [goods, setGoods] = useState([...goodsFromServer]);

  function sortAlphabetically() {
    setGoods(goods.sort())
  }

  function sortLenght() {
    setGoods(goods.sort((a:string, b:string): number => {
      if(a.length > b.length) {
        return 1
      } else if (a.length < b.length) {
        return -1
      } else {
        return 0
      }
    }))
  }

  function reverse() {
    setGoods(goods.reverse())
  }

  function reset() {
    setGoods(goodsFromServer)
  }


  return (
    <div className="section content">
      <div className="buttons">
        <button type="button" className="button is-info is-light" onClick={sortAlphabetically}>
          Sort alphabetically
        </button>

        <button type="button" className="button is-success is-light" onClick={sortLenght}>
          Sort by length
        </button>

        <button type="button" className="button is-warning is-light" onClick={reverse}>
          Reverse
        </button>

        <button type="button" className="button is-danger is-light" onClick={reset}>
          Reset
        </button>
      </div>

      <ul>
        {goods.map((item) => 
          <li key={item} data-cy="Good">{item}</li>
        )}
      </ul>
    </div>
  );
};
