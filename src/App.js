import React, { useEffect, useState } from "react";
import firebase from "./firebase";
import Navbar from "./components/navbar";
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
      <Navbar />

      {/* <div className="searchBar">
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit">
            Search
          </button>
        </form>
      </div> */}

      <div className="content">
        <h1 className="heading">Miami</h1>

        {deals.map((deal) => (
          <div
            className="card "
            key={deal.id}
            style={{
              maxWidth: "35rem",
              padding: "1.25rem",
              margin: "0 1.25rem 2.25rem 1.25rem",
            }}>
            {/* <h1 className="company"> {deal.Company}</h1> */}
            {/* {deal.Company !== "" ? (
              <h2 className="image__title">
                {deal.Company} : {deal.Title}
              </h2>
            ) : (
              ""
            )} */}
            {/* <div className="card-image"> */}
            {/* <img className="card-img-top" src="..." alt="" /> */}

            <a href={deal.Link} target="blank">
              <img
                className=" card-img-top rounded img-fluid"
                src={deal.Link}
                alt=""></img>
            </a>
            {/* </div> */}

            {/* <div className="card" style={{ width: "18rem" }}> */}
            <div
              className="card-body"
              style={{ padding: "1.25rem 0 1.25rem 0" }}>
              {/* {deal.Company !== "" ? (
                <h3 className="card-title image__title">
                  {deal.Company} : {deal.Title}
                </h3>
              ) : (
                ""
              )} */}
              <h5 className="card-title image__title"> {deal.Title}</h5>

              {/* <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p> */}
              <a
                href={deal.pageLink}
                className="btn btn-outline-success"
                target="blank">
                {deal.Company}
              </a>
            </div>
            {/* </div> */}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
