import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Titles from './components/Title.js'
import Form from './components/Form.js'
import Weather from './components/Weather.js'
const Api_Key = '5f44a3c33e11771fa7b43cee2023732c'
class App extends Component {
  getWeather = async() => {
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${Api_Key}`);
  
    const response = await api_call.json();
  
    console.log(response);
  }
  render() {
    return (
      <div className="App">
        <Titles />
        <Form loadWeather={this.getWeather()}/>

      </div>
    );
  }
}

export default App;
