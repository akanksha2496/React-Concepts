import React from "react";
// import React, {Fragment}from "react";
import App from "../App";
function nameTag(props) {
  // JSX expressions must have one parent element.
  //wrap whole thing with div - Demerit - (Scru- up styling, create styling issue)
  //hence we can get fragment from react- and it tells react there more then one line inside.
  //so when reacts render it it crually dos't add an extra tag.
  //Also instead of using tag <Frgaments> tag u can use <></>.
  //One more array u can use return an array with two elements it
  //also workds 
  
  return (
    <>
      <h3 className="name">First Name:{props.firstName}</h3>
      <h3 className="name">First Name:{props.lastName}</h3>
    </>
  );
}

export default nameTag;
