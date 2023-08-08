import React, { useState } from "react";
import studentData from "./data/data.json"
import Header from "./Components/Header.jsx";
import StudentCard from "./Components/StudentCard.jsx";
import CohortList from "./Components/CohortLists.jsx";
import "./App.css"

function App() {
  const [updatedStudentData, setUpdatedStudentData] = useState(studentData)
  const [selectedCohort, setSelectedCohort] = useState(null)
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => { setDarkMode(prevMode => !prevMode) }

  const handleCohortSelection = cohort => {
    if (cohort === null) {
      setSelectedCohort(null);
    } else {
      const cohortCode = cohort.replace(" ", "");
      setSelectedCohort(cohortCode);
    }
  }
  const displayedStudents = selectedCohort ? updatedStudentData.filter((student) => student.cohort.cohortCode === selectedCohort)
    : updatedStudentData

  const uniqueCohorts = []
  studentData.forEach(student => {
    if (!uniqueCohorts.includes(student.cohort.cohortCode)) {
      uniqueCohorts.push(student.cohort.cohortCode)
    }
  })

  const handleAddNote = (studentId, commenter, comment) => {
    const updatedData = updatedStudentData.map((student) => {
      if (student.id === studentId) {
        return {
          ...student,
          notes: [...(student.notes || []), { commenter, comment }]
        }
      }
      return student
    })
    setUpdatedStudentData(updatedData)
  }

  return (
    <div className={`app ${darkMode ? "dark-mode" : ""}`}>
      <>
        <Header />
      </>
      <button onClick={toggleDarkMode} className="glow-on-hover">Dark Mode</button>
      <main>
        <div className="cohort-list">
          <CohortList cohorts={uniqueCohorts} selectCohort={handleCohortSelection} />
        </div>
        <div className="student-list">
          <h2>{selectedCohort ? selectedCohort.slice(0, -4) + " " + selectedCohort.slice(-4) : "All Students"}</h2>
          <p>Total Students: {displayedStudents.length}</p>
          {displayedStudents.map(student => (
            <StudentCard key={student.id} student={student} addNote={handleAddNote} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;