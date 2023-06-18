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
                return {...habit,habitList:[...habit.habitList,payload],inputFields:clearInputFields,showModal:false};
            
            case "EDIT_HABIT":
                return {...habit,showModal:true,inputFields:habit.habitList[payload]};
             
            case "DELETE_HABIT":
                const updatedList=habit?.habitList?.filter((item,index)=>index!==payload)
                return {...habit,habitList:updatedList};
                
            case "ARCHIVE_HABIT":
                const updatedHabitList=habit?.habitList?.filter((item,index)=>index!==payload);
                const archiveItem=habit.habitList[payload];
                return {...habit,habitList:updatedHabitList,archiveList:[...habit.archiveList,archiveItem]};    

            default:
                return habit;    
        }
    }

    const initialState={
        habitList:[],
        inputFields:{name:"",repeat:"",goal:"",time:"",date:""},
        showModal:false,
        archiveList:[],
    }

    const [state,dispatch]=useReducer(habitReducer,initialState);



    return (
        <HabitContext.Provider value={{state,dispatch}}>
            {children}
        </HabitContext.Provider>
    )
}