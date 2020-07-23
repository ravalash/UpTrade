import React, { useState } from 'react';
import Axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        Axios({
            method: "POST",
            data: {
                email: email,
                password: password,
            },
            // withCredentials: true,
            url: "http://localhost:8080/api/login",
        }).then((res) => console.log(res));
    };

    return (
        <div>
            <h1>Login</h1>
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
            <button onClick={login}>Login</button>
        </div>
    )
}

export default Login