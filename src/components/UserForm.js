import React, {useState} from 'react'
import useInput from '../hooks/useInput'

function UserForm() {

    // const [firstName, setfirstName] = useState('aaaa')
    // const [lastName, setlastName] = useState('')

    const [firstName, bindFirstName, resetFirstName] = useInput('aaaaaa')

    const [lastName, bindLastName, resetLastName] = useInput('bbbbbbb')

    const submitHandler = (e) => {
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>First Name</label>
                    {/* <input 
                    value={firstName} 
                    onChange={(e) => setfirstName(e.target.value)} 
                    type="text">
                        
                    </input> */}

                    <input {...bindFirstName} 
                    type="text">
                        
                    </input>
                </div>
                <div>
                    {/* <label>Last Name</label>
                    <input value={lastName} onChange={(e) => setlastName(e.target.value)} type="text"></input> */}

                    <label>Last Name</label>
                    <input {...bindLastName}></input>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default UserForm
