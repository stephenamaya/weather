import React from "react";
import styles from "./main.module.css";

// this is a stateless component, so no render() or return () or extends react.component is necessery here.
// to grab the props from app, just put props in the function parameter and then you can still grab them with the .

const Weather = (props) => (
  <div className={styles.resultcontainer}>
    <div className={styles.row}>
      <div className={styles.column}>
        <p>City :</p>
        <p>Country :</p>
        <p>Temperature :</p>
        <p>Feels like :</p>
        <p>Description :</p>
      </div>
      <div className={styles.column}>
        <p className={styles.error}>{props.error}</p>
        <p>{props.city}</p>
        <p>{props.country}</p>
        <p>{props.temperature}</p>
        <p>{props.feels_like}</p>
        <p>{props.description}</p>
        <p>{props.icon}</p>
      </div>
    </div>
  </div>
);

export default Weather;
