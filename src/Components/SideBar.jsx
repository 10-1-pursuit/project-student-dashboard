import React from "react";
import data from "../data/data.json";
// import "./index.css"

function SideBar() {
    return (
      <div className="sidebar">
            <h4> Choose a Class by Start Date </h4>
            {data.map((items, id ) => {
            return( 
          <ul>
            <li key={id}>{items.cohort.cohortCode}</li>
          </ul>
            ) })}
      </div>
    );
}
export default SideBar;