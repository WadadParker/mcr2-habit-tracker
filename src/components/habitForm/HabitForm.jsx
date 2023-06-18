import "./habitForm.css";

import { useContext } from "react";
import { HabitContext } from "../../context/HabitContext";

export const HabitForm=()=>
{
    const {state,dispatch}=useContext(HabitContext);
    const {inputFields,inputFields:{name,repeat,goal,time,date},editHabit}=state;
    return (
        <div className="habit-container">
            <h1>Add new Habit</h1>

            <div>
                <label htmlFor="name">Name</label>
                <input value={name} onChange={(e)=>dispatch({type:"INPUT",payload:e.target.value,input:"name"})} placeholder="Enter your name" id="name"></input>
            </div>

            <div>
            <label htmlFor="repeat">Repeat</label>
            <select value={repeat} onChange={(e)=>dispatch({type:"INPUT",payload:e.target.value,input:"repeat"})} id="repeat">
                <option>Daily</option>
                <option>Alternate Days</option>
                <option>Twice a week</option>
                <option>Weekly</option>
            </select>
            </div>

            <div>
            <label htmlFor="goal">Goal</label>
            <select id="goal" value={goal} onChange={(e)=>dispatch({type:"INPUT",payload:e.target.value,input:"goal"})}>
                <option>1 Time a day</option>
                <option>2 Times daily</option>
                <option>3 Times daily</option>
            </select>
            </div>

            <div>
            <label htmlFor="time">Time of Day</label>
            <select id="time" value={time} onChange={(e)=>dispatch({type:"INPUT",payload:e.target.value,input:"time"})}>
                <option>Any Time</option>
                <option>Morning</option>
                <option>Afternoon</option>
                <option>Evening</option>
                <option>Night</option>
            </select>
            </div>

            <div>
            <label htmlFor="date">Start Date</label>
            <input type="date" id="date" value={date} onChange={(e)=>dispatch({type:"INPUT",payload:e.target.value,input:"date"})}></input>
            </div>

            <footer>
            <button className="discard" onClick={()=>dispatch({type:"TOGGLE_MODAL",payload:false})}>Discard</button>
            {editHabit?<button className="save" onClick={()=>dispatch({type:"UPDATE_HABIT",payload:inputFields})}>Update</button>
            :<button className="save" onClick={()=>dispatch({type:"ADD_HABIT",payload:inputFields})}>Save</button>}
            </footer>
        </div>
    )
}