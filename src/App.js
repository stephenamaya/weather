import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
import styles from "./components/main.module.css"



const api_key = "bf2c475b591be6900f0a625545b0bc1e";

class App extends React.Component {
  state = {
    // sets the initial state, so they can be accessed and changed later on
    temperature: undefined,
    city: undefined,
    country: undefined,
    feels_like: undefined,
    description: undefined,
    error: undefined,
  };

// getWeather is accessed when onsubmit from the form component 
  getWeather = async (e) => {
    e.preventDefault(); // e is a parameter of getWeather, and prevents default, which prevents reload of a page when onSubmit is clicked
    const city = e.target.elements.city.value;  // same as getelementbyID.value
    const country = e.target.elements.country.value;
    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${api_key}&units=imperial`);  // api url with my key 
    const data = await api_call.json(); // transforms their data to json 

    if (city && country) { // if they enter a city and country on the submit , do this {
      // set state updates the state (values) to the json data that it grabbed in the data const
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        feels_like: data.main.feels_like,
        description: data.weather[0].description,
        error: "",
      });
    } else {  // if they dont enter anything, then they get only the error 
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        feels_like: undefined,
        description: undefined,
        error: "Please Enter City & Country",
      });
    }
  };

  render() {  // what is actually rendered from the app class 
    return ( // this.state represents rendered values, while setState is updated/ing values
      <div className={styles.container}>
        <img className={styles.icon} src={ require('./components/images/sun-48.png')} alt = "sun icon"/>
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          feels_like={this.state.feels_like}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
