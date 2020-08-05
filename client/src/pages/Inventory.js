import API from "../utils/API";
import React, { useState, useEffect } from "react";
import UserCard from "../components/UserCard";
import InventoryBox from "../components/InventoryBox";


function Inventory(props) {

    const [savedItems, setSavedItems] = useState([]);
      

  useEffect(() => {
    console.log("inventory use effect");
    API.loadAllItems()
      .then((res) => {
        console.log(res.data);
        setSavedItems(res.data);
      })
      .catch((err) => {
        console.log(err);
        // setRedirectInventory(1)
      });
  }, []);



    return (
        <div className="container" id="dashboard-container">
            <div className="row">
                <div className="col-3" id="user-col">
                    <UserCard />
                </div>
                <div className="col-9" id="new-listings-col">
                    <InventoryBox data={savedItems} chooseTrade={props.chooseTrade} />
                </div>
            </div>
        </div>
    )
}

export default Inventory