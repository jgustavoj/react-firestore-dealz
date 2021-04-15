import React, { useState } from "react";
import Select from "react-select";

export default function Dropdown() {
  // const [company, setCompany] = useState([
  //   "Select Company",
  //   "Trulieve",
  //   "Option 2",
  //   "Option 3",
  // ]);
  const [filterOption, setFilterOption] = useState("");

  //This function removes duplicates from the array of objects in deals hook to then use as a dropdown
  //company needs to be adjusted on db so everything is uniform and dropdown selection can work properly
  // const uniqueObjects = [
  //   ...new Map(
  //     deals.map((item) => [item.company || item.Company, item])
  //   ).values(),
  // ];
  // console.log("DDDDD", uniqueObjects);

  // const handleCompanyChange = (e) => {
  //   console.log(company[e.target.value]);
  // };
  const companyOptions = ["", "Trulive", "Surterra", "Test"];
  const companySelectionDropdown = companyOptions.map((opt) => ({
    label: opt,
    value: opt,
  }));
  // console.log(
  //   "$$$$",
  //   deals.filter((x) => x.company || x.Company)
  // );
  const handleChange = (e) => {
    return console.log(companyOptions[e.target.value]);
  };

  return (
    // <div className="dropdown">
    //   <select onChange={(e) => handleCompanyChange(e)}>
    //     {company.map((value, index) => (
    //       <option key={index} value={index}>
    //         {value}
    //       </option>
    //     ))}
    //   </select>
    // </div>
    // {/* <div className="container mt-3">
    //   <Select
    //     options={companySelectionDropdown}
    //     onChange={handleChange}
    //     placeholder="Filter Company..."
    //   />
    // </div> */}
    <div className="dropdown">
      <select onChange={(e) => handleChange(e)}>
        {companySelectionDropdown.map((value, index) => (
          <option key={index} value={index}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
}

// search: search => {
//   const store = getStore();
//   let result = store.servicesProviders.filter(
//     item =>
//       item.name.toLowerCase().includes(search.toLowerCase()) ||
//       item.city.toLowerCase().includes(search.toLowerCase()) ||
//       item.date.includes(search) ||
//       item.hourlyRate.includes(search)
//   );
//   console.log(result);
//   setStore({ searchResult: result });
// },

// {/* <div className="dropdown">
//       <Select
//         options={companySelectionDropdown}
//         onChange={(opt) => console.log(opt.label, opt.value)}
//       />
//     </div> */}
//     {/* <div className="dropdown">
//       <select onChange={(e) => handleChange(e)}>
//         {uniqueObjects.map((value, index) => (
//           <option key={index} value={index}>
//             {value.Company || value.company}
//           </option>
//         ))}
//       </select>
//     </div> */}

//  {/* <button
//         onClick={() => actions.search(search)}
//         className="btn btn-outline-success my-2 my-sm-0"
//         type="button">
//         Search
//       </button> */}

// {/* Search bar  */}

// <div className="container">
//   <input
//     className=" form-control mr-sm-2"
//     type="text"
//     placeholder="Search"
//     aria-label="Search"
//   />
// </div>
