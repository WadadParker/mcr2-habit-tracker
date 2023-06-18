import "./habitForm.css";

export const HabitForm=()=>
{
    return (
        <div className="habit-container">
            <h1>Add new Habit</h1>

            <div>
                <label htmlFor="name">Name</label>
                <input placeholder="Enter your name" id="name"></input>
            </div>

            <div>
            <label htmlFor="repeat">Repeat</label>
            <select id="repeat">
                <option>Daily</option>
                <option>Alternate Days</option>
                <option>Twice a week</option>
                <option>Weekly</option>
            </select>
            </div>

            <div>
            <label htmlFor="goal">Goal</label>
            <select id="goal">
                <option>1 Time a day</option>
                <option>2 Times daily</option>
                <option>3 Times daily</option>
            </select>
            </div>

            <div>
            <label htmlFor="time">Time of Day</label>
            <select id="time">
                <option>Any Time</option>
                <option>Morning</option>
                <option>Afternoon</option>
                <option>Evening</option>
                <option>Night</option>
            </select>
            </div>

            <div>
            <label htmlFor="date">Start Date</label>
            <input type="date" id="date"></input>
            </div>

            <footer>
            <button className="discard">Discard</button>
            <button className="save">Save</button>
            </footer>
        </div>
    )
}