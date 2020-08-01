import React from "react";
import { ReviewOfferBtn } from "../Buttons"

function MyListingItem(props) {
    let isOffer = true


    return (
        <div>
            <div className="card" id="listing-item">
                <div className="card-body" id="listing-item">
                    <h5 className="card-title">Portal 2</h5>
                    <div>
                        <p><span className="badge badge-pill badge-dark">Xbox One</span> <span className="badge badge-pill badge-primary">Adventure</span></p>
                        {isOffer ? (<ReviewOfferBtn />) : (
                            <></>)}
                        <button type="button" className="btn btn-success">Cancel Listing</button>
                    </div>
                    <br />
                    <hr />
                </div>
            </div>
        </div>
    )
}

export default MyListingItem