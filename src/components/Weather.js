import React from 'react';
const Weather = (props) =>{
  const subT = 273.15
  const nF = 9.0/5.0
  const addTh = 32
  const iconLink = 'http://openweathermap.org/img/w/';
  const date = new Date();
  let day = date.getDay();
  let dayRay = ["Sunday", "Monday", "Tuesday","Wednesday","Thursday", "Friday", "Saturday"]
  let titles = ["Day","City", "Country","Temperature","Humidity","Description"]
  let tableData = [];
  let formattedData = [[dayRay[day]],[dayRay[(++day)%dayRay.length]],[dayRay[(++day)%dayRay.length]],[dayRay[(++day)%dayRay.length]],[dayRay[(++day)%dayRay.length]]];
  let iconArr = [];
  let farenheight;
  if(props.weather.length !== 0){
    tableData = [props.weather[4],props.weather[12], props.weather[20], props.weather[28], props.weather[36]];
    tableData.forEach((day, i )=>{
      formattedData[i].push(props.city)
      formattedData[i].push(props.country)
      farenheight = (day.main.temp_max - subT)*nF + addTh;
      formattedData[i].push(Math.round(farenheight) + " Farenheight")
      formattedData[i].push(day.main.humidity + "%")
      formattedData[i].push(day.weather[0].description)
      const fullIcon = iconLink + day.weather[0].icon + ".png"
      iconArr.push(fullIcon)
   })
    /*for(let i = 0; i < props.weather.length; i += 7){
        tableData.push(`<td>${JSON.stringify(props.weather[i].dt)}</td><td>${dayRay[day]}</td><td>${JSON.stringify(props.city)}</td><td>${JSON.stringify(props.country)}</td><td>${JSON.stringify(props.weather[i].main.humidity)}</td><td>${JSON.stringify(props.weather[i].weather[0].description)}</td><td>${iconLink + JSON.stringify(props.weather[i].weather[0].icon)}</td>`);
    }*/
  }
  let forecastFirst = (
    <div>
      <table className="table">
        <thead className="thead-light">
        <tr>
          {titles.map(title =>
            <th scope="col" key={title}>{title}</th>
          )}
        </tr>
          </thead>
        <tbody>
          <tr>
           {formattedData[0].map( (data, i) => 
              <td key={i}>{data}</td>)}
              <td key={iconArr[0]}><img src={iconArr[0]} alt=""></img></td>
          </tr>
          <tr>
           {formattedData[1].map( (data, i) => 
              <td key={i}>{data}</td>)}
              <td key={iconArr[1]}><img src={iconArr[1]} alt=""></img></td>
          </tr>
          <tr>
           {formattedData[2].map( (data, i) => 
              <td key={i}>{data}</td>)}
              <td key={iconArr[2]}><img src={iconArr[2]} alt=""></img></td>
          </tr>
          <tr>
           {formattedData[3].map( (data, i) => 
              <td key={i}>{data}</td>)}
              <td key={iconArr[3]}><img src={iconArr[3]} alt=""></img></td>
          </tr>
          <tr>
           {formattedData[4].map( (data, i) => 
              <td key={i}>{data}</td>)}
              <td key={iconArr[4]}><img src={iconArr[4]} alt=""></img></td>
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