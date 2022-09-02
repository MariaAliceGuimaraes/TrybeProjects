import React from 'react';

import Table from './components/Table';
import TextFilter from './components/TextFilter';
// import NumberFilter from './components/NumberFilter';
import Provider from './context/Provider';

import './App.css';

function App() {
  return (
    <div className="App">
      <Provider>
        <TextFilter />
        {/* <NumberFilter /> */}
        <Table />
      </Provider>
    </div>
  );
}

export default App;
