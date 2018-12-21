import React from 'react';
const Weather = (props) =>{

  const iconLink = 'http://openweathermap.org/img/w/' + props.icon + '.png'

  let forecast = (
    <div>
      <table>
        <tbody>
        <tr>
          <th>
            City
          </th>
          <th>
            Country
          </th>
          <th>
            Temp
          </th>
          <th>
            Humidity
          </th>
          <th>
            Description
          </th>
          <th>
          
          </th>
        </tr>
        <tr>
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
      {forecast}
    </div>
  )
}
export default Weather;