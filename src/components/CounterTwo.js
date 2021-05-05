import React, {useState} from 'react'

function CounterTwo() {

    const [count, setCount] = useState(0)

    const increment = () => {
        setCount((prevCount) => prevCount +1)
    }

    const decrement = () => {
        setCount((prevCount) => prevCount - 1)
    }

    const reset = () => {
        setCount(0)
    }

    return (
        <div>
            <h2>Count {count}</h2>
            <button onClick={increment}>Inc</button>
            <button onClick={decrement}>Dec</button>
            <button onClick={reset}>Res</button>
        </div>
    )
}

export default CounterTwo
