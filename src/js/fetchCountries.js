
const back = 'https://restcountries.com/v3.1/name'
const fetchCountries = function fetchCountryByName(name) {
    return fetch(`${back}/${ name }`)
        .then(response => response.json());
    
};
export { fetchCountries };