import React from "react";
import MyListingItem from "../MyListingItem";

function MyListingsBox(props) {
    return (
        <div className="card" >
            <div className="card-body">
                <h5 className="card-title">My Listings</h5>
                <hr />
                <div className="container">
                    <MyListingItem data={props.data} />
                </div>
            </div>
        </div>
    )
}


export default MyListingsBox