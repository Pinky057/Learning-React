import React,{useState} from 'react';
import './App.css';

function App() {
  const[count, changeCount]=useState(0);
  return (
      <div class="counter">
      <h2>{count}</h2>
<button onClick={()=>changeCount(count - 1)}><span>-1</span></button>
<button onClick={()=>changeCount(count + 1)}><span>+1</span></button>
<button onClick={()=>changeCount(count === 0)}><span>Reset</span></button>
</div>
  );
}

export default App;
