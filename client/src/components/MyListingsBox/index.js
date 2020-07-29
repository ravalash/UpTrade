import React from "react";
import MyListingItem from "../MyListingItem"
const Data = require("../../exampleData")

function MyListingsBox() {
    return (
        <div className="card" >
            <div className="card-body">
                <h5 className="card-title">My Listings</h5>
                <hr />
                <div className="container">
                    <MyListingItem />
                </div>
            </div>
        </div>
    )
}

export default MyListingsBox