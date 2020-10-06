import React, { useContext } from "react";
import { UserContext } from "../userContext";
import {login} from "../utils/login";


export function Index(){
    const { user, setUser }  = useContext(UserContext);
    return (
        <div>
            <h2 style={{ padding: 10, margin: 10} }> Home </h2>
            <pre   style={{ padding: 10, margin: 10 }} >{JSON.stringify(user, null, 2)}</pre>
            {user ? (
                <button
                    style={{padding: 10, margin: 10}}
                    onClick={() => {
                        setUser(null);
                    }}
                >
                    logout
                </button>
            ) : (
                <button
                    style={{ padding: 10, margin: 10 }}
                    onClick={async () => {
                        const user = await login();
                        setUser(user);
                    }}
                >
                    login
                </button>
            )}
        </div>
    );
}
