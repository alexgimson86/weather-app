import React, { Component } from 'react';
const Form = (props) =>{
    return(
        <form onSubmit={props.loadWeather}>
            <div className="form-group">
                city:
                    <input type="text" className="form-control" name="city"/>
                country:
                    <input type="text" className="form-control" name="country"/>
                    <button type="submit" className="btn btn-primary">Get Weather</button>
            </div>
        </form>
        );
    }
    export default Form