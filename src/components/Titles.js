import React from "react";
import styles from "./main.module.css"

// this is a stateless component, so no render() or return () or extends react.component is necessery here.
// to grab the props from app, just put props in the function parameter and then you can still grab them with the .

const Titles = () => (
  <div>
    <h1 className={styles.title}> Weather Finder</h1>
  </div>
);

export default Titles;
