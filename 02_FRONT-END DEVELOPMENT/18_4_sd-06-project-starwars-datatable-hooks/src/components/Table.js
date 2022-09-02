import React, { useContext } from 'react';

import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { currentPlanets, tableHeaders, setCurrentPlanets } = useContext(StarWarsContext);
  const comparisonFilters = [
    'maior que', 'menor que', 'igual a',
  ];

  const filteredHeaders = tableHeaders.filter((header) => (
    header === 'population'
    || header === 'orbital_period'
    || header === 'rotation_period'
    || header === 'surface_water'
    || header === 'diameter'
  ));

  const handleButtonClick = () => {
    const column = document.getElementById('column').value;
    const comparison = document.getElementById('comparison').value;
    const vaalue = document.getElementById('number').value;
    const numberValue = parseInt(vaalue, 0);
    const columnValues = (currentPlanets.map((planet) => planet[column]));

    // columnValues pega os valores de cada planeta naquela key
    if (!!numberValue || !!comparison) {
      if (comparison === 'maior que') {
        const list = (columnValues.map((val) => val > numberValue));
        setCurrentPlanets(currentPlanets.filter((_, i) => list[i]));
      } else if (comparison === 'menor que') {
        const list = (columnValues.map((val) => val < numberValue));
        setCurrentPlanets(currentPlanets.filter((_, i) => list[i]));
      } else if (comparison === 'igual a') {
        const list = (columnValues.map((val) => val === vaalue));
        setCurrentPlanets(currentPlanets.filter((_, i) => list[i]));
      } else {
        const list = (currentPlanets);
        setCurrentPlanets(currentPlanets.filter((_, i) => list[i]));
      }
    } else if (!numberValue || !comparison) {
      currentPlanets.map((planet) => (
        <tr key={ planet.name }>
          {tableHeaders.map((col) => (
            <td key={ planet.name + col }>
              {planet[col]}
            </td>
          ))}
        </tr>
      ));
    }
  };

  return (
    <div>
      <section>
        <select
          data-testid="column-filter"
          id="column"
        >
          {
            filteredHeaders.map((header) => <option key={ header }>{header}</option>)
          }
        </select>

        <select
          data-testid="comparison-filter"
          name="comparison-filter"
          id="comparison"
        >
          <option>Comparison filter</option>
          {comparisonFilters.map((element) => (
            <option key={ element } value={ element }>
              {element}
            </option>
          ))}
        </select>

        <input
          type="number"
          data-testid="value-filter"
          placeholder="Filter by value"
          id="number"
        />

        <button
          type="button"
          onClick={ handleButtonClick }
          data-testid="button-filter"
        >
          Filter
        </button>

      </section>
      <section>
        <table>
          <thead>
            <tr>
              {
                tableHeaders.map((header) => <th key={ header }>{header}</th>)
              }
            </tr>
          </thead>
          <tbody>
            {
              currentPlanets.map((element, index) => (
                <tr key={ index }>
                  <td id={ `planet-${element.name}` }>
                    { element.name }
                  </td>
                  <td id={ `planet-${element.name}-rotation-period` }>
                    { element.rotation_period }
                  </td>
                  <td id={ `planet-${element.name}-orbital-period` }>
                    { element.orbital_period }
                  </td>
                  <td id={ `planet-${element.name}-diameter` }>
                    { element.diameter }
                  </td>
                  <td id={ `planet-${element.name}-climate` }>
                    { element.climate }
                  </td>
                  <td id={ `planet-${element.name}-gravity` }>
                    { element.gravity }
                  </td>
                  <td id={ `planet-${element.name}-terrain` }>
                    { element.terrain }
                  </td>
                  <td id={ `planet-${element.name}-surface-water` }>
                    { element.surface_water }
                  </td>
                  <td id={ `planet-${element.name}-population` }>
                    { element.population }
                  </td>
                  <td id={ `planet-${element.name}-films` }>
                    { element.films }
                  </td>
                  <td id={ `planet-${element.name}-created` }>
                    { element.created }
                  </td>
                  <td id={ `planet-${element.name}-edited` }>
                    { element.edited }
                  </td>
                  <td id={ `planet-${element.name}-url` }>
                    { element.url }
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Table;
