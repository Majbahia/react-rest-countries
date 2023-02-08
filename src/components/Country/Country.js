import React from 'react';
import './Country.css';

const Country = (props) => {
    console.log(props.country);
    const {name, area, region, flags, population}=props.country;
    return (
        <div className="contain">
        <h2>Name: {name.common}</h2>
        <img src={flags.png} alt="" />
        <h4>Population: {population}</h4>
        <h5>Area: {area}</h5>
        <h6>Region: {region}</h6>
        
        </div>
    );
};

export default Country;