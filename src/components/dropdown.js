import React, { useState } from "react";

export default function Dropdown() {
  const [company, setCompany] = useState([
    "Select Company",
    "Trulieve",
    "Option 2",
    "Option 3",
  ]);

  const handleCompanyChange = (e) => {
    console.log(company[e.target.value]);
  };
  return (
    <div className="dropdown">
      <select onChange={(e) => handleCompanyChange(e)}>
        {company.map((value, index) => (
          <option key={index} value={index}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
}
