import React, { useState, useEffect } from "react";
import { AddInvBtn, YellowListingBtn } from "../Buttons";
import { Redirect } from "react-router-dom";
import API from "../../utils/API";

function UserCard() {
  const [userData, setUserData] = useState({
    name: "",
    keys: 0,
    listings: 0,
    offers: 0,
  });
  const [userRedirect, setUserRedirect] = useState(0);

  //   useEffect(() => {
  //       console.log('user card use effect');
  //     API.checkLogin
  //       .then((res) => {
  //         setUserData({ name: res.data.name, ...userData });
  //       })
  //       .catch((err) => {
  //         setUserRedirect(1);
  //       });
  //   }, []);

  useEffect(() => {
    console.log("user card use effect");
    API.checkLogin()
      .then((res) => {
        console.log(res.data);
        setUserData({ ...userData, name: res.data.name })
      })
      .catch((err) => {
        console.log(err);
        setUserRedirect(1);
      });
  }, []);

  if (userRedirect === 1) {
    console.log("redirect from usercard");
    return <Redirect to="/" />;
  }

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{userData.name}</h5>
        <hr />
        <p>
          <AddInvBtn /> <YellowListingBtn />
        </p>
      </div>
    </div>
  );
}

export default UserCard;
