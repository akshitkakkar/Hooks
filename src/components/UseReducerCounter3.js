import React, {useReducer} from 'react'


const initialState = 0; //this is the count value

const reducer = (currentState, action) => {
    switch(action) {
        case 'increment':
        return currentState+1
        case 'decrement':
        return currentState-1
        case 'reset':
        return initialState
        case 'default':
        return currentState
    } 
}

function UseReducerCounter3() {

   const [count, dispatch] = useReducer(reducer, initialState) //count is current state\

   const [count2, dispatch2] = useReducer(reducer, initialState)

    return (
        <div>
            <div>count - {count}</div>
            <button onClick={()=> dispatch('increment')}>Increment</button>
            <button onClick={()=> dispatch('decrement')}>Decrement</button>
            <button onClick={()=> dispatch('reset')}>Reset</button>

            <div>count - {count2}</div>
            <button onClick={()=> dispatch2('increment')}>Increment</button>
            <button onClick={()=> dispatch2('decrement')}>Decrement</button>
            <button onClick={()=> dispatch2('reset')}>Reset</button>
        </div>
    )
}

export default UseReducerCounter3
