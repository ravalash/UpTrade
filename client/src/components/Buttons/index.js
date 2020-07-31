import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';



export function AddInvBtn(props) {
    return (
        <a type="button" className="btn btn-success" data-toggle="modal" data-target="#add-inventory">
            Add an Item
        </a>
    );
}

export function ListingBtn(props) {
    const popover = (
        <Popover id="popover-basic">
            <Popover.Title as="h3">Create a listing</Popover.Title>
            <Popover.Content>
                Popover content <strong>some strong content</strong> Normal content again
          </Popover.Content>
        </Popover>
    );

    return (
        <OverlayTrigger trigger="click" placement="top" overlay={popover}>
            <a
                type="button"
                className="btn btn-warning"
                // {...props}
                // data-toggle="modal"
                // data-target="#make-listing"
                href="/inventory">
                Make a Listing
        </a>
        </OverlayTrigger>
    );
}