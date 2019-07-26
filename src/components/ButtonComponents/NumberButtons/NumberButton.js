import React from "react";

const NumberButton = (props) => {
  let style = {
    borderRadius: "100%",
    background: "blue",
    color: "white",
    border: "none"
    //width: "148px"
  };

  const checkIfZero = () =>{
    console.log(props.number);
    if(props.number !== "0"){
      style.width = "88px";
      style.height = "88px";
      return style;
    }
    else{
      style.width = "208px";
      style.height = "88px";
      style.borderRadius = "51%";
      return style;
    }
  }

  return (
    <>
        <button style={checkIfZero()}>{props.number}</button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default NumberButton;