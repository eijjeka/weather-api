
const BASE_URL = 'api.openweathermap.org/data/2.5/weather';
const API_KEY = '8156493b3506c7f55fa6cedc12fcd338';

export function getWeather(lat, long) {
    return fetch(`${BASE_URL}?lat=${lat}&lon=${long}&appid=${API_KEY}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.status);
                }
                    return response.json();
            })
            .then(data => {
                // Data handling
             })
            .catch(error => {
                console.log(error)
            });
}