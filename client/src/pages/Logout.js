import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import API from "../utils/API";
import "../App.css";

function Logout() {
  const [redirect, setRedirect] = useState(null);

  useEffect(() => {
    console.log("logging out");

    API.logout()
      .then((res) => {
        console.log(res);
        if (res.data) {
          setRedirect("/");
        }
      })
      .catch((err) => console.log(err));
  }, []);

  if (redirect) {
    return <Redirect to={redirect} />;
  }

  return (
    <div className="container" id="dashboard-container">
      <div className="row">
        <div className="col-12">
          <h1>Logging Out</h1>
        </div>
      </div>
    </div>
  );
}

export default Logout;
