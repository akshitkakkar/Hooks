import React, {useState} from 'react'

function HookCounter() {

    const [count, setCount] = useState(0) //array destructuring
//->  const [currentVal of state var, method that can update state var] = useState(initialVal of state var)
    
return (
        <div>
            <button onClick={() => setCount(count+1)}>Count {count}</button>
        </div>
    )
}

export default HookCounter
