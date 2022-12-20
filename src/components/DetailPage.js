import React from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
function DetailPage(props) {
  console.log(props);

  return (
    
    <div className="card ">
   <div className="card-body text-center w-500">
        <h1 className="card-text">{props.item.DeviceId}</h1>
        <h1 className="card-text">{props.item.DeviceType}</h1>
        <p className="card-text">{props.item.Timestamp}</p>
        <p className="card-text">{props.item.location}</p>
      </div>
    </div>
  );
}
export default DetailPage;
