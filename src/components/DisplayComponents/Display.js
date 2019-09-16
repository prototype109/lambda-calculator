import React from "react";

const Display = (props) => {
  const style = {
    height: "100px",
    width: "446px",
    background: "black",
    color: "white",
    margin: "0 auto",
    fontSize: "5.5rem",
    textAlign: "right",
    borderRadius: "60px"
  }

  const h2Style = {
    position: "relative",
    top: "25px",
    right: "40px"
  }
  return (<div style={style}>
            <h2 style={h2Style}>{props.value}</h2>
          </div>);
};

export default Display;