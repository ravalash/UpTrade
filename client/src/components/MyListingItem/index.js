import React from "react";
import { ReviewOfferBtn } from "../Buttons"

function MyListingItem(props) {
    let isOffer = true


    return (
        // <div>
        //     {props.data.map((item, index) => (
        //         <div className="card" id="listing-item" key={index}>
        //             <div className="card-body" id="listing-item">
        //                 <h5 className="card-title">{item.name}</h5>
        //                 <div className="row">
        //                     <div className="col-4">
        //                         <img src={item.img} className="img-fluid" alt={"Cover of " + item.name} />
        //                     </div>
        //                     <div className="col-8">
        //                         <p><span className="badge badge-pill badge-dark">{item.platform}</span> <span className="badge badge-pill badge-primary">{item.genre}</span></p>
        //                         <p>{item.storyline}</p>
        //                         <h6>Looking for:</h6>
        //                         <ul>
        //                             <li>
        //                                 {item.lf1}
        //                             </li>
        //                             <li>
        //                                 {item.lf2}
        //                             </li>
        //                             <li>
        //                                 {item.lf3}
        //                             </li>
        //                             <li>
        //                                 {item.lf4}
        //                             </li>
        //                         </ul>
        //                         <button type="button" className="btn btn-success">Make an Offer</button>
        //                     </div>
        //                 </div>
        //                 <br />
        //                 <hr />
        //             </div>
        //         </div>
        //     ))
        //     }
        // </div>

        <div>
            <p>My listing item</p>
            <div className="card" id="listing-item">
                <div className="card-body" id="listing-item">
                    <h5 className="card-title">Portal 2</h5>
                    <div>
                        <p><span className="badge badge-pill badge-dark">Xbox One</span> <span className="badge badge-pill badge-primary">Adventure</span></p>
                        {isOffer ? (<ReviewOfferBtn />) : (
                            <></>)}
                        <button type="button" className="btn btn-success">Cancel Listing</button>
                    </div>
                    <br />
                    <hr />
                </div>
            </div>
        </div>
    )
}

export default MyListingItem