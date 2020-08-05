import React, { useContext } from "react";
import GameContext from "../../utils/GameContext";


export function AddInvBtn() {
    return (
        <button type="button" className="btn add-inv-btn cust-btn" data-toggle="modal" data-target="#add-inventory">
            Add an Item
        </button>
    );
}

export function GreenListingBtn(props) {




    return (

        <button
            type="button"
            data-id={props.id}
            className="btn btn-success add-list-btn"
            data-toggle="modal"
            data-target="#make-listing"
            name={props.name}
            onClick={props.chooseTrade}
        >

            Make a Listing
        </button>
    );
}


export function YellowListingBtn() {
    return <button type='button' className="btn add-inv-btn cust-btn" href="/inventory">Make a Listing</button>
}

export function MakeOfferBtn(props) {
    return (
        <button type="button" className="btn make-offer-btn cust-btn" data-toggle="modal" data-target="#make-offer">
            Make an Offer
        </button>
    );
}

export function ReviewOfferBtn(props) {
    return (
        <button type="button" className="btn review-offer-btn" data-toggle="modal" data-target="#review-offer">
            Review Offers
        </button>
    )
}