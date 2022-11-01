import React from "react";
import './paginated.css';

export const Paginated = ({ DogsPage, AllDogs, paguinado }) => {
  const pageNumber = [];
  const dogsForPage = Math.ceil(AllDogs/DogsPage);

  for (let i = 1 ; i <= dogsForPage; i++) {
     pageNumber.push(i);
  }

  return (
    <nav className="nav">
      <ul className="paginated">
        {
          pageNumber && pageNumber.map(number => {
            return (
              <li className="number" key={number}>
                <p className="cont-number" onClick={() => paguinado(number)}>{number}</p>
              </li>
            );
          })
        }
       </ul>
    </nav>
  );
}
