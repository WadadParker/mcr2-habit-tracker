import "./habitCard.css"

import { useContext } from "react";
import { HabitContext } from "../../context/HabitContext";

export const HabitCard=({item,index})=>
{
    const {state,dispatch}=useContext(HabitContext);
    return (
        <div className="habit-card-container">
            <p><b>Repeat:</b>{item?.repeat}</p>
            <p><b>Goal:</b>{item?.goal}</p>
            <p><b>Time:</b>{item?.time}</p>
            <p><b>Date:</b>{item?.date}</p>
            <button className="hide-details" onClick={()=>dispatch({type:"TOGGLE_DETAILS",payload:false,input:index})}>Hide Details</button>
        </div>
    )
}