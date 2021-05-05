import React, {useState} from 'react'
import useCounter from '../hooks/useCounter'

function CounterOne() {

    const [count, increment, decrement, reset] = useCounter()

    // const [count, setCount] = useState(0)

    // const increment = () => {
    //     setCount((prevCount) => prevCount +1)
    // }

    // const decrement = () => {
    //     setCount((prevCount) => prevCount - 1)
    // }

    // const reset = () => {
    //     setCount(0)
    // }

    return (
        <div>
            <h2>Count {count}</h2>
            <button onClick={increment}>Inc</button>
            <button onClick={decrement}>Dec</button>
            <button onClick={reset}>Res</button>
        </div>
    )
}

export default CounterOne
