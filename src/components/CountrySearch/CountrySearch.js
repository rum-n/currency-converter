import React, { useState } from 'react';
import './styles.css';
import Alert from '../Alert';
import CountryDetails from './../CountryDetails/CountryDetails';

function CountrySearch() {
    const [query, setQuery] = useState('');
    const [country, setCountry] = useState('');
    const [alert, setAlert] = useState('');
    const [currency, setCurrency] = useState('');
    const [currencyQuery, setCurrencyQuery] = useState('');
    const [convertedCurrency, setConvertedCurrency] = useState('');
    
    const url = `https://restcountries.eu/rest/v2/name/${query}`;
    const fetchCountry = async () => {
        if (query !== '') {
            const res = await fetch(url);
                if (res.status !== 200 && res.status !== 201) {
                    return setAlert("No country with that name");
                }
            const countryJSON = await res.json();
            setCountry(countryJSON[0]);
            setQuery('');
            setAlert('');
            setCurrency(countryJSON[0].currencies[0].code);
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

    const APIkey = 'c56f5c90d2e02ad185e8f6bc2cda5387';
    const currencyUrl = `https://data.fixer.io/api/convert?access_key=${APIkey}&from=SEK&to=${currency}&amount=${currencyQuery}`;

    const fetchCurrency = async () => {
        const res = await fetch(currencyUrl);
        const currencyJSON = await res.json();
        setConvertedCurrency(currencyJSON.result);
        console.log(convertedCurrency);
    };

    const onCurrencyChange = e => setCurrencyQuery(e.target.value);

    const onCurrencySubmit = e => {
        e.preventDefault();
        fetchCurrency();
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
            population={country.population.toLocaleString()}
            currency={currency}
        />}

        { country && (<div>
                <h2>Convert SEK to {currency}</h2>
                <form onSubmit={onCurrencySubmit} className='country-input'> 
                    <input 
                        placeholder='SEK' 
                        type='text'
                        name='query'
                        value={currencyQuery}
                        onChange={onCurrencyChange}
                    />
                    <input className='search' value='Convert' type='submit'/>
                </form>
            { convertedCurrency && <h2>{currencyQuery} SEK = {convertedCurrency} {currency}</h2>}
            </div>)}
    </div>
  );
}

export default CountrySearch;
