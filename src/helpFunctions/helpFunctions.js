export const arrayOfObjectsCoppy = (array) => {
  return array.map((object) => JSON.parse(JSON.stringify(object)));
};

export const getCountryObjectById = (countriesData, id) => {
  return countriesData.find((cuntryObj) => (cuntryObj.id === id));
};