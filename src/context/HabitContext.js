import { createContext } from "react";

export const HabitContext=createContext();

export const HabitProvider=({children})=>
{
    return (
        <HabitContext.Provider>
            {children}
        </HabitContext.Provider>
    )
}