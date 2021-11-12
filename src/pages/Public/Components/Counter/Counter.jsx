import React, { useState } from "react";
import classes from "./Counter.module.css";

const Counter = () => {
  const [value, setValues] = useState(0);
  function increment() {
    setValues(value + 1);
  }
  function decrement() {
      if (value === 0){
         return value 
      }
    setValues(value - 1);
  }


  return (
    <div className={classes.Counter}>
      <button className={classes.CounterButton} onClick={decrement}>ᐊ</button>
      <h2 className={classes.Count}>{value}</h2>
      <button className={classes.CounterButton}  onClick={increment}>ᐅ</button>
    </div>
  );
};

export default Counter;
