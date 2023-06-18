import "./home.css";
import { useContext } from "react";
import {useNavigate } from "react-router-dom"

import { HabitContext } from "../../context/HabitContext";

import { HabitForm } from "../../components/habitForm/HabitForm";
import { HabitList } from "../../components/habitList/HabitList";

export const Home=()=>
{
    const {state,dispatch}=useContext(HabitContext);
    const {showModal,habitList}=state;
    const navigate=useNavigate();

    return (
        <div>
            <h1>Habit Tracker</h1>
            <button onClick={()=>dispatch({type:"TOGGLE_MODAL",payload:true})} className="add-habit">Add new Habit</button>
            <button className="archive-button" onClick={()=>navigate("/archive")}>Go to Archive</button>
            {showModal && <HabitForm />}
            <HabitList />
            <ul>
                {habitList?.map((item,index)=>(
                    <li key={index}>
                        <HabitList item={item} index={index} />
                    </li>
                ))}
            </ul>
        </div>
    )
}