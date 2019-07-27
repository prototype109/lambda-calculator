import React from "react";
import {specials} from '../../../data';
import SpecialButton from './SpecialButton';
//import any components needed

//Import your array data to from the provided data file

const Specials = (props) => {
  // STEP 2 - add the imported data to state 
  const style = {
    display: "flex",
    justifyContent: "space-around",
  }
  return (
    <div style={style}>
      {
        specials.map(specialChar => {
          return <SpecialButton click={props.click} 
                                setDisplay={props.setDisplay} 
                                special={specialChar} />
        })
      }
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};

export default Specials;