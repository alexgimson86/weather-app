import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Titles from './components/Title.js'
import Form from './components/Form.js'
import Weather from './components/Weather.js'
const Api_Key = '5f44a3c33e11771fa7b43cee2023732c'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      city:null,
      country:null,
     // temperature: [],//response.main.temp,
      weather: [],//response.main.humidity,
    }
  }
  getWeather = async(e) => {
    e.preventDefault();
    let c = e.target.elements.city.value;
    let co = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${c},${co}&APPID=${Api_Key}`);
    const response = await api_call.json();
   // let farenheight = (response.list[0].main.temp - subT)*nF + addTh
    //console.log(response.list[0].main.humidity)
    //console.log(response.list[0].weather[0].description)
        this.setState({
          city: c,
          country: co,
         // temperature: farenheight,
          weather: response.list,
        })
  }
  render() {
    return (
      <div>
        <div className="container-fluid">
        <Titles/>
        <Form loadWeather={this.getWeather}/>
        </div>
        <div className="container">
          <Weather city={this.state.city} 
                  country={this.state.country}
                  temperature={this.state.temperature}
                  weather={this.state.weather}
                  />
       </div>
      </div>
    );
  }
}

export default App;
