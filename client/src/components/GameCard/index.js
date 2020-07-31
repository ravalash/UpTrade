import React, { useState } from "react";
import Dropdown from "../ConsoleDropdown";
import API from "../../utils/API";

function GameCard(props) {
    const [select, setSelect] = useState([])

    function handleSelect() {
        if (select === true) {
            setSelect(false)
            console.log("oop")
        } else
            console.log("hello");
        setSelect(true)
    }

    function saveItem(game) {
        console.log(game)
        API.searchCover(game.cover)
        .then((res) => {
            game.cover = res.data[0].url;
            return game
        })
        .then ((result) => API.addItem(result))
        
    }

    return (
        <div className="card mx-auto result">
            <a className="btn btn-success result-button" onClick={handleSelect}>
                <p>{props.title}</p>
            </a>
            {(select === true) ? (
                <form>
                    <div class="form-group">
                        <label for="consoleChoice">Platform:</label>
                        <Dropdown consoles={props.consoles} />
                    </div>
                    <div class="form-group">
                        <label for="gameKey">Enter your game key here:</label>
                        <input type="game-key" class="form-control" id="gameKey" />
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-primary" onClick={() => saveItem({
                            name: props.title,
                            platform: document.getElementById("platform").value,
                            key: document.getElementById("gameKey").value,
                            url: props.url,
                            cover: props.cover,
                            storyline: props.storyline
                        })}>Add Item</button>
                    </div>
                </form>
            ) : (
                    <></>
                )}
        </div>
    )
}

export default GameCard