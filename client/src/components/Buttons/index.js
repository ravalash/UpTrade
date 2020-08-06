
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { NotificationManager } from 'react-notifications';


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
    function useEffect() {
        NotificationManager.info('Choose one of your games to list');
    }
    return <Link to="/inventory"><button type='button' className="btn add-inv-btn cust-btn" onClick={useEffect}>Make a Listing</button></Link>
}

export function MakeOfferBtn(props) {
    return (
        <a type="button" className="btn make-offer-btn btn-warning" data-toggle="modal" data-target="#make-offer" onClick={props.newOffer} data-id={props.id} >Make an Offer</a>

    );
}

export function ReviewOfferBtn(props) {
    return (
        <button type="button" className="btn review-offer-btn" data-toggle="modal" data-target="#review-offer" data-id={props.data.id} onClick={props.reviewOffer}>
            Review Offers
        </button>
    )
}

export function RemoveGameBtn(props) {
    return (
        <button type="button" className="btn btn-primary" id={props.id} onClick={props.handleRemoveGame}>
            Remove Game
        </button>
    )
}