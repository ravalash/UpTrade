import React, { useState } from "react";
import Dropdown from "../ConsoleDropdown";
// import API from "../../utils/API";

function GameTradeCard(props) {
    const [select, setSelect] = useState([]);
    const [selectedPlatform, setSelectedPlatform] = useState("");

    function handleSelect() {
        if (select === true) {
            setSelect(false)
            // console.log("oop")
        } else
            // console.log("hello");
            setSelect(true)
    }

    const selectPlatform = (e) => {
        let plat = e.target.value;
        setSelectedPlatform(plat)
    }

    return (
        <div className="card mx-auto result">
            <a className="btn btn-success result-button" onClick={handleSelect}>
                <p>{props.title}</p>
            </a>
            {(select === true) ? (
                <form>
                    <div className="form-group">
                        <br />
                        <label htmlFor="consoleChoice">Platform:</label>
                        <p><Dropdown selectPlatform={selectPlatform} consoles={props.consoles} /></p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                        <button
                            type="button"
                            className="btn btn-primary"
                            data-title={props.title}
                            id={props.id}
                            data-platform={selectedPlatform}
                            onClick={props.onClick}
                        >Add to Listing
                        </button>
                    </div>
                </form>
            ) : (
                    <></>
                )}
        </div>
    )
}

export default GameTradeCard

// before adding a game: className="btn btn-secondary"