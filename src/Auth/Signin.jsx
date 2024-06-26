import React, { useState } from 'react'
import { login } from '../api'
import { useNavigate } from "react-router-dom";

function Signin() {
    console.log("Signin")
    const [userCred, setUserCreds] = useState({username: '', password: ''})
    const navigate = useNavigate();

    const handleLogin = () => {
        login({...userCred})
        .then((response) => {
            if (response.status == 200) {
                return response.json()
            } else {
                console.log(response)
                throw new Error("server error", response)
            }
        } )
        .then((data) => {
            console.log(data)
            navigate('/tasks');
        })
        .catch((error) => {
            alert(error);
        });
    }

    return (
        <div>
            <input type="text" value={userCred.username} onChange={(e) => setUserCreds({...userCred, username:e.target.value})} name="username" />
            <input type="password" value={userCred.password} onChange={(e) => setUserCreds({...userCred, password:e.target.value})} name="passwrd" />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Signin