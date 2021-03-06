import React, { useState } from "react";
import Dropdown from "../ConsoleDropdown";
import Alert from "../Alert";
import API from "../../utils/API";
import { NotificationManager } from "react-notifications"

function GameCard(props) {
    const [select, setSelect] = useState([]);
    const [success, setSuccess] = useState(null);

    function handleSelect() {
        if (select === true) {
            setSelect(false);
            console.log("oop");
        } else console.log("hello");
        setSelect(true);
    }

    function saveItem(game) {
        console.log(game);
        API.searchCover(game.cover)
            .then((res) => {
                const coverUrl = res.data[0].url.replace("t_thumb", "t_cover_big");
                game.cover = coverUrl;
                return game;
            })
            .then((result) => API.addItem(result))
            .then((result) => {
                console.log(result);
                NotificationManager.success('Game added!');
                if (result.status === 200) {
                    setSelect(false);
                    setSuccess(true);
                }
            });
    }


    if (success === true) {
        return (
            <Alert style={{ opacity: 1 }} type="success">
                Game Added!{" "}
            </Alert>
        );
    }

    return (
        <div className="card result">
            <button className="btn btn-success result-button" onClick={handleSelect}>
                <p>{props.title}</p>
            </button>
            {select === true ? (
                <form className="result-form">
                    <div className="form-group">
                        <label for="consoleChoice">Platform:</label>
                        <Dropdown consoles={props.consoles} />
                    </div>
                    <div className="form-group">
                        <label for="gameKey">Enter your game key here:</label>
                        <input type="game-key" className="form-control" id="gameKey" />
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-dismiss="modal"
                        >
                            Cancel
            </button>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() =>
                                saveItem({
                                    name: props.title,
                                    platform: document.getElementById("platform").value,
                                    key: document.getElementById("gameKey").value,
                                    url: props.url,
                                    cover: props.cover,
                                    storyline: props.storyline,
                                })
                            }
                        >
                            Add Item
            </button>
                    </div>
                </form>
            ) : (
                    <></>
                )}
        </div>
    );
}

export default GameCard;
