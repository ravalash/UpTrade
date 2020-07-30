import React from "react";

function Dropdown(props) {
    const consoles = props.consoles
    const list = consoleList(consoles)

    function consoleList(consoles) {
        let list = []
        let pc = consoles.includes("6");
        let xbox = consoles.includes("49");
        let nintendo = consoles.includes("130");
        let ps4 = consoles.includes("167");
        if (pc === true) {
            list.push("Steam", "Origin", "Epic");
        } if (xbox === true) {
            list.push("Xbox One");
        } if (nintendo === true) {
            list.push("Nintendo Switch");
        } if (ps4 === true) {
            list.push("PlayStation 4")
        } return list
    }


    return (
        <select class="dropdown" id="platform">
            {list.map(con => {
                return (
                    <option class="dropdown-item" value={con}>{con}</option>
                )
            })}
        </select>
    )
}
export default Dropdown