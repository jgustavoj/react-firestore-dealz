import React, { useEffect, useState } from "react";
import firebase from "./firebase";
import Navbar from "./components/navbar";
// import Dropdown from "./components/dropdown";
import ScrollButton from "./components/scrollButton";

import "./App.css";

export default function App() {
  const [deals, setDeals] = useState([]);
  const [loading, setLoading] = useState(false);

  const ref = firebase.firestore().collection("deals");

  // this function uses querySnapshot and it gives a response in "realtime" from firestore.
  function getDeals() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setDeals(items);
      setLoading(false);
    });
  }

  useEffect(() => {
    getDeals();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Navbar />

      {/* Dropdown */}

      {/* Content  */}
      <div className="content">
        <h1 className="heading">Local Dispensaries</h1>
        {deals.map((deal) =>
          deal.company !== "" ? (
            <div className="card" key={deal.id}>
              <div className="card__image">
                <a href={deal.link} target="blank">
                  <img
                    className="rounded img-fluid"
                    src={deal.link}
                    alt=""></img>
                </a>
              </div>
              <div className="card__body">
                <h5 className="image__title"> {deal.title}</h5>
                <a
                  href={deal.pageLink}
                  className="btn btn-outline-success"
                  target="blank">
                  {deal.company} {">>"}
                </a>
              </div>
            </div>
          ) : (
            <div style={{ display: "none" }} />
          )
        )}
      </div>
      <ScrollButton />
    </>
  );
}
