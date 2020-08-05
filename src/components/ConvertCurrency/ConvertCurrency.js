import React from 'react';
// import './styles.css';

function ConvertCurrency() {
  return (
    <div>
        <h2>Enter amount in SEK</h2>
        <form className='country-input'> 
            <input 
                placeholder='SEK' 
                type='text' 
                name='query'
                // value={query} 
                // onChange={onChange}
            />
            <input className='search' value='Convert' type='submit'/>
        </form>
    </div>
  );
}

export default ConvertCurrency;
