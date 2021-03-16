import React, { Component } from "react";

class WeatherDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherData: null
        };
    }
    componentDidMount() {
        const zip = this.props.zip;
        const URL = "http://api.openweathermap.org/data/2.5/weather?q=" +
            zip +
            "&appid=6898c186f92d0cd7184ea1df6ad87f20&units=imperial"; //0e3c05942a6b245092246fad2fe7108d
        fetch(URL)
            .then(res => res.json())
            .then(json => {
                this.setState({ weatherData: json });
            });
    }
    render() {
        const weatherData = this.state.weatherData;
        if (!weatherData) return <div>Loading</div>;
        console.log(weatherData)
        const weather = weatherData.weather[0];
        const iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";
        return (
            <div>
                <h2>
                     {weather.main} <img src={iconUrl} alt={weatherData.description} />
                </h2>
                <p>Current: {weatherData.main.temp}°</p>
                {/* <p>High: {weatherData.main.temp_max}°</p>
                <p>Low: {weatherData.main.temp_min}°</p>
                <p>Wind Speed: {weatherData.wind.speed} mi/hr</p> */}
            </div>
        );
    }
}
 export default WeatherDisplay;