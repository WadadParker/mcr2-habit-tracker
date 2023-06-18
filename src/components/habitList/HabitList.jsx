import "./habitList.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash, faBoxArchive } from '@fortawesome/free-solid-svg-icons'

import { useContext } from "react";
import { HabitContext } from "../../context/HabitContext";
export const HabitList=({item,index})=>
{
    const {state,dispatch}=useContext(HabitContext);
    const {inputFields,inputFields:{name,repeat,goal,time,date}}=state;
    return (
        <div className="habit-list-container">
            <h1>{item?.name}</h1>
            <FontAwesomeIcon icon={faPenToSquare} className="icon icon1" onClick={()=>dispatch({type:"EDIT_HABIT",payload:index})}/>
            <FontAwesomeIcon icon={faTrash} className="icon icon2" onClick={()=>dispatch({type:"DELETE_HABIT",payload:index})}/>
            <FontAwesomeIcon icon={faBoxArchive} className="icon icon3" onClick={()=>dispatch({type:"ARCHIVE_HABIT",payload:index})}/>
        </div>
    )
}