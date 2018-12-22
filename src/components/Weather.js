import React from 'react';
const Weather = (props) =>{

  const iconLink = 'http://openweathermap.org/img/w/' + props.icon + '.png'
  const date = new Date();
  let day = date.getDay();
  let dayRay = ["Monday", "Tuesday","Wednesday","Thursday", "Friday", "Saturday" , "Sunday"]
  
  let forecastFirst = (
    <div>
      <table className="table">
        <thead className="thead-light">
        <tr>
          <th scope="col">
            Day
          </th>
          <th scope="col">
            City
          </th>
          <th scope="col">
            Country
          </th>
          <th scope="col">
            Temp
          </th>
          <th scope="col">
            Humidity
          </th>
          <th scope="col">
            Description
          </th>
          <th scope="col">
          </th>
        </tr>
          </thead>
        <tbody>
        <tr>
          <th scope="row">
            {dayRay[day -1]}
          </th>
          <td>
            {props.city}
          </td>
          <td>
            {props.country}
          </td>
          <td>
            {Math.floor(props.temperature)} deg/F
          </td>
          <td>
            {props.humidity}
          </td>
          <td>
            {props.description}
          </td>
          <td>
           <img src={iconLink} alt="" />
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  );
  return (
    <div>
      {forecastFirst}
    </div>
  )
}
export default Weather;