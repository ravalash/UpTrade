import React, { useState, useEffect } from "react";
import UserCard from "../components/UserCard"
import NewListingsBox from "../components/NewListingsBox"
import MyListingsBox from "../components/MyListingsBox"
import { Redirect } from "react-router-dom";
import '../App.css'
import API from "../utils/API";


function Dashboard(props) {

const data = require("../exampleData");


const [redirectDashboard, setRedirectDashboard] = useState(0);


// useEffect(() => {
//     console.log("dashboard use effect");
//     API.checkLogin()
//       .then((res) => {
//         console.log(res);
        
//       })
//       .catch((err) => {
//         console.log(err);
//         setRedirectDashboard(1)
//       });
//   }, []);



  if(redirectDashboard===1) {
      console.log('redirect from dashboard')
    return <Redirect to="/"/>;
  }


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
                    <MyListingsBox />
                </div>
            </div>
        </div>
    )
}

export default Dashboard