import React, {useState, useEffect} from 'react'

function UseEffectHookMouse() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = (e) => {
        console.log('Mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        console.log('Use effect called')
        window.addEventListener('mousemove', logMousePosition)
    
        return ()=>{
            console.log('component unmounting code')
            window.removeEventListener('mousemove', logMousePosition)
        }
    
    }, [])

    return (
        <div>
            Hooks x - {x} y - {y}
        </div>
    )
}

export default UseEffectHookMouse
