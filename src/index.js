import './css/styles.css';
import countryCardTpl from './template/countrycard.hbs'
import { Notify } from 'notiflix/build/notiflix-notify-aio';



const DEBOUNCE_DELAY = 300;
const refs = {
    cardContainer: document.querySelector('.country-info'),
    input: document.querySelector('#search-box'),
}


function searchCountry(e) {
    const el = e.currentTarget.value;
    fetchCountryByName(el).then(renderCountryCard)
        .catch((error) => Notify.failure('Oops, there is no country with that name'))
        .finally(() => Notify.info('Too many matches found. Please enter a more specific name.'));
}

function renderCountryCard(countries) {
     const country = countryCardTpl(...countries);
     refs.cardContainer.innerHTML = country;
};

function fetchCountryByName(name) {
    return fetch(`https://restcountries.com/v3.1/name/${name}`)
        .then(response =>response.json());
    
};

refs.input.addEventListener('input', searchCountry);