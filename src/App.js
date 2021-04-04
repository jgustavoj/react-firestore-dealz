import React, { useEffect, useState } from "react";
import firebase from "./firebase";
import "./App.css";

function App() {
  const [deals, setDeals] = useState([]);
  const [loading, setLoading] = useState(false);

  const ref = firebase.firestore().collection("deals");
  // console.log(ref);

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
      <div className="content">
        <h1>Dealz</h1>
        {deals.map((deal) => (
          <div key={deal.id}>
            {/* <h1 className="company"> {deal.Company}</h1> */}
            {deal.Company !== "" ? (
              <h2 className="image__title">
                {deal.Company} : {deal.Title}
              </h2>
            ) : (
              ""
            )}
            <div className="image">
              <a href={deal.Link} target="blank">
                <img className="rounded img-fluid" src={deal.Link} alt=""></img>
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
