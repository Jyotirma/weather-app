const API_key = "9230ace0c95503dcaa9fdeabc205c603";

const getWeatherData = async (searchParams, units)=>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchParams}&appid=${API_key}&units=${units}`
    const response = await fetch(url);
    const data = await response.json()
    const formattedCurrentWeather = formatCurrentWeather(data)
    return formattedCurrentWeather
    }

const formatCurrentWeather = (data)=>{
    const {
        main: {temp, feels_like, temp_min, temp_max, humidity},
        name,
        dt,
        sys: { country},
        weather,
        wind: {speed}
    } = data
    const {main: details, icon} = weather[0]


    return {temp, feels_like, temp_min, temp_max, humidity, name, dt, country, details, icon, speed}
}

const iconUrl = (code)=> `http://openweathermap.org/img/wn/${code}@2x.png`;

export default getWeatherData;
export {iconUrl};