import React, {useState} from 'react'
import UseEffectHookMouse from './UseEffectHookMouse'

function HookMouseContainer() {
    
    const [display, setDisplay] = useState(true)

    return (
        <div>
            <button onClick={()=> setDisplay(!display)}>Toggle display</button>
            {display && <UseEffectHookMouse/> }
        </div>
    )
}

export default HookMouseContainer
