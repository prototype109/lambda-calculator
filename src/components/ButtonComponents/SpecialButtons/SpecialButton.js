import React from "react";

const SpecialButton = (props) => {
  const style = {
    background: "rgb(34,93,158)"
  }
  return (
    <>
    <button onClick={(e) => props.setDisplay(props.click(e))} style={style}>{props.special}</button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};


export default SpecialButton;