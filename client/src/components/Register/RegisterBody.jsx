import React from 'react'
import RegisterBox from "./RegisterBox"
import "./Register.css"

const RegisterBody = ({setAuthenticatedUser}) => {
    return (
        <div className="container">
            <RegisterBox setAuthenticatedUser={setAuthenticatedUser}/>
        </div>
    )
}

export default RegisterBody
