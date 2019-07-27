import React from "react";

const NumberButton = (props) => {
  let style = {};

  const checkIfZero = () =>{
    //console.log(props.number);
    if(props.number === "0"){
      //console.log('here');
      style.width = "203px";
      style.height = "88px";
      style.borderRadius = "60px";
      return style;
    }
  }

  return (
    <>
        <button style={checkIfZero()} onClick={(e) => props.setDisplay(props.click(e))}>{props.number}</button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default NumberButton;