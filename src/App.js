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
      city:'Moscow',
      country:'Russia'
    }
  }
  getWeather = async(e) => {
    e.preventDefault();
    let c = e.target.elements.city.value;
    let co = e.target.elements.country.value;
    this.setState({
      city: c,
      country: co
    })
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${c},${co}&APPID=${Api_Key}`);
    const response = await api_call.json();
    console.log(response);
  }
  render() {
    return (
      <div className="App">
        <Titles />
        <Form loadWeather={this.getWeather}/>

      </div>
    );
  }
}

export default App;
