import React from "react";
// import React, {Fragment}from "react";
import App from "../App";
function nameTag(props) {

  if(!props.firstName && !props.lastName)
  return (
    <div className="name" >
      <h3 style={{color:"red"}} >Invalid Name!!</h3>
    </div>
  )
  return ( 
    <div className="name">
      <h3 style={props.style}>First Name:{props.firstName}</h3>
      <h3 style={props.style}>Last Name:{props.lastName}</h3>
      {props.firstName==="Akash" && <div style={{color:"green"}}>VIP</div>}
    </div>
  );
}

export default nameTag;
