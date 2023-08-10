import React from "react";
import data from "../data/data.json";


function SideBar() {
    

    return (
      <div className="sidebar">
            <h4> Choose a Class by Start Date </h4>
            {data.map((item, id) => {
            return( 
          <ul>
            <li key={id}>{item.cohort.cohortCode}</li>
          </ul>
            ) })}
      </div>
    );
}
export default SideBar;