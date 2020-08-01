import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Axios from 'axios';

function RegisterCard() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [redirect, setRedirect] = useState(null);

    const register = async (e) => {
        e.preventDefault();
        try {
            const res = await Axios({
                method: "POST",
                data: {
                    email: email,
                    password: password,
                    name: name,
                    rating: 0,
                    id: 1
                },
                // withCredentials: true,
                url: "/api/user/register",
            })
            if (res.data) {
                setRedirect("/dashboard");
            }
        }
        catch (error) {
            console.log(error);
        };
    }
    if (redirect) {
        return <Redirect to={redirect} />
    }
    return (
        <div className="card sign-in-card mx-auto">
            <div className="card-body">
                <h5 className="card-title">Register</h5>
                <p className="card-subtitle"><Link to="/login">Already registered? Click here to login</Link></p>
                <hr />
                <form className="sign-in-form">
                    <div className="form-group">
                        <label htmlFor="name">Username</label>
                        <input
                            type="name"
                            className="form-control"
                            placeholder="Username"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
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
                    <button type="submit" className="btn btn-success" onClick={register}>Register</button>
                </form>
            </div>
        </div>
    )
}

export default RegisterCard
