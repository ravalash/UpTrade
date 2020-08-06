import React, { useState, useEffect } from "react";
import UserCard from "../components/UserCard"
import NewListingsBox from "../components/NewListingsBox"
import MyListingsBox from "../components/MyListingsBox"
import API from "../utils/API"
import { Redirect } from "react-router-dom";
import '../App.css'


function Dashboard(props) {

    const [allListings, setAllListings] = useState([]);
    useEffect(() => {
        console.log("listing use effect");
        API.loadAllSeller()
            .then((res) => {
                // console.log(res);
                setAllListings(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);


    return (
        <div className="container" id="dashboard-container">
            <div className="row">
                <div className="col-3" id="user-col">
                    <UserCard />
                </div>
                <div className="col-6" id="new-listings-col">
                    <NewListingsBox data={allListings} newOffer={props.newOffer} />
                </div>
                <div className="col-3" id="my-listings-col">
                    {/* <MyListingsBox /> */}
                </div>
            </div>
        </div>
    )
}

export default Dashboard