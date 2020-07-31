import React from "react";
import UserCard from "../components/UserCard";
import ListingsBox from "../components/ListingsBox";
const data = require("../exampleData");

function Listings() {
    return (
        <div className="container" id="dashboard-container">
            <div className="row">
                <div className="col-3" id="user-col">
                    <UserCard />
                </div>
                <div className="col-9" id="new-listings-col">
                    <ListingsBox data={data} />
                </div>
            </div>
        </div>
    )
}

export default Listings