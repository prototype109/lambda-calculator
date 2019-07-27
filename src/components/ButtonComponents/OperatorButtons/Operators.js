import React from "react";
import {operators} from '../../../data';
import OperatorButton from './OperatorButton';

//import any components needed

//Import your array data to from the provided data file

const Operators = (props) => {
  const style = {
    display: "flex",
    flexDirection: "column"
  };
  // STEP 2 - add the imported data to state
  return (
    <div style={style}>
      {
        operators.map(operator => {
          console.log(operator.char);
          return <OperatorButton operation={operator.char} 
                                 click={props.click}
                                 setDisplay={props.setDisplay} />
        })
        }
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};


export default Operators;