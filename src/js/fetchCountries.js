
const back = 'https://restcountries.com/v3.1/name'
const fetchCountries = function fetchCountryByName(name) {
    return fetch(`${back}/${name}?fields=name,capital,population,flags,languages`)
        .then(response => {
            if (response.ok) {
             return response.json()
        }
        });
    
};
export { fetchCountries };