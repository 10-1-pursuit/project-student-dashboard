import React from "react";
import "./aside.css";

function Aside({
  studentsList,
  cohortCodes,
  setSelectedCohort,
  studentsByCode,
  setSelectedStudentsList,
}) {
  function handleCohort(e) {
    if (studentsByCode.hasOwnProperty(e)) {
      setSelectedCohort(e);
      setSelectedStudentsList(studentsByCode[e]);
    } else {
      setSelectedStudentsList(studentsList);
    }
  }
  let arr = [];

  function handleSpace() {
    for (let i = 0; i < cohortCodes.length; i++) {
      let season = cohortCodes[i].split("");
      let year = season.splice(season.length - 4);
      arr.push(`${season.join("")} ${year.join("")}`);
    }
    return arr;
  }
  handleSpace();

  return (
    <div className="aside">
      <h2 className="aside-h2">Choose a Class by Start Date</h2>
      <ul>
        <li key={studentsList.id}>
          {arr.map((cohort) => {
            return (
              <button
                className="filtered-button"
                onClick={() => {
                  handleCohort(cohort.split(" ").join(" "));
                }}
              >
                {cohort}
              </button>
            );
          })}
        </li>
      </ul>
    </div>
  );
}

export default Aside;
