import "./home.css";
import { useContext } from "react";
import { HabitContext } from "../../context/HabitContext";

import { HabitForm } from "../../components/habitForm/HabitForm";

export const Home=()=>
{
    const {state,dispatch}=useContext(HabitContext);
    const {showModal}=state;

    return (
        <div>
            <h1>Habit Tracker</h1>
            <button onClick={()=>dispatch({type:"TOGGLE_MODAL",payload:true})} className="add-habit">Add new Habit</button>
            {showModal && <HabitForm />}
        </div>
    )
}