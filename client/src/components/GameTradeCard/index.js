import React, { useState, useEffect } from "react";
import Dropdown from "../ConsoleDropdown";
import API from "../../utils/API";

function GameTradeCard(props) {
    const [select, setSelect] = useState([]);
    const [selectedTitle, setSelectedTitle] = useState("");
    const [selectedPlatform, setSelectedPlatform] = useState("");
    const [selectedGame, setSelectedGame] = useState({ title: "", platform: "" });
    const [wantedGames, setWantedGames] = useState([]);

    useEffect(() => {
        let item = { title: selectedTitle, platform: selectedPlatform }
        // console.log(item)
        setSelectedGame(item);

    }, [selectedTitle])

    function handleSelect() {
        if (select === true) {
            setSelect(false)
            // console.log("oop")
        } else
            // console.log("hello");
            setSelect(true)
    }

    function addToList() {
        let plat = document.getElementById("platform").value
        let title = props.title
        setSelectedPlatform(plat);
        setSelectedTitle(title)
        // console.log(plat)
        // console.log(title)
        console.log(selectedGame)
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
                        <p><Dropdown consoles={props.consoles} /></p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                        <button type="button" className="btn btn-primary" onClick={addToList}>Add to Listing</button>
                    </div>
                </form>
            ) : (
                    <></>
                )}
        </div>
    )
}

export default GameTradeCard