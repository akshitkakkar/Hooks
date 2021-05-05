import React, {useState, useMemo} from 'react'

function UseMemoCounter() {

    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)

    const incrementOne = () => {
        setCount1(count1 + 1)
    }

    const incrementTwo = () => {
        setCount2(count2 + 1)
    }

    const isEven = useMemo(() => {
        let i = 0
        while(i < 2000000000) i++
        return count1 % 2 === 0
    }, [count1])

    

    return (
        <div>
            <div>
                <button onClick={incrementOne}>Count one - {count1}</button>
                <span>{isEven ? 'Even' : 'Odd'}</span>
                <button onClick={incrementTwo}>Count one - {count2}</button>
            </div>
        </div>
    )
}

export default UseMemoCounter
