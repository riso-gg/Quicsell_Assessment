import React, { useEffect, useState } from "react";
import "./Navbar.css";
import App from "./App";

const Main = () => {
  const [showNav, setShowNav] = useState(false);
  const [basis, setBasis] = useState("status");
  const handleChange = (e) => {
    localStorage.setItem("type", e.target.value);
    setBasis(e.target.value);
  };
  const getBasis = () => {
    if (!localStorage.getItem("type")) {
      localStorage.setItem("type", "status");
      setBasis("status");
    } else if (localStorage.getItem("type")) {
      setBasis(localStorage.getItem("type"));
    }
  };
  useEffect(() => {
    getBasis();
  });
  return (
    <div>
      <div className="navbar">
        <button className="navBtn" onClick={() => setShowNav(!showNav)}>
          <i className="fa-solid fa-sliders"></i>&nbsp;&nbsp;Display&nbsp;&nbsp;
          <i className="fa-solid fa-angle-down"></i>
        </button>
        <br />
        {showNav ? (
          <div className="whatToDo">
            <div className="options">
              <label htmlFor="grouping">Grouping</label>
              <select name="grouping" id="grouping" onChange={handleChange}>
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>
            <br />
            <div className="options">
              <label htmlFor="ordering">Ordering</label>
              <select name="ordering" id="ordering" onChange={handleChange}>
                <option value="priorityy">Priority</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        ) : null}
      </div>
      {basis === "status" ? (
        <App
          category={["Backlog", "Todo", "In progress", "Done", "Cancelled"]}
          basis={"status"}
          cnt={{
            Backlog: "2",
            Todo: "3",
            "In progress": "5",
            Done: "0",
            Cancelled: "0",
          }}
        />
      ) : basis === "user" ? (
        <App
          category={["usr-1", "usr-2", "usr-3", "usr-4", "usr-5"]}
          basis={"userId"}
          cnt={{
            "usr-1": "3",
            "usr-2": "3",
            "usr-3": "1",
            "usr-4": "1",
            "usr-5": "2",
          }}
        />
      ) : basis === "priority" ? (
        <App
          category={[0, 1, 2, 3, 4]}
          basis={"priority"}
          cnt={{
            0: 1,
            1: 3,
            2: 2,
            3: 3,
            4: 1,
          }}
        />
      ) : basis === "priorityy" ? (
        <App
          category={[1, 2, 3, 4, 0]}
          basis={"priority"}
          cnt={{
            0: 1,
            1: 3,
            2: 2,
            3: 3,
            4: 1,
          }}
        />
      ) : (
        <App
          category={["Backlog", "Todo", "In progress", "Done", "Cancelled"]}
          basis={"title"}
          cnt={{
            Backlog: "2",
            Todo: "3",
            "In progress": "5",
            Done: "0",
            Cancelled: "0",
          }}
        />
      )}
    </div>
  );
};

export default Main;
