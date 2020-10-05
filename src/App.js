import React, { useMemo, useState } from "react";

import './App.css';

function App() {
    const [fibLength, setFibLength] = useState(3);
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const fibonacciSequence = useMemo(() => {
        const t1 = performance.now();
        const result = [1, 1];
        for (let i = 2; i < fibLength; i++) {
            result[i] = result[i - 1] + result[i - 2];
        }
        const t2 = performance.now();
        console.log(`Fibonacci calculation took ${t2 - t1}ms`);
        return result;
    }, [fibLength]);

    return (
        <>
            <button style={{ margin:30, paddingLeft:20, paddingRight:20 }} onClick={increment}> { count } </button>
            <hr />
            <input style={{margin:20}}
                   value = { fibLength }
                onChange = {(e) => setFibLength(Number(e.target.value))}
            />
            <p style={{margin:30}}>
                Fibonacci sequence of length {fibLength}: {fibonacciSequence.join(", ")}
            </p>
        </>
    );
}
export default App;