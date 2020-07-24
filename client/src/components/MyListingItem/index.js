import React from "react";

function MyListingItem(props) {
    return (
        <div className="card" id="listing-item">
            <div className="card-body" id="listing-item">
                <h5 className="card-title">Portal 2</h5>
                <div>
                    <p><span class="badge badge-pill badge-dark">Xbox One</span> <span class="badge badge-pill badge-primary">Adventure</span></p>
                    <button type="button" class="btn btn-success">Cancel Listing</button>
                </div>
                <br />
                <hr />
            </div>

        </div>
    )
}

export default MyListingItem