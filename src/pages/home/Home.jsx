import "./home.css";

import { HabitForm } from "../../components/habitForm/HabitForm";

export const Home=()=>
{
    return (
        <div>
            <h1>Habit Tracker</h1>
            <button>Add new Habit</button>
            <HabitForm />
        </div>
    )
}