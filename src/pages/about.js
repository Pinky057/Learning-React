import React, { useContext } from "react";
import { UserContext } from "../userContext";


export function About(){

    const {user} = useContext(UserContext);
    return(
        <div>
            <h2   style={{ padding: 10, margin: 10 }}>About</h2>
            <pre>{ JSON.stringify(user, null, 2) }</pre>
        </div>

    )
}