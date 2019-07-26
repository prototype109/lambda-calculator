import React from "react";

const Display = () => {
  const style = {
    height: "100px",
    width: "200px",
    background: "black",
    color: "white"
  }
  return <div style={style}>{/* Display any props data here */}</div>;
};

export default Display;