function getPlanetList() {
  const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

  return fetch(URL)
    .then((response) => response.json()
      .then((data) => data)
      .catch((error) => console.log(error)))
    .catch((error) => console.log(error));
}

export default getPlanetList;
