import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from 'axios';

function SignInCard() {
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
            url: "http://localhost:8080/api/user/login",
        }).then((res) => console.log(res));
    };

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
// RegisterPage() {
//     return (
//         <div className="card sign-in-card mx-auto">
//             <div className="card-body">
//                 <h5 className="card-title">Register</h5>
//                 <hr />
//                 <form className="sign-in-form">
//                     <div className="form-group">
//                         <label htmlFor="email">Email address</label>
//                         <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="username">Username</label>
//                         <input type="username" className="form-control" id="exampleInputUsername1" aria-describedby="usernameHelp" placeholder="Enter a username" />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="exampleInputPassword1">Password</label>
//                         <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
//                     </div>
//                     <button type="submit" className="btn btn-success">Submit</button>
//                 </form>
//             </div>
//         </div>
//     )
// }



