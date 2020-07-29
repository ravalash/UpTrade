import React from "react";
import InventoryItem from "../InventoryItem"


function InventoryBox(props) {
    return (
        <div className="card" >
            <div className="card-body">
                <h5 class="card-title">Inventory</h5>
                <hr />
                <div className="container">
                    <InventoryItem  data={props.data}/>
                </div>
            </div>
        </div>
    )
}

// name={Data[0].name} platform={Data[0].platform} genre={Data[0].genre} img={Data[0].img} lf1={Data[0].lf1} lf2={Data[0].lf2} lf3={Data[0].lf3} lf4={Data[0].lf4}
export default InventoryBox