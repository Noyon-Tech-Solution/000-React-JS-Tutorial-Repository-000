import React,{useState} from 'react'

export default function Function_Hook() {

    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount(count + 1);
    }
    return (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    )
}
