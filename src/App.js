import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Titles from './components/Title.js'
import Form from './components/Form.js'
import Weather from './components/Weather.js'
const Api_Key = '5f44a3c33e11771fa7b43cee2023732c'
const subT = 273.15
const nF = 9.0/5.0
const addTh = 32
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      city:null,
      country:null,
      temperature: null,//response.main.temp,
      humidity: null,//response.main.humidity,
      error:null,
      description: null,//response.weather[0].description,
      icon: null
    }
  }
  getWeather = async(e) => {
    e.preventDefault();
    let c = e.target.elements.city.value;
    let co = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${c},${co}&APPID=${Api_Key}`);
    const response = await api_call.json();
    let farenheight = (response.list[0].main.temp - subT)*nF + addTh
    console.log(response.list[0].main.humidity)
    console.log(response.list[0].weather[0].description)
        this.setState({
          city: c,
          country: co,
          temperature: farenheight,
          humidity: response.list[0].main.humidity,
          error: "",
          description: response.list[0].weather[0].description,
          icon: response.list[0].weather[0].icon
        })
  }
  render() {
    return (
      <div className="App">
        <Titles />
        <Form loadWeather={this.getWeather}/>
        <Weather city={this.state.city} 
                 country={this.state.country}
                 temperature={this.state.temperature}
                 humidity={this.state.humidity}
                 description={this.state.description} 
                 icon={this.state.icon}
                 />

      </div>
    );
  }
}

export default App;
