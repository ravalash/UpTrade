import React from "react";
import { GreenListingBtn, RemoveGameBtn } from '../Buttons'
import API from '../../utils/API'


function InventoryItem(props) {

  const handleRemoveGame = (e) => {
    e.preventDefault();
    let gameid = e.target.getAttribute("id");
    API.checkLogin().then(res => { API.deleteItem(res.data.id, gameid) })
  }

  return (
    <div>
      {props.data.map((item) => (
        <div className="card" id="listing-item" key={item.id}>
          <div className="card-body" id="listing-item">

            <div className="row">
              <div className="col-4">
                <img
                  src={item.cover}
                  className="img-fluid"
                  alt="Cover of game"
                />
              </div>
              <div className="col-8">
                <a href={item.url} target="_blank" rel="noopener noreferrer"> <h4 className="card-title">{item.name}</h4></a>
                <p>
                  <span className="badge badge-pill badge-dark">
                    {item.platform}
                  </span>{" "}
                  <span className="badge badge-pill badge-primary">
                    {item.genre}
                  </span>
                </p>
                <p>
                  Game Key: {item.key}
                </p>
                <p>
                  {item.storyline} ... <a href={item.url}>[Read more]</a>
                </p>
                <GreenListingBtn name={item.name} id={item.id} chooseTrade={props.chooseTrade} />
                <RemoveGameBtn handleRemoveGame={handleRemoveGame} id={item.id} />
              </div>
            </div>
            <br />
            <hr />
          </div>
        </div>
      ))}
    </div>
  );
}

export default InventoryItem;
