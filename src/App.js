import React, { useEffect, useState } from "react";
import firebase from "./firebase";
import Navbar from "./components/navbar";
// import Dropdown from "./components/dropdown";
import Select from "react-select";

import "./App.css";

export default function App() {
  const [deals, setDeals] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [company, setCompany] = useState([
  //   "Select Company",
  //   "Trulieve",
  //   "Surterra",
  //   "Option 3",
  // ]);
  const companyOptions = ["Trulive", "Surterra", "Test"];
  // { label: "Trulieve", value: "Trulieve" },
  // { label: "Surterra", value: "Surterra" },
  // { label: "Test", value: "Test" },
  const companySelectionDropdown = companyOptions.map((opt) => ({
    label: opt,
    value: opt,
  }));
  console.log("$$$$", deals);

  const ref = firebase.firestore().collection("deals");

  const handleChange = (e) => {
    return console.log(deals[e.target.value]);
  };

  //This function removes duplicates from the array of objects in deals hook to then use as a dropdown
  //company needs to be adjusted on db so everything is uniform and dropdown selection can work properly
  const uniqueObjects = [
    ...new Map(
      deals.map((item) => [item.company || item.Company, item])
    ).values(),
  ];
  console.log("DDDDD", uniqueObjects);

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
        <Select
          options={companySelectionDropdown}
          onChange={(opt) => console.log(opt.label, opt.value)}
        />
      </div>
      {/* <div className="dropdown">
        <select onChange={(e) => handleChange(e)}>
          {uniqueObjects.map((value, index) => (
            <option key={index} value={index}>
              {value.Company || value.company}
            </option>
          ))}
        </select>
      </div> */}

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
