import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Axios from 'axios';

function SignInCard() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(null);

    const login = async (e) => {
        e.preventDefault();
        try {
            const res = await Axios({
                method: "POST",
                data: {
                    email: email,
                    password: password,
                },
                // withCredentials: true,
                url: "http://localhost:8080/api/user/login",
            })

            if (res.data) {
                setRedirect('/dashboard');
            }
        }
        catch (error) {
            console.log(error);
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

export default SignInCard


