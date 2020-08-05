import React, { useState } from 'react';
import './styles.css';
import Alert from '../Alert';
import CountryDetails from './../CountryDetails/CountryDetails';
import ConvertCurrency from '../ConvertCurrency/ConvertCurrency';

function CountrySearch() {
    const [query, setQuery] = useState('');
    const [country, setCountry] = useState('');
    const [alert, setAlert] = useState('');
    
    const url = `https://restcountries.eu/rest/v2/name/${query}`;
    const fetchCountry = async () => {
        if (query !== '') {
            const res = await fetch(url);
            // if (res.message = 'Not found') {
            //     return setAlert("No country with that name");
            // }
            const countryJSON = await res.json();
            setCountry(countryJSON[0]);
            setQuery('');
            setAlert('');
            console.log(country);
        } else {
            setAlert('Please submit a country');
        }
    };

    const onChange = e => setQuery(e.target.value);

    const onSubmit = e => {
        e.preventDefault();
        fetchCountry();
    };

  return (
    <div>
        <h2>Type a country to start</h2>
        {alert !== "" && <Alert alert={alert} />}
        <form onSubmit={onSubmit} className='country-input'> 
            <input 
                placeholder='Country' 
                type='text' 
                name='query'
                value={query} 
                onChange={onChange}
            />
            <input className='search' value='Search' type='submit'/>
        </form>
        { country && <CountryDetails
            flag={country.flag}
            name={country.name}
            capital={country.capital}
            population={country.population}
        />}

        {country && <ConvertCurrency/>}
    </div>
  );
}

export default CountrySearch;
