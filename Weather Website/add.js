const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "898953fc0bmshb3e17c52996e759p189fb1jsn90a3e07ff4b8",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

function getTimeFormat(time) {
  var date = new Date(time * 1000);
  var hours = date.getHours();
  var minutes = "0" + date.getMinutes();
  var seconds = "0" + date.getSeconds();
  t = hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
  return t;
}

const getWeather = (city) => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      cityName.innerHTML = city;
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;

      sunrise.innerHTML = getTimeFormat(response.sunrise);

      sunset.innerHTML = getTimeFormat(response.sunset);
    })
    .catch((err) => console.error(err));
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

getWeather("Lucknow");

// DELHI

const getDelhi = () => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      dtemp.innerHTML = response.temp;
      dfeels_like.innerHTML = response.feels_like;
      dhumidity.innerHTML = response.humidity;
      dmin_temp.innerHTML = response.min_temp;
      dmax_temp.innerHTML = response.max_temp;
      dwind_speed.innerHTML = response.wind_speed;
      dsunrise.innerHTML = getTimeFormat(response.sunrise);
      dsunset.innerHTML = getTimeFormat(response.sunset);
    })
    .catch((err) => console.error(err));
};

// MUMBAI

const getMumbai = () => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      mtemp.innerHTML = response.temp;
      mfeels_like.innerHTML = response.feels_like;
      mhumidity.innerHTML = response.humidity;
      mmin_temp.innerHTML = response.min_temp;
      mmax_temp.innerHTML = response.max_temp;
      mwind_speed.innerHTML = response.wind_speed;
      msunrise.innerHTML = getTimeFormat(response.sunrise);
      msunset.innerHTML = getTimeFormat(response.sunset);
    })
    .catch((err) => console.error(err));
};

// KOLKATA

const getKolkata = () => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      ktemp.innerHTML = response.temp;
      kfeels_like.innerHTML = response.feels_like;
      khumidity.innerHTML = response.humidity;
      kmin_temp.innerHTML = response.min_temp;
      kmax_temp.innerHTML = response.max_temp;
      kwind_speed.innerHTML = response.wind_speed;
      ksunrise.innerHTML = getTimeFormat(response.sunrise);
      ksunset.innerHTML = getTimeFormat(response.sunset);
    })
    .catch((err) => console.error(err));
};

// CHENNAI

const getChennai = () => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chennai",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      cfeels_like.innerHTML = response.feels_like;
      ctemp.innerHTML = response.temp;
      chumidity.innerHTML = response.humidity;
      cmin_temp.innerHTML = response.min_temp;
      cmax_temp.innerHTML = response.max_temp;
      cwind_speed.innerHTML = response.wind_speed;
      csunrise.innerHTML = getTimeFormat(response.sunrise);
      csunset.innerHTML = getTimeFormat(response.sunset);
    })
    .catch((err) => console.error(err));
};

// BANGLORE

const getBanglore = () => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      bfeels_like.innerHTML = response.feels_like;
      btemp.innerHTML = response.temp;
      bhumidity.innerHTML = response.humidity;
      bmin_temp.innerHTML = response.min_temp;
      bmax_temp.innerHTML = response.max_temp;
      bwind_speed.innerHTML = response.wind_speed;
      bsunrise.innerHTML = getTimeFormat(response.sunrise);
      bsunset.innerHTML = getTimeFormat(response.sunset);
    })
    .catch((err) => console.error(err));
};

// GORAKHPUR

const getGorakhpur = () => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Gorakhpur",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      gfeels_like.innerHTML = response.feels_like;
      gtemp.innerHTML = response.temp;
      ghumidity.innerHTML = response.humidity;
      gmin_temp.innerHTML = response.min_temp;
      gmax_temp.innerHTML = response.max_temp;
      gwind_speed.innerHTML = response.wind_speed;
      gsunrise.innerHTML = getTimeFormat(response.sunrise);
      gsunset.innerHTML = getTimeFormat(response.sunset);
    })
    .catch((err) => console.error(err));
};

// SURAT

const getSurat = () => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Surat",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      sfeels_like.innerHTML = response.feels_like;
      stemp.innerHTML = response.temp;
      shumidity.innerHTML = response.humidity;
      smin_temp.innerHTML = response.min_temp;
      smax_temp.innerHTML = response.max_temp;
      swind_speed.innerHTML = response.wind_speed;
      ssunrise.innerHTML = getTimeFormat(response.sunrise);
      ssunset.innerHTML = getTimeFormat(response.sunset);
    })
    .catch((err) => console.error(err));
};

getDelhi();
getMumbai();
getKolkata();
getChennai();
getBanglore();
getGorakhpur();
getSurat();
