import React from "react";

const OperatorButton = (props) => {
  const style = {
    background: "rgb(35,114,147)"
  }
  return (
    <>
      <button onClick={(e) => props.setDisplay(props.click(e))} style={style}>{props.operation}</button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default OperatorButton;