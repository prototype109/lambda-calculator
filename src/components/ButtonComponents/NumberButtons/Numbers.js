import React, {useState} from "react";
import {numbers} from '../../../data';
import NumberButton from './NumberButton';
//import any components needed

//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [currentNumber, setCurrentNumber] = useState();
  const style = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    width: "350px"
  };
  
  return (
    <div style={style}>
      {
        numbers.map(num => {
          //setCurrentNumber(num);
          return <NumberButton number={num} />
        })
      }
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};

export default Numbers;
