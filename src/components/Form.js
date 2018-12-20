import React, { Component } from 'react';
const Form = (props) =>{
    return(
        <form onSubmit={props.loadWeather}>
        city:
            <input type="text" name="city"/>
        country:
            <input type="text" name="country"/>
            <button>Get Weather</button>
        </form>
        );
    }
    export default Form