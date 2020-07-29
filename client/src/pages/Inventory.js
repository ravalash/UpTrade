import React from "react";
import UserCard from "../components/UserCard";
import InventoryBox from "../components/InventoryBox";
const data = require("../exampleData");

function Inventory() {
    return (
        <div className="container" id="dashboard-container">
            <div className="row">
                <div className="col-3" id="user-col">
                    <UserCard />
                </div>
                <div className="col-9" id="new-listings-col">
                    <InventoryBox data={data}/>
                </div>
            </div>
        </div>
    )
}

export default Inventory