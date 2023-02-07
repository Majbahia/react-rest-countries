import React from 'react';

const Country = (props) => {
    return (
        <div style={{border:'5px solid red', borderRadius:'20px', padding:'10px', margin:'10px'}}>
            <h2>Name: {props.name}</h2>
        <h4>Population: {props.population}</h4>
        </div>
    );
};

export default Country;