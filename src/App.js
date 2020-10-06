import React, { useEffect, useRef } from 'react';


import track1 from './track1.mp3';
import './App.css';

function App() {
    const audioRef =useRef(null);
    useEffect(()=>{
        audioRef.current.play();
    },[]);

    const handleClick =()=>{
        audioRef.current.pause();
    };
    return (
        <div>
        <audio src={track1} ref={ audioRef }/>
        <button onClick={handleClick}> Stop Play</button>
        </div>
    );
}

export default App;
