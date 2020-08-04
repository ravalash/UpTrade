import React, { useState } from "react";
import API from "../../utils/API";
import GameTradeCard from "../GameTradeCard"
const data = require("../../exampleData");

function MakeOffer(props) {
    // these two arrays will be replaced in integration
    let lookingFor = ["No Man's Sky for PlayStation 4", "Super Mario Odyssey for Nintendo Switch", "Madden 19 for Xbox One", "Kerbal Space Program for Steam"]
    let myInventory = ["The Legend of Zelda: Breath of the Wild for Nintendo Switch", "Stardew Valley for Steam", "Kerbal Space Program for Steam"]

    return (
        <div className="modal fade" id="make-offer" tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Let's make an offer</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>What their looking for:</p>
                        <ul>
                            {lookingFor.map((item) => {
                                if (myInventory.includes(item)) {
                                    return (
                                        <li className="match-item">{item} <i>You have this item!</i></li>
                                    )
                                } else
                                    return (
                                        <li>{item}</li>
                                    )
                            })}
                        </ul>
                        <hr />
                        <p>What would you like to offer?</p>
                        {/* replace item with props.name when integrated */}
                        {myInventory.map((item) => {
                            return (
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id={item}></input>
                                    <label class="form-check-label" for={item}>
                                        {item}
                                    </label>
                                </div>
                            )
                        })}

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Make Offer</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MakeOffer