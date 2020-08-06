import React from 'react';
import Home from './pages/Home';
import Footer from './components/footer/Footer';
// import { CountryProvider } from './components/CountryContext';

function App() {
  return (
    // <CountryProvider>
      <div>
        <Home/>
        <Footer/>
      </div>
    // </CountryProvider>
  );
}

export default App;
