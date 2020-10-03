import React, { useState, useEffect } from "react";
import './App.css';



export default function UserStorage () {
  const [ user, setUser ] = useState("Sanjiv");

  useEffect(() => {
    const storedUser = window.localStorage.getItem("user");

    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("user", user);
  }, [user]);

  return (
      <select style={{padding: 60, marginLeft:700, marginTop:60, fontSize:20}} value={user} onChange={e => setUser(e.target.value)}>
          <option style={{fontSize:20, padding:20}}>RICE</option>
          <option style={{fontSize:20, padding:20}}>CHICKEN</option>
          <option style={{fontSize:20, padding:20}}>PIZZA</option>
          <option style={{fontSize:20, padding:20}}>CHESS</option>
          <option style={{fontSize:20, padding:20}}>PASTA</option>
          <option style={{fontSize:20, padding:20}}>PIZZA</option>
          <option style={{fontSize:20, padding:20}}>CHESS</option>
      </select>
  );
};

