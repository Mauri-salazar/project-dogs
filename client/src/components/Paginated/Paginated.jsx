import React from "react";
import './paginated.css';

export const Paginated = ({ DogsPage, AllDogs, paguinado }) => {
  const pageNumber = [];
  const gamesForPage = Math.ceil(AllDogs/DogsPage);

  for (let i = 0; i <= gamesForPage; i++) {
    pageNumber.push(i + 1);
  }

  return (
    <nav className="nav">
      <ul className="paginated">
        {
          pageNumber && pageNumber.map(number => {
            return (
              <li className="number" key={number}>
                <button onClick={() => paguinado(number)}>{number}</button>
              </li>
            );
          })
        }
       </ul>
    </nav>
  );
}