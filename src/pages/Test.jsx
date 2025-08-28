import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";


export const Test = () =>{
    const { store, dispatch } = useGlobalReducer()
    return(
        <div>
            {store.fName}
            {store.lName}
        </div>
    )
};