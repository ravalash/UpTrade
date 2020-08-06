import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import Axios from 'axios';
import LogInCard from "../components/LogInCard"

// import SignInCard from "../components/SignInCard"

export function LogIn() {



    return (
        <div className="container">
            <LogInCard />
        </div>
    )
}