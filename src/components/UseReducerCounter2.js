import React, {useReducer} from 'react'


const initialState = {
    firstCounter: 0
}; //this is the count value

const reducer = (currentState, action) => {
    switch(action.type) {
        case 'increment':
        return {firstCounter: currentState.firstCounter +1}
        case 'decrement':
        return {firstCounter: currentState.firstCounter -1}
        case 'reset':
        return initialState
        case 'default':
        return currentState
    } 
}

function UseReducerCounter2() {

   const [count, dispatch] = useReducer(reducer, initialState) //count is current state

    return (
        <div>
            <div>count - {count.firstCounter}</div>
            <button onClick={()=> dispatch({type: 'increment'})}>Increment</button>
            <button onClick={()=> dispatch({type: 'decrement'})}>Decrement</button>
            <button onClick={()=> dispatch({type: 'reset'})}>Reset</button>
        </div>
    )
}

export default UseReducerCounter2
