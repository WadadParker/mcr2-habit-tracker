import "./habitList.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash, faBoxArchive } from '@fortawesome/free-solid-svg-icons'

export const HabitList=({item})=>
{
    return (
        <div className="habit-list-container">
            <h1>Drink Water</h1>
            <FontAwesomeIcon icon={faPenToSquare} className="icon icon1"/>
            <FontAwesomeIcon icon={faTrash} className="icon icon2"/>
            <FontAwesomeIcon icon={faBoxArchive} className="icon icon3"/>
        </div>
    )
}