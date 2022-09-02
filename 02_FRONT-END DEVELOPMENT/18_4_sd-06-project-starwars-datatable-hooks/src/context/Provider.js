import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import getPlanetList from '../services/planetListAPI';

function Provider({ children }) {
  const [currentPlanets, setCurrentPlanets] = useState([]);
  const [tableHeaders, setTableHeader] = useState([]);
  const [fetchedPlanets, setFetchedPlanets] = useState([]);
  const [nameFilter, setNameFilter] = useState('');

  const [filters, setFilter] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [{
      column: '',
      comparison: '',
      value: 0,
    }],
  });

  useEffect(() => {
    const fetchAndSavePlanets = async () => {
      const data = await getPlanetList();

      setFetchedPlanets(data.results);

      setTableHeader(Object.keys(data.results[0])
        .filter((header) => header !== 'residents'));
    };
    fetchAndSavePlanets();
  }, []);

  useEffect(() => {
    const input = new RegExp(nameFilter, 'i');
    const filteredPlanets = fetchedPlanets.filter((planet) => input.test(planet.name));
    setCurrentPlanets(filteredPlanets);
  }, [fetchedPlanets, nameFilter]);

  const context = {
    currentPlanets,
    tableHeaders,
    setNameFilter,
    setFilter,
    filters,
    setCurrentPlanets,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      { children }
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default Provider;
