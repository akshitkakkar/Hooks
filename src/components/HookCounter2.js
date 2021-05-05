import React, {useState} from 'react'

function HookCounter2() {

    const initialCount = 0;

    const [count, setCount] = useState(initialCount)

    const incrementFive = () => {
        for(let i=0; i<5; i++) {
            // setCount(count + 1) <-- doesn't work

            setCount(prevCount => {
               return prevCount + 1
            }) // the right way to do it, much safer option
        }
    }

    return (
        <div>
            Count: {count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={() => setCount(count -1)}>Decrement</button>
            <button onClick={incrementFive}>Increment five</button>
        </div>
    )
}

export default HookCounter2
