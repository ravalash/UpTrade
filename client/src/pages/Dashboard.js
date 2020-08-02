import React, { useState, useEffect } from "react";
import UserCard from "../components/UserCard"
import NewListingsBox from "../components/NewListingsBox"
import MyListingsBox from "../components/MyListingsBox"
import '../App.css'
const data = require("../exampleData");


function Dashboard(props) {
    const [user, setUser] = useState({})
    // console.log(user)

    useEffect(() => {
        setUser(props.location.state.user)
        console.log(user)
    }, [])

    return (
        <div className="container" id="dashboard-container">
            <div className="row">
                <div className="col-3" id="user-col">
                    <UserCard />
                </div>
                <div className="col-6" id="new-listings-col">
                    <NewListingsBox data={data} />
                </div>
                <div className="col-3" id="my-listings-col">
                    <MyListingsBox />
                </div>
            </div>
        </div>
    )
}

export default Dashboard