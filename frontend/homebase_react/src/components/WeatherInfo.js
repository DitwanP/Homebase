import React from 'react';
import axios from 'axios';
import { Spring } from 'react-spring/renderprops';
import moment from 'moment';
import {configInfo} from '../config';

const myApiKey = configInfo.MY_KEY;
const myCity = 'Coral Springs';
const myCountry = 'US';
const units = 'imperial';
var timeAndDay = moment().format('dddd h:00a');

class WeatherInfo extends React.Component {
    state = {
        weatherData: [],
        currTemp: 0.0,
        highTemp: 0.0,
        lowTemp: 0.0,
        feelsLike: 0.0,
        humidity: 0.0,
        wind: 0.0,
        curTime: timeAndDay,
        conditions: '', 
        icon: '',
    }
    
    fetchWeather = () => {
        console.log(myApiKey)
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${myCity},${myCountry}&units=${units}&appid=${myApiKey}`).then(response => {
            this.setState({
                weatherData: response.data,
                currTemp: response.data.main.temp,
                highTemp: response.data.main.temp_max,
                lowTemp: response.data.main.temp_min,
                feelsLike: response.data.main.feels_like,
                humidity: response.data.main.humidity,
                wind: response.data.wind.speed,
                description: response.data.weather[0].description,
                icon: response.data.weather[0].icon,
            });
            console.log(response.data)
        });
    }

    componentDidMount(){
        this.fetchWeather();
    }

    render() {
        return(
            <Spring 
                from={{ opacity: 0}} 
                to={{ opacity: 1}}
                config={{duration: 1500}}
            >
                {props => (
                    <div style={props} className="weather">
                        <div className="location-and-time-container">
                            <h1>{this.state.weatherData.name}</h1>
                            <h2>{this.state.curTime}</h2>
                            <h3>{this.state.description}</h3>
                        </div>                      
                        <div className="high-low-container">
                            <h1>
                                {Math.round(this.state.currTemp)}°
                                <img src={`http://openweathermap.org/img/wn/${this.state.icon}@2x.png`} alt=""/>
                            </h1> 
                            <h4>High: {Math.round(this.state.highTemp)}° Low: {Math.round(this.state.lowTemp)}°</h4>
                        </div>
                        <div className="conditions-container">
                            <h5 className="top-h5">Feels like: {Math.round(this.state.feelsLike)}°</h5>
                            <h5>Humidity: {this.state.humidity}% </h5>
                            <h5>Wind: {Math.round(this.state.wind)}mph </h5>
                        </div>
                    </div>
                )}
            </Spring>
        )
    }
}

export default WeatherInfo;