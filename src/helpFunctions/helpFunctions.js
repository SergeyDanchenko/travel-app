export const arrayOfObjectsCoppy = (array) => {
  return array.map((object) => JSON.parse(JSON.stringify(object)));
};

export const getCountryObjectById = (countriesData, id) => {
  return countriesData.find((cuntryObj) => (cuntryObj.id === id));
};

export const getCountriesObjectsByIds = (countriesData, ids) => {
  let result = [];
  for (let i = 0; i < ids.length; i++ ) {
    result.push(getCountryObjectById(countriesData, ids[i]));
  }
  return result;
}