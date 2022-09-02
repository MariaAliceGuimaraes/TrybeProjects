import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function TextFilter() {
  const { setNameFilter } = useContext(StarWarsContext);
  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        placeholder="Filter by Name"
        onChange={ (event) => setNameFilter(event.target.value) }
      />
    </div>
  );
}

export default TextFilter;
