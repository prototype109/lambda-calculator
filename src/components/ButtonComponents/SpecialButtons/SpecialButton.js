import React from "react";

const SpecialButton = (props) => {
  const style = {
    background: "rgb(34,93,158)"
  }

  function handleSpecClick(e){
    if(props.current === "0"){
      //console.log(props.current);
      props.setDisplay("");
      props.setDisplay(props.click(e));
    }
    else{
      props.setDisplay(props.current + props.click(e));
    }

    if(props.click(e) === "C")
      props.setDisplay("0");
  }
  
  return (
    <>
    <button onClick={(e) => handleSpecClick(e)} style={style}>{props.special}</button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};


export default SpecialButton;