import React, { useState } from "react";
import on from "../images/online.png";
import off from "../images/offline.png";
import "./Card.css";

const Card = ({ ele, para, pVal, user }) => {
  const imgStatus = user.available;
  return (
    <>
      {ele[para] === pVal ? (
        <div className="mainDiv">
          <div className="topSection">
            <p>{ele.id}</p>
            {para !== "userId" ? (
              <img src={imgStatus ? on : off} alt="img" />
            ) : null}
          </div>
          <div className="midSection">
            <h5>{ele.title}</h5>
          </div>
          <div className="bottomSection">
            <p>
              <i className="fa-solid fa-circle-exclamation"></i>
            </p>
            <p>{ele.tag[0]}</p>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Card;
