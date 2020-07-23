import React from "react";
import UserCard from "../components/UserCard"
import NewListingsBox from "../components/NewListingsBox"
import '../App.css'



function Dashboard() {
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

                </div>
            </div>
        </div>
    )
}

export default Dashboard