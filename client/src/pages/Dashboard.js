import React, { useState, useEffect } from "react";
import UserCard from "../components/UserCard"
import NewListingsBox from "../components/NewListingsBox"
import MyListingsBox from "../components/MyListingsBox"
import { Redirect } from "react-router-dom";
import API from '../utils/API';
// import Moment from 'moment';
import '../App.css'


function Dashboard(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
        // let myDate = Moment(new Date()).format("YYYY-MM-DD");
        // console.log(myDate)

        // API.loadAllListings().then(res => {
        //     res.data.filter(listing => listing.createdAt = myDate)
        // }).then(data => console.log(data))
        API.loadAllListings().then(res => setData(res.data))

    }, [])
    return (
        <div className="container" id="dashboard-container">
            <div className="row">
                <div className="col-3" id="user-col">
                    <UserCard />
                </div>
                <div className="col-6" id="new-listings-col">
                    <NewListingsBox data={data} />
                </div>
                <div className="col-3" id="my-listings-col">
                    {/* <MyListingsBox /> */}
                </div>
            </div>
        </div>
    )
}

export default Dashboard