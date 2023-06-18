import "./archive.css";

import { useContext } from "react";
import {useNavigate } from "react-router-dom"

import { HabitContext } from "../../context/HabitContext";

export const Archive=()=>
{
    const navigate=useNavigate();
    return (
        <div>
           <h1> Archive Page</h1>
           <button className="archive-button" onClick={()=>navigate("/")}>Back to Home</button>
        </div>
    )
}