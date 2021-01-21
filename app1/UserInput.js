import React from 'react';


const userInput = (props) =>{
// inline styles
    const inputstyle = {
        border: '2px solid red'
    };
  return <input type="text" 
  style={inputstyle}
  onChange={props.changed}
  value={props.currentName}/>;
};

export default userInput;