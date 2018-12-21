import React from 'react';
const Weather = (props) =>{


  let forecast = (
    <div>
      <table>
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
        </tr>
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