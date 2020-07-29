import React from "react";


export function AddInvBtn(props) {
    return (
        <a type="button" className="btn btn-success" data-toggle="modal" data-target="#add-inventory">
            Add an Item
        </a>
    );
}

export function ListingBtn(props) {
    return (
        <a type="button" className="btn btn-warning" {...props} data-toggle="modal" data-target="#make-listing">
            Make a Listing
        </a>
    );
}