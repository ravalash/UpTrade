import React, { UseState } from "react";


export function AddInvBtn(props) {
    return (
        <a type="button" className="btn add-inv-btn btn-success" data-toggle="modal" data-target="#add-inventory">
            Add an Item
        </a>
    );
}

export function ListingBtn(props) {
    return (
        <a type="button" className="btn add-list-btn btn-warning" {...props} data-toggle="modal" data-target="#make-listing">
            Make a Listing
        </a>
    );
}

export function MakeOfferBtn(props) {
    return (
        <a type="button" className="btn make-offer-btn btn-warning" data-toggle="modal" data-target="#make-offer">
            Make an Offer
        </a>
    );
}

export function ReviewOfferBtn(props) {
    return (
        <a type="button" className="btn review-offer-btn btn-warning" data-toggle="modal" data-target="#review-offer">
            Review Offers
        </a>
    )
}