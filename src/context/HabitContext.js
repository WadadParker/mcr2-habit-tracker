import { createContext, useReducer } from "react";

export const HabitContext=createContext();

export const HabitProvider=({children})=>
{
    const clearInputFields={name:"",repeat:"",goal:"",time:"",date:""};
    const habitReducer=(habit,{type,payload,input})=>
    {
        switch(type)
        {
            case "TOGGLE_MODAL":
                return {...habit,showModal:payload,inputFields:clearInputFields};    

            case "INPUT":
                return {...habit,inputFields:{...habit.inputFields,[input]:payload}}    
            
            case "ADD_HABIT":
                return {...habit,habitList:[...habit.habitList,payload],inputFields:clearInputFields,showModal:false}    

            default:
                return habit;    
        }
    }

    const initialState={
        habitList:[],
        inputFields:{name:"",repeat:"",goal:"",time:"",date:""},
        showModal:false,
    }

    const [state,dispatch]=useReducer(habitReducer,initialState);



    return (
        <HabitContext.Provider value={{state,dispatch}}>
            {children}
        </HabitContext.Provider>
    )
}