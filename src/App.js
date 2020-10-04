import React,{useState, useCallback, useMemo} from 'react';
import './App.css';
import Child from "./components/child";

function App() {
  const [i, setI]= useState(0);
  function onClickHandle(){
    setI(i +1)
  }
  const memoChild = useMemo(()=>{
    return <Child></Child>
  },[]);

  return (
    <div className="App">
      <header className="App-header">
        <h3>Use Memo</h3>
        <h2>i: {i}</h2>
        <button onClick={onClickHandle}>Increment I</button>
        <h3> normal render</h3>
        <child></child>
        <h3> Memo Render</h3>
        {memoChild}
      </header>
    </div>
  );
}

export default App;
