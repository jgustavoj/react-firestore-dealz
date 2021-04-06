import React, { useEffect, useState } from "react";
import firebase from "./firebase";
import Navbar from "./components/navbar";
// import Dropdown from "./components/dropdown";
import "./App.css";

export default function App() {
  const [deals, setDeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [company, setCompany] = useState([
    "Select Company",
    "Trulieve",
    "Option 2",
    "Option 3",
  ]);

  const [dropdownResults, setDropdownResults] = [];

  console.log("$$$$", deals);

  const ref = firebase.firestore().collection("deals");
  // console.log(ref);
  const handleCompanyChange = (e) => {
    console.log(company[e.target.value]);
  };
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
      <div className="dropdown">
        <select onChange={(e) => handleCompanyChange(e)}>
          {company.map((value, index) => (
            <option key={index} value={index}>
              {value}
            </option>
          ))}
        </select>
      </div>

      {/* {function filterResult(company) {
        let result = deals.filter((item) => item.Company.includes(company));
        console.log("&&&&&", result);
      }} */}

      <div className="content">
        <h1 className="heading">Miami</h1>
        {deals.map((deal) => (
          <div className="card" key={deal.id}>
            <div className="card__image">
              <a href={deal.Link || deal.link} target="blank">
                <img
                  className="rounded img-fluid"
                  src={deal.Link || deal.link}
                  alt=""></img>
              </a>
            </div>

            <div className="card__body">
              <h5 className="image__title"> {deal.Title || deal.title}</h5>
              <a
                href={deal.pageLink}
                className="btn btn-outline-success"
                target="blank">
                {deal.Company || deal.company} {">>"}
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
