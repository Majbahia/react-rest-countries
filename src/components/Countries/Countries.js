import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
    const[counstries, setCountries]=useState([]);
    useEffect( ()=>{
      fetch('https://restcountries.com/v3.1/all')
      .then(res=> res.json())
      .then(data=> setCountries(data))
    }, [])
    return(
      <div>
        {/* <h2>{console.log("hello")}</h2> */}
        <h1>Visiting  Every Country in the world!</h1>
        <h3>Available Countries: {counstries.length}</h3>
        <div className='countries-container'>
        {
          counstries.map(country=> <Country country={country} key={country.cca3}></Country>)
        }
        </div>
      </div>
    )
};

export default Countries;