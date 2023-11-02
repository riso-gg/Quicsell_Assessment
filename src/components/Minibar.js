import React from "react";
import on from "../images/online.png";
import off from "../images/offline.png";

const Minibar = ({ type, val, cnt, user }) => {
  const state = {
    Backlog: "fa-rotate-left",
    Todo: "fa-circle-notch",
    "In progress": "fa-circle-half-stroke",
    Done: "fa-circle-check",
    Cancelled: "fa-circle-xmark",
  };
  const prior = {
    0: "fa-ellipsis",
    1: "fa-circle-exclamation",
    2: "fa-signal",
    3: "fa-signal",
    4: "fa-signal",
  };
  const p = ["No Priority", "Urgent", "High", "Medium", "Low"];
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          minWidth: "269px",
          maxWidth: "269px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          {type === "status" ? (
            <i className={`fa-solid ${state[val]}`}></i>
          ) : type === "priority" ? (
            <i className={`fa-solid ${prior[val]}`}></i>
          ) : (
            <img
              style={{ height: "20px", borderRadius: "30%" }}
              src={user.available ? on : off}
              alt="avatar_Pic"
            />
          )}
          &nbsp;&nbsp;
          <p>
            {type === "userId" ? user.name : type === "status" ? val : p[val]}
          </p>
          &nbsp;&nbsp;
          <p>{cnt[val]}</p>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <i className="fa-solid fa-plus"></i>&nbsp;&nbsp;&nbsp;
          <i className="fa-solid fa-ellipsis"></i>
        </div>
      </div>
    </>
  );
};

export default Minibar;
