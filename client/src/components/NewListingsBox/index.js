import React from "react";
import ListingItem from "../ListingItem"
const Data = require("../../exampleData")

function NewListingsBox() {
    return (
        <div className="card" >
            <div className="card-body">
                <h5 className="card-title">New Listings</h5>
                <hr />
                <div className="container">
                    <ListingItem name={Data[0].name} platform={Data[0].platform} genre={Data[0].genre} img={Data[0].img} lf1={Data[0].lf1} lf2={Data[0].lf2} lf3={Data[0].lf3} lf4={Data[0].lf4} />
                    <ListingItem name={Data[1].name} platform={Data[1].platform} genre={Data[1].genre} img={Data[1].img} lf1={Data[1].lf1} lf2={Data[1].lf2} lf3={Data[1].lf3} lf4={Data[1].lf4} />

                </div>
            </div>
        </div>
    )
}

export default NewListingsBox