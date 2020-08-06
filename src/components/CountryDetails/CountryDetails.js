import React from 'react';
import './styles.css';

const CountryDetails = ({name, capital, currency, flag, population}) => {
  return (
    <div className='country-details'>
      <div className='country-header'>
        <img src={flag} alt={`Flag of ${name}`}/>
        <h2>{name}</h2>
      </div>
        <h4>Capital: <span>{capital}</span></h4>
        <h4>Population: <span>{population}</span></h4>
        <h4>Currency: <span>{currency}</span></h4>
    </div>
  );
}

export default CountryDetails;
