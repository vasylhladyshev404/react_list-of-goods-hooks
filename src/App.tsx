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
  const [isSortedAlpha, setSortedAlpha] = useState(false);
  const [isSortedLen, setSortedLen] = useState(false);
  const [isReversed, setIsReversed] = useState(false);

  function sortAlphabetically() {
    setGoods(goods.sort())
    setSortedAlpha((isSortedAlpha) => !isSortedAlpha)
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
    setSortedLen((isSortedLen) => !isSortedLen)
  }

  function reverse() {
    setGoods(goods.reverse())
    setIsReversed((isReversed) => !isReversed)
    
  }

  function reset() {
    setGoods(goodsFromServer)
    setSortedAlpha(false)
    setSortedLen(false)
    setIsReversed(false)
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
        {(isReversed || isSortedAlpha || isSortedLen) && 
          <button type="button" className="button is-danger is-light" onClick={reset}>
            Reset
          </button>
        }
      </div>

      <ul>
        {goods.map((item) => 
          <li key={item} data-cy="Good">{item}</li>
        )}
      </ul>
    </div>
  );
};
