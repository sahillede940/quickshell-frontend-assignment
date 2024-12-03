import React from "react";
import "./Card.css";
import InitialAvatar from "../Avatar/Avatar";
import { grey_circle } from "../../assets";

const Card = ({ title, id, tag, icon, user, status_img, grouping }) => {
  return (
    <div className="card-container">
      <div className="card-header">
        <span className="card-id">{id}</span>
        {grouping !== "User" && <InitialAvatar name={user} size={30} />}
      </div>
      <div className="wrap">
        <img src={status_img} alt="status" className="icon-wrapper" />
        <p className="card-title">{title}</p>
      </div>
      <div className="card-footer">
        <div className="icon-wrapper">
          <img src={icon} alt="User Avatar" className="icon-wrapper" />
        </div>
        <div className="icon-wrapper">
          <img src={grey_circle} alt="User Avatar" className="icon-wrapper" />
        </div>
        <span className="feature-tag">{tag}</span>
      </div>
    </div>
  );
};

export default Card;
