import React from "react";
import { AddInvBtn, YellowListingBtn } from "../Buttons"

function UserCard() {
    return (
        <div className="card" >
            <div className="card-body">
                <h5 className="card-title">dooski321</h5>
                <hr />
                <ul>
                    <li id="number-of-keys">6 keys in inventory</li>
                    <li id="active-listings">3 active listings</li>
                    <li id="trade-offers">2 trade offers</li>
                </ul>
                <p><AddInvBtn /> <YellowListingBtn /></p>
            </div>
        </div>
    )
}

export default UserCard