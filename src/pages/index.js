import React, { useContext } from "react";
import { UserContext } from "../userContext";


export function Index(){
    const { value, setValue }  = useContext(UserContext);
    return(
        <div>
            <h2>Home</h2>
            <div>{ value }</div>
            <button onClick={()=>setValue("hello!!!!!!!!")}>
                Change Value
            </button>
        </div>

    )
}
