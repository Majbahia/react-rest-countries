import React, { useEffect, useState } from 'react';

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
        <h1>Visiting  Every Countr in the world!</h1>
        <h3>Available Countries: {counstries.length}</h3>
        {
          counstries.map(country=> <Country name={country.name.common} population={country.population}></Country>)
        }
      </div>
    )
};
function Country(props){
    return(
      <div>
        <h2>Name: {props.name}</h2>
        <h4>Population: {props.population}</h4>
      </div>
    )
  }

export default Countries;