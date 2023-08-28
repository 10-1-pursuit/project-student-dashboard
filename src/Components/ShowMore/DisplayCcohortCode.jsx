import React from "react";

function DisplayCcohortCode({ cohortList, handleSortedClick, showAllStudents }) {
  return (
    <div className="displaycohort-container">
      <h3>Choose a Class by Start Date</h3>
      <div className="displaycohort-list" onClick={showAllStudents}>
        All Students
      </div>
      {cohortList.map((element, index) => {
        return (
          <div
            className="displaycohort-list"
            key={index}
            onClick={() => handleSortedClick(element.season, element.year)}
          >
            {element.season} {element.year}
          </div>
        );
      })}
    </div>
  );
}

export default DisplayCohortCode;
