import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { NotificationManager } from "react-notifications";
import Axios from 'axios';
import { toLocaleString } from "../../exampleData";

function LogInCard() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(null);
    const [userId, setUserId] = useState("")

    function useEffect() {
        NotificationManager.warning('Invalid email or password');
    }

    const login = async (e) => {
        console.log(`login`);
        e.preventDefault();
        try {
            const res = await Axios.post('/api/user/login', {
                email: email,
                password: password
            })
            if (res.data) {
                setUserId(res.data.id);
                setRedirect('/dashboard');
            }
        }
        catch (error) {
            useEffect()
        };
    };

    if (redirect) {
        return <Redirect to={redirect} />
    }

    return (
        <div className="card sign-in-card mx-auto">
            <div className="card-body">
                <h5 className="card-title">Log-In</h5>
                <p className="card-subtitle"><Link to="/register">Not registered? Click here to set up an account</Link></p>
                <hr />
                <form className="sign-in-form">
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-success" onClick={login}>Login</button>
                </form>
            </div>
        </div>
    )
}

export default LogInCard