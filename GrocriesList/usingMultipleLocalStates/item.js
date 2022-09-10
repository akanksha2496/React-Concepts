import React from "react";
import "./item.css";
// import '.././App.css';
function item(props) {
  return (
    <div>
      {props.editable ? (
        <input
          type="text"
        //   pass a calback funtion to edit name
        //   onKeyPress={props.onKeyPress}
        onKeyPress={(e)=>props.onKeyPress(e,props.index)}
          defaultValue={props.item.name}
        />
      ) : (
        // app.js is repsonse for prope.onDoubleClick. propes woild have doubleClickProperty
        <h3 onDoubleClick={props.onDoubleClick}>{props.item.name}</h3>
      )}

      <h3>{props.item.calorie}</h3>
      <button
        name={props.item.name}
        className="remove-button"
        onClick={props.onClick}
      >
        Remove
      </button>
    </div>
  );
}
export default item;
