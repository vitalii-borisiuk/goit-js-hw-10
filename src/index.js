import './css/styles.css';
import { debounce } from 'lodash';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import countryCardTpl from './template/countrycard.hbs';
import { fetchCountries } from './js/fetchCountries.js';
import getRefs from './js/refs.js';


const DEBOUNCE_DELAY = 300;
const refs = getRefs();

function searchCountry(e) {
    const el = e.target.value;
    fetchCountries(el)
        .then(renderCountryCard)
        .catch(onFetchError)
};


function renderCountryCard(countries) {

    if (countries.length >= 10) {
        Notify.info('Too many matches found. Please enter a more specific name.');
    };

    const country = countryCardTpl(...countries);
        refs.cardContainer.innerHTML = country;

};



function onFetchError() {
    Notify.failure('Oops, there is no country with that name');
};


refs.input.addEventListener('input', debounce(searchCountry, DEBOUNCE_DELAY));