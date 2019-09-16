import React from "react";

const NumberButton = (props) => {
  let style = {};

  const styleZeroButton = () =>{
    //console.log(props.number);
    if(props.number === "0"){
      //console.log('here');
      style.width = "203px";
      style.height = "88px";
      style.borderRadius = "60px";
      return style;
    }
  }

  function handleNumClick(e){
    if(props.current === "0"){
      //console.log(props.current);
      props.setDisplay("");
      props.setDisplay(props.click(e));
    }
    else{
      props.setDisplay(props.current + props.click(e));
    }
  }

  return (
    <>
        <button style={styleZeroButton()} onClick={(e) => handleNumClick(e)}>{props.number}</button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default NumberButton;