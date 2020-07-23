import React, { useState } from 'react';
import Axios from 'axios';

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const register = () => {
        Axios({
            method: "POST",
            data: {
                email: email,
                password: password,
                name: name
            },
            // withCredentials: true,
            url: "http://localhost:8080/api/register",
        }).then((res) => console.log(res));
    };

    return (
        <div>
            <h1>Register</h1>
            <input
                type="email"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <input
                type="text"
                placeholder="name"
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={register}>Register</button>
        </div>
    )
}

export default Register