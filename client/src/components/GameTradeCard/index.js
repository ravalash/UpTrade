import React, { useState } from "react";
import Dropdown from "../ConsoleDropdown";
import API from "../../utils/API";

function GameTradeCard(props) {
    const [select, setSelect] = useState([])

    function handleSelect() {
        if (select === true) {
            setSelect(false)
            console.log("oop")
        } else
            console.log("hello");
        setSelect(true)
    }

    function addToList(game) {
        let item = '"' + game.title + ' on ' + game.platform + '"'
    }
    return (
        <div className="card mx-auto result">
            <a className="btn btn-success result-button" onClick={handleSelect}>
                <p>{props.title}</p>
            </a>
            {(select === true) ? (
                <form>
                    <div class="form-group">
                        <br />
                        <label for="consoleChoice">Platform:</label>
                        <p><Dropdown consoles={props.consoles} /></p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-primary" onClick={() => addToList({
                            title: props.title,
                            platform: document.getElementById("platform").value,
                        })}>Add to Listing</button>
                    </div>
                </form>
            ) : (
                    <></>
                )}
        </div>
    )
}

export default GameTradeCard