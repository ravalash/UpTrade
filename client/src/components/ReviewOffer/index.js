import React, { useState } from "react";
import OfferCard from "../OfferCard"
const data = require("../../exampleData");

function ReviewOffer(props) {
    return (

        <div className="modal fade" id="review-offer" tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">You've got offers!</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <OfferCard />
                        <br />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ReviewOffer
