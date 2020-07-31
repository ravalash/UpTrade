import React from "react";
import ListingItem from "../ListingItem"

function NewListingsBox(props) {
    return (
        <div className="card" >
            <div className="card-body">
                <h5 className="card-title">New Listings</h5>
                <hr />
                <div className="container">
                    <ListingItem data={props.data} />
                </div>
            </div>
        </div>
    )
}

export default NewListingsBox