import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Minibar from "./components/Minibar";

const App = ({ category, basis, cnt }) => {
  console.log(basis);
  const [data, setData] = useState();
  const [tle, setTle] = useState();
  const [user, setUser] = useState();
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(cnt);
  console.log(basis);
  const getAPIData = async () => {
    const res = await fetch(
      "https://api.quicksell.co/v1/internal/frontend-assignment"
    );
    const data = await res.json();
    setUser(data.users);
    const strAscending = [...data.tickets].sort((a, b) =>
      a.title > b.title ? 1 : -1
    );
    setData(data.tickets);
    setTle(strAscending);
    console.log(data);
    console.log(tle);
    if (data) {
      setShow(true);
      getCount();
    }
    console.log(data);
  };
  const getCount = () => {
    if (data) {
      category.map((cat) => {
        const item = data.filter((ele) => ele[basis] === cat);
        setCount({ ...count, cat: item.length });
      });
    }
  };
  useEffect(() => {
    getAPIData();
  }, []);

  return (
    <>
      <div className="allContent">
        {category.map((cat, i) => {
          return (
            <div className="content">
              {show ? (
                <>
                  {basis === "title" ? (
                    <Minibar
                      type={"status"}
                      val={cat}
                      cnt={cnt}
                      user={user[i]}
                    />
                  ) : (
                    <Minibar type={basis} val={cat} cnt={cnt} user={user[i]} />
                  )}
                  {basis !== "title"
                    ? data.map((ele, idx) => {
                        return (
                          <>
                            <Card
                              key={idx}
                              ele={ele}
                              para={basis}
                              pVal={cat}
                              user={user[i]}
                            />
                          </>
                        );
                      })
                    : tle.map((ele, idx) => {
                        return (
                          <>
                            <Card
                              key={idx}
                              ele={ele}
                              para={"status"}
                              pVal={cat}
                              user={user[i]}
                            />
                          </>
                        );
                      })}
                </>
              ) : null}
            </div>
          );
        })}
        <br />
      </div>
    </>
  );
};

export default App;
