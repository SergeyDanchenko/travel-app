import React, { Component } from "react";

import CountryDescription from './../CountryPage/Description/CountryDescription.module.scss';


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
        const weather = weatherData.weather[0];
        const iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";
        const celsius = Math.round((weatherData.main.temp - 32) / 1.8)
        return (
            <div className={CountryDescription.weather}>
                <img src={iconUrl} alt={weatherData.description} />
                <p> Temperature: { celsius } C°</p>
            </div>
          );
    }
}
 export default WeatherDisplay;