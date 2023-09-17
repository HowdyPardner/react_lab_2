// 2. Make a form (Medium)
// 1. Make a form component x
// 2. make 3 inputs and 1 button in the form component x
// 3. make 3 states in the form x
// 1. username, setUsername x
// 2. email, setEmail x
// 3. password, setPassword x
// 4. connect the input values to the states (value, e.target.value)
// 5. add onClick to the button with a function handleClick
// 6. handleClick should log the states.

import React, { useState } from 'react'
import './index.css'

const Form = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    let handleUsernameChange = (e) => {
        e.preventDefault()
        setUsername(e.target.value)
    }

    let handleEmailChange = (e) => {
        e.preventDefault()
        setEmail(e.target.value)
    }

    let handlePasswordChange = (e) => {
        e.preventDefault()
        setPassword(e.target.value)
    }

    let handleClick = (e) => {
        e.preventDefault();
        console.log("username: " + username + "\n", "email: " + email + "\n", "password: " + password)
        setUsername("")
        setEmail("")
        setPassword("")
    }


    return (
        <div className='form-component-container'>
            <h4>Form Component</h4>

            <form className='form-container' >

                <div>
                    <label htmlFor="username">
                        Username
                    </label>
                    <input name='user' type="text" value={username} onChange={handleUsernameChange} />
                </div>

                <div>
                    <label htmlFor="email">
                        Email
                    </label>
                    <input name='email' type="email" value={email} onChange={handleEmailChange} />
                </div>

                <div>
                    <label htmlFor="password">
                        Password
                    </label>
                    <input name='password' type="text" value={password} onChange={handlePasswordChange} /> <br /> <br />
                </div>

                <button onClick={handleClick}>Submit</button>

            </form>

        </div>
    )
}

export default Form