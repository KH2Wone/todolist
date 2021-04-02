const weather = document.querySelector('.js-weather');

const API_KEY = "629dfcedd7e5ae9c7ca5b325da4742b6";
const COORDS = 'coords';

// function getWeather(lat, lng) {
//     fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`).then(function (response) {
//         return response.json()
//     }).then(function (json) {
//         const temperature = json.main.temp;
//         const place = json.name;
//         weather.innerText = `${temperature} @ ${place}`;
//     });
// }

async function getWeather(lat, lng) {
    const postResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    );
    const post = await postResponse.json();
    const temperature = post.main.temp;
    const place = post.name;
    weather.innerText = `${temperature} @ ${place}`;
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError() {
    console.log(`can't`);
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null) {
        askForCoords();
    } else {
        //getWeather
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init() {
    loadCoords();
}

init();

/* 마지막강의 9:46 */