import React from "react";
import styles from "./main.module.css"

// this is a stateless component, so no render() or return () or extends react.component is necessery here.
// to grab the props from app, just put props in the function parameter and then you can still grab them with the .

const Form = (props) => (
  <div className={styles.formcontainer}>
  <form onSubmit={props.getWeather}>
    <input type="text" name="city" placeholder="City Name, ex: Miami" />
    <input type="text" name="country" placeholder="Country Code, ex: US" />
    <button className={styles.button}>Get Weather</button>
  </form>
  </div>
);

export default Form;
