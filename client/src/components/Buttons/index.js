import React, { useContext } from "react";
import GameContext from "../../utils/GameContext";


export function AddInvBtn() {
    return (
        <a type="button" className="btn add-inv-btn btn-success" data-toggle="modal" data-target="#add-inventory">
            Add an Item
        </a>
    );
}

export function GreenListingBtn(props) {

    const { selectedGame } = useContext(GameContext);

    const selectItems = (event) => {
        event.preventDefault();
        console.log(event);
        console.log(selectedGame);

    }

    return (

        <button
            type="button"
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
    return <a type='button' className="btn btn-warning" href="/inventory">Make a listing</a>
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