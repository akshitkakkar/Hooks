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

function UseReducerCounter1() {

   const [count, dispatch] = useReducer(reducer, initialState) //count is current state

    return (
        <div>
            <div>count - {count}</div>
            <button onClick={()=> dispatch('increment')}>Increment</button>
            <button onClick={()=> dispatch('decrement')}>Decrement</button>
            <button onClick={()=> dispatch('reset')}>Reset</button>
        </div>
    )
}

export default UseReducerCounter1
