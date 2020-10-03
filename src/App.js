import React,{useState, useEffect} from 'react';
import './App.css';


const App = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Flavio')

    useEffect(() => {
        console.log(`Hi ${name} you clicked ${count} times`)
    });

    return (
        <div style={{paddingLeft: 700, paddingTop:200}}>
            <p>Hi {name} you clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <button onClick={() => setName(name === 'Flavio' ? 'Roger' : 'Flavio')}>
                Change name
            </button>
        </div>
    )
}
export default App;
