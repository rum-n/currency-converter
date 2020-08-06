import React from 'react';
import './styles.css';
import CountrySearch from '../components/CountrySearch/CountrySearch';

function Home() {
  return (
    <div className='main'>
      <h1 className='title'>Welcome to the <br/>Anyfin Currency Converter!</h1>
      <CountrySearch/>
    </div>
  );
}

export default Home;
