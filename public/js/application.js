const findoutWeather = document.querySelector('#weatherForm');
if (findoutWeather) {
  findoutWeather.addEventListener('submit', async (e) => {
    e.preventDefault();
    document.querySelector('.days').style.visibility = 'hidden';
    const location = document.getElementById('location').value;
    if (location) {
      const images = document.querySelector('.genWeather img');
      if (images) {
        document.querySelector('.genWeather img').remove();
        document.querySelector('.genWeather2 img').remove();
        document.querySelector('.genWeather3 img').remove();
        document.querySelector('.genWeather4 img').remove();
        document.querySelector('.genWeather div').remove();
        document.querySelector('.genWeather2 div').remove();
        document.querySelector('.genWeather3 div').remove();
        document.querySelector('.genWeather4 div').remove();
      }

      const weatherLink = `http://api.worldweatheronline.com/premium/v1/marine.ashx?key=06b62d7a89054ae28f074220211105&format=json&tide=yes&q=${location}`;
      const respons = await fetch(weatherLink);
      const resul = await respons.json();
      const latLong = location.split(',');
      const alertLink = `https://api.openweathermap.org/data/2.5/onecall?lat=${latLong[0]}&lon=${latLong[1]}&exclude=current,minutely,hourly&appid=eabbb7a46c45599d2c29281b447d190d`;
      const response = await fetch(alertLink);
      const result = await response.json();
      console.log(resul.data.weather[0].date);
      console.log(resul.data.weather[0].astronomy[0].sunrise);
      console.log(resul.data.weather[0].astronomy[0].sunset);
      console.log(resul.data.weather[0].hourly[0].time);
      console.log(resul.data.weather[0].hourly[0].swellHeight_m);
      console.log(resul.data.weather[0].hourly[0].tempC);
      console.log(resul.data.weather[0].hourly[0].tempF);
      console.log(resul.data.weather[0].tides[0].tide_data[1].tideTime, 'tideTime');
      console.log(resul.data.weather[0].tides[0].tide_data[1].tide_type, 'tideType');
      console.log(resul.data.weather[0].tides[0].tide_data[2].tideTime, 'tideTime');
      console.log(resul.data.weather[0].tides[0].tide_data[2].tide_type, 'tideType');
      console.log('!!!!', resul.data.weather[0].hourly);
      // console.log(resul.data.weather[0].tides[0].tide_data[3].tideTime, 'tideTime');
      // console.log(resul.data.weather[0].tides[0].tide_data[3].tide_type, 'tideType');

      document.querySelector('.day1 .fa-calendar-o').innerText = resul.data.weather[0].date;
      document.querySelector('.day1 .sunrise').innerText = resul.data.weather[0].astronomy[0].sunrise;
      document.querySelector('.day1 .sunset').innerText = resul.data.weather[0].astronomy[0].sunset;
      document.querySelector('.day1 .spantime6').innerText = resul.data.weather[0].hourly[2].swellHeight_m;
      document.querySelector('.day1 .time6').innerText = resul.data.weather[0].hourly[2].tempF;
      document.querySelector('.day1 .spantime9').innerText = resul.data.weather[0].hourly[3].swellHeight_m;
      document.querySelector('.day1 .time9').innerText = resul.data.weather[0].hourly[3].tempF;
      document.querySelector('.day1 .spantime12').innerText = resul.data.weather[0].hourly[4].swellHeight_m;
      document.querySelector('.day1 .time12').innerText = resul.data.weather[0].hourly[4].tempF;
      document.querySelector('.day1 .spantime3pm').innerText = resul.data.weather[0].hourly[5].swellHeight_m;
      document.querySelector('.day1 .time3pm').innerText = resul.data.weather[0].hourly[5].tempF;
      document.querySelector('.day1 .spantime6pm').innerText = resul.data.weather[0].hourly[6].swellHeight_m;
      document.querySelector('.day1 .time6pm').innerText = resul.data.weather[0].hourly[6].tempF;

      document.querySelector('.day2 .fa-calendar-o').innerText = resul.data.weather[1].date;
      document.querySelector('.day2 .sunrise').innerText = resul.data.weather[1].astronomy[0].sunrise;
      document.querySelector('.day2 .sunset').innerText = resul.data.weather[1].astronomy[0].sunset;
      document.querySelector('.day2 .spantime6').innerText = resul.data.weather[1].hourly[2].swellHeight_m;
      document.querySelector('.day2 .time6').innerText = resul.data.weather[1].hourly[2].tempF;
      document.querySelector('.day2 .spantime9').innerText = resul.data.weather[1].hourly[3].swellHeight_m;
      document.querySelector('.day2 .time9').innerText = resul.data.weather[1].hourly[3].tempF;
      document.querySelector('.day2 .spantime12').innerText = resul.data.weather[1].hourly[4].swellHeight_m;
      document.querySelector('.day2 .time12').innerText = resul.data.weather[1].hourly[4].tempF;
      document.querySelector('.day2 .spantime3pm').innerText = resul.data.weather[1].hourly[5].swellHeight_m;
      document.querySelector('.day2 .time3pm').innerText = resul.data.weather[1].hourly[5].tempF;
      document.querySelector('.day2 .spantime6pm').innerText = resul.data.weather[1].hourly[6].swellHeight_m;
      document.querySelector('.day2 .time6pm').innerText = resul.data.weather[1].hourly[6].tempF;

      document.querySelector('.day3 .fa-calendar-o').innerText = resul.data.weather[2].date;
      document.querySelector('.day3 .sunrise').innerText = resul.data.weather[2].astronomy[0].sunrise;
      document.querySelector('.day3 .sunset').innerText = resul.data.weather[2].astronomy[0].sunset;
      document.querySelector('.day3 .spantime6').innerText = resul.data.weather[2].hourly[2].swellHeight_m;
      document.querySelector('.day3 .time6').innerText = resul.data.weather[2].hourly[2].tempF;
      document.querySelector('.day3 .spantime9').innerText = resul.data.weather[2].hourly[3].swellHeight_m;
      document.querySelector('.day3 .time9').innerText = resul.data.weather[2].hourly[3].tempF;
      document.querySelector('.day3 .spantime12').innerText = resul.data.weather[2].hourly[4].swellHeight_m;
      document.querySelector('.day3 .time12').innerText = resul.data.weather[2].hourly[4].tempF;
      document.querySelector('.day3 .spantime3pm').innerText = resul.data.weather[2].hourly[5].swellHeight_m;
      document.querySelector('.day3 .time3pm').innerText = resul.data.weather[2].hourly[5].tempF;
      document.querySelector('.day3 .spantime6pm').innerText = resul.data.weather[2].hourly[6].swellHeight_m;
      document.querySelector('.day3 .time6pm').innerText = resul.data.weather[2].hourly[6].tempF;

      document.querySelector('.day4 .fa-calendar-o').innerText = resul.data.weather[3].date;
      document.querySelector('.day4 .sunrise').innerText = resul.data.weather[3].astronomy[0].sunrise;
      document.querySelector('.day4 .sunset').innerText = resul.data.weather[3].astronomy[0].sunset;
      document.querySelector('.day4 .spantime6').innerText = resul.data.weather[3].hourly[2].swellHeight_m;
      document.querySelector('.day4 .time6').innerText = resul.data.weather[3].hourly[2].tempF;
      document.querySelector('.day4 .spantime9').innerText = resul.data.weather[3].hourly[3].swellHeight_m;
      document.querySelector('.day4 .time9').innerText = resul.data.weather[3].hourly[3].tempF;
      document.querySelector('.day4 .spantime12').innerText = resul.data.weather[3].hourly[4].swellHeight_m;
      document.querySelector('.day4 .time12').innerText = resul.data.weather[3].hourly[4].tempF;
      document.querySelector('.day4 .spantime3pm').innerText = resul.data.weather[3].hourly[5].swellHeight_m;
      document.querySelector('.day4 .time3pm').innerText = resul.data.weather[3].hourly[5].tempF;
      document.querySelector('.day4 .spantime6pm').innerText = resul.data.weather[3].hourly[6].swellHeight_m;
      document.querySelector('.day4 .time6pm').innerText = resul.data.weather[3].hourly[6].tempF;

      // console.log(latLong);

      console.log('alert', result);
      // console.log('alert', result.daily[0].weather[0].description);
      // console.log('alert', result.daily[1].weather[0].description);
      // console.log('alert', result.daily[1].weather[0]);
      // console.log('alert', result.daily[1]);
      // console.log('here', result.daily[0].dt);
      const generalInfo = document.querySelector('.genWeather');
      const newIcon = document.createElement('img');
      newIcon.setAttribute('src', `http://openweathermap.org/img/wn/${result.daily[0].weather[0].icon}@2x.png`);
      generalInfo.appendChild(newIcon);
      const newDiv = document.createElement('div');
      newDiv.innerText = result.daily[0].weather[0].description;
      generalInfo.appendChild(newDiv);

      const generalInfo2 = document.querySelector('.genWeather2');
      const newIcon2 = document.createElement('img');
      newIcon2.setAttribute('src', `http://openweathermap.org/img/wn/${result.daily[1].weather[0].icon}@2x.png`);
      generalInfo2.appendChild(newIcon2);
      const newDiv2 = document.createElement('div');
      newDiv2.innerText = result.daily[1].weather[0].description;
      generalInfo2.appendChild(newDiv2);

      const generalInfo3 = document.querySelector('.genWeather3');
      const newIcon3 = document.createElement('img');
      newIcon3.setAttribute('src', `http://openweathermap.org/img/wn/${result.daily[2].weather[0].icon}@2x.png`);
      generalInfo3.appendChild(newIcon3);
      const newDiv3 = document.createElement('div');
      newDiv3.innerText = result.daily[2].weather[0].description;
      generalInfo3.appendChild(newDiv3);

      const generalInfo4 = document.querySelector('.genWeather4');
      const newIcon4 = document.createElement('img');
      newIcon4.setAttribute('src', `http://openweathermap.org/img/wn/${result.daily[3].weather[0].icon}@2x.png`);
      generalInfo4.appendChild(newIcon4);
      const newDiv4 = document.createElement('div');
      newDiv4.innerText = result.daily[3].weather[0].description;
      generalInfo4.appendChild(newDiv4);
      document.querySelector('.days').style.visibility = 'visible';
    }
  });
}
// http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=eabbb7a46c45599d2c29281b447d190d


