import React from 'react';
import './UserOutput.css'
const userOutput =(props) =>{
    return (
        <div className="UserOutput">
         <p> username: {props.userName}</p>
         <p> I hope I'll be overwitten!</p>
        </div>
    );
};

export default userOutput;