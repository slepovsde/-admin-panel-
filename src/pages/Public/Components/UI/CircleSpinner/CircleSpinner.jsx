import React from 'react';
import {Spinner} from 'react-bootstrap'
import classes from './CircleSpinner.module.css'

const Circlespinner = (props) => {
  return (
    <div style={{display:'flex', justifyContent:'center'}}>
      <Spinner {...props} className={classes.Spinner} animation='border' variant='dark' />
    </div>
  );
}

export default Circlespinner;
