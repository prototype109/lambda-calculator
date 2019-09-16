import React from "react";

const OperatorButton = (props) => {
  const style = {
    background: "rgb(35,114,147)"
  }

  function handleOpClick(e){
    if(props.current === "0"){
      //console.log(props.current);
      props.setDisplay("");
      props.setDisplay(props.click(e));
    }
    else{
      props.setDisplay(props.current + props.click(e));
    }

    if(props.click(e) === "="){
      props.setDisplay(eval(props.current).toString());
    }

    if(props.click(e) === "x")
      props.setDisplay(props.current + props.operation.value);
  }
  return (
    <>
      <button onClick={(e) => handleOpClick(e)} style={style}>{props.operation.char}</button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default OperatorButton;