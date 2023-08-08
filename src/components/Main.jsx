import React from "react";
import FilteredStudents from "./FilteredStudents";

function Main({
  studentsList,
  studentsByCode,
  selectedCohort,
  selectedStudentsList,
}) {
  return (
    <div className="main">
      <h2>{selectedCohort ? selectedCohort : "All Students"}</h2>
      <p>
        Total Students:{" "}
        <span className="total">
          {!selectedCohort ? studentsList.length : selectedStudentsList.length}
        </span>
      </p>
      <FilteredStudents
        studentsByCode={studentsByCode}
        selectedCohort={selectedCohort}
        selectedStudentsList={selectedStudentsList}
        studentsList={studentsList}
      />
    </div>
  );
}
export default Main;
