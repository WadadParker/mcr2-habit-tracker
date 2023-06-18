import "./archive.css";

import { useContext } from "react";
import {useNavigate } from "react-router-dom"

import { HabitContext } from "../../context/HabitContext";
import { HabitList } from "../../components/habitList/HabitList";

export const Archive=()=>
{
    const {state}=useContext(HabitContext);
    const {archiveList}=state;
    const navigate=useNavigate();
    return (
        <div>
           <h1> Archive Page</h1>
           <button className="archive-button" onClick={()=>navigate("/")}>Back to Home</button>
           {archiveList.length!==0 && <ul className="archive-list-container">
                {archiveList?.map((item,index)=>(
                    <li key={index} className="archive-list-item">
                        <h2>{item?.name}</h2>
                        <p><b>Repeat:</b>{item?.repeat}</p>
                        <p><b>Goal:</b>{item?.goal}</p>
                        <p><b>Time:</b>{item?.time}</p>
                        <p><b>Date:</b>{item?.date}</p>
                    </li>
                ))}
            </ul>}
        </div>
    )
}