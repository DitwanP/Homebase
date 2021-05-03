import React from "react";
import axios from "axios";
import { Spring } from "react-spring/renderprops";
import moment from "moment";
import {animateScroll as scroll} from 'react-scroll';
import { FormGroup, Form, Button, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import QuoteOfTheDay from './QuoteOfTheDay';

const myApiKey = process.env.REACT_APP_WEATHER_API_KEY;
const myDefaultCity = "Coral Springs";
const myDefaultCountry = "US";
const units = "imperial";
const defaultWeatherIcon = "50d"
let timeAndDay = moment().format("dddd, MMM D - h:00a");

class WeatherInfo extends React.Component {

  // Initialize state
  state = {
    defaultCity: myDefaultCity,
    defaultCountry: myDefaultCountry,
    enteredCityName: "",
    weatherData: [],
    currTemp: 0.0,
    highTemp: 0.0,
    lowTemp: 0.0,
    feelsLike: 0.0,
    humidity: 0.0,
    wind: 0.0,
    curTime: timeAndDay,
    conditions: "",
    icon: defaultWeatherIcon,
  };

  // This will get the weather information from the Openweathermap api.
  fetchWeather = (city, country) => {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=${units}&appid=${myApiKey}`)
      .then((response) => {
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
      })
      .catch((error) => {
        console.log(error)
      });
  };

  // This will handle the change of the content on the city name input box.
  handleCityNameChange = (event) => {
    this.setState({
      enteredCityName: event.target.value,
    });
  };

  // This will submit the content on the city name input box.
  handleSubmit = (event) => {
    event.preventDefault();
    const cityAndCountry = this.state.enteredCityName.split(", ");
    const cityEntered = cityAndCountry[0];
    const countryEntered = cityAndCountry[1];

    this.fetchWeather(cityEntered, countryEntered);

    this.setState({ enteredCityName: "" });
  };

  componentDidMount() {
    this.fetchWeather(this.state.defaultCity, this.state.defaultCountry);
  }

  render() {
    return (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ duration: 1500 }}
      >
        {(props) => (
          <div style={props} className="weather-and-quote-container">
              <div className="city-name-input-container">
                <Form noValidate>
                  <Form.Row bsPrefix="title-row">
                    <Col bsPrefix="input-columns">
                      <FormGroup bsPrefix="city-form">
                        <input
                          as="input"
                          className="city-input"
                          label="city name"
                          type="title"
                          size="sm"
                          onChange={this.handleCityNameChange}
                          value={this.state.enteredCityName}
                          required
                          autoComplete="off"
                        />
                        <label htmlFor="city-input" className="city-label">
                          <span className="city-span">
                            Enter a city
                            <span className="format-example">
                              {" "}
                              (ex: Los Angeles, CA){" "}
                            </span>
                          </span>
                        </label>
                      </FormGroup>
                      <Form.Group bsPrefix="change-city-button-container">
                        <Button
                          type="submit"
                          variant="primary"
                          onClick={this.handleSubmit}
                          bsPrefix="enter-city-button"
                        >
                          <FontAwesomeIcon icon="plus" />
                        </Button>
                      </Form.Group>
                    </Col>
                  </Form.Row>
                </Form>
              </div>
              <div className="weather">
                <div className="location-and-time-container">
                  <h1>{this.state.weatherData.name}</h1>
                  <h2>{this.state.curTime}</h2>
                  <h3>{this.state.description}</h3>
                </div>
                <div className="high-low-container">
                  <h1>
                    <div className="currTemp-container">
                      {Math.round(this.state.currTemp)}°
                    </div>
                    <div className="hlTemps-container">
                      <h4>
                        {Math.round(this.state.highTemp)}° | &nbsp;
                      </h4>
                      <h4>
                        {Math.round(this.state.lowTemp)}°
                      </h4>
                    </div>
                  </h1>
                </div>
                <div className="conditions-container">
                  <h5 className="top-h5">
                    Feels like - {Math.round(this.state.feelsLike)}°
                  </h5>
                  <h5>Humidity - {this.state.humidity}% </h5>
                  <h5>Wind speed - {Math.round(this.state.wind)}mph </h5>
                </div>
              </div>
              <QuoteOfTheDay /> 
              <button className="go-to-todolist-button" onClick={() => scroll.scrollToBottom()} aria-label="scroll to bottom of page">
                  <FontAwesomeIcon icon="chevron-down" />
              </button>
              <div className="BgImage"></div>          
          </div>
        )}
      </Spring>
    );
  }
}

export default WeatherInfo;
