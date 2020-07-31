import React, { useState, useEffect } from "react";
import UserCard from "../components/UserCard"
import NewListingsBox from "../components/NewListingsBox"
import MyListingsBox from "../components/MyListingsBox"
import '../App.css'
import Axios from 'axios';
import { Redirect } from 'react-router-dom';

function Dashboard(props) {
    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {

    }, [])

    return (
        <div className="container" id="dashboard-container">
            <div className="row">
                <div className="col-3" id="user-col">
                    <UserCard />
                </div>
                <div className="col-6" id="new-listings-col">
                    <NewListingsBox />
                </div>
                <div className="col-3" id="my-listings-col">
                    <MyListingsBox />
                </div>
            </div>
        </div>
    )
}

export default Dashboard