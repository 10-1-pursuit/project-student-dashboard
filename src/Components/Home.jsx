import StudentProfile from "./StudentProfile";
import data from "../data/data.json";
import { useState } from "react";
import "./Home.css";
import Header from "./Header";
import FormatCohortNames, { formatCohortCode } from "./FormatCohortNames";

const Home = () => {
  const studentsData = data;
  const [selectedCohort, setSelectedCohort] = useState("");
  const [viewMode, setViewMode] = useState("grid");

  const filteredStudents = selectedCohort
    ? studentsData.filter(
        (student) =>
          formatCohortCode(student.cohort.cohortCode) === selectedCohort
      )
    : studentsData;
    
  const handleViewModeChange = () => {
    setViewMode((prevMode) => (prevMode === "list" ? "grid" : "list"));
  };

  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="container">
        <div className="cohort-list">
          <h3>Choose a class by Start Date</h3>
          <FormatCohortNames
            studentsData={studentsData}
            setSelectedCohort={setSelectedCohort}
          />
        </div>
        <div className="student-right">
          {selectedCohort ? (
            <h2>{formatCohortCode(selectedCohort)}</h2>
          ) : (
            <h2>All Students</h2>
          )}
          <button onClick={handleViewModeChange} className="toggle-button">
            Toggle View
          </button>
          <div className="student-count">
            <p>Total Students: {filteredStudents.length}</p>
          </div>
          {viewMode === "list" ? (
            <ul className="student-list">
              {filteredStudents.map((student) => (
                <li key={student.id}>{student.names.preferredName}</li>
              ))}
            </ul>
          ) : (
            <div className="student-grid">
              {filteredStudents.map((student) => (
                <StudentProfile key={student.id} student={student} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
