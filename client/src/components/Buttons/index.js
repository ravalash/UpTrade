import React from "react";


export function AddInvBtn() {
    return (
        <a type="button" className="btn btn-success" data-toggle="modal" data-target="#add-inventory">
            Add an Item
        </a>
    );
}

export function GreenListingBtn(props) {
    return (
        <button
            type="button"
            className="btn btn-success"
            {...props}
            data-toggle="modal"
            data-target="#make-listing"
            title={props.title}
        >
            Make a Listing
        </button>
    );
}

export function YellowListingBtn() {
    return <a type='button' className="btn btn-warning" href="/inventory">Make a listing</a>
}