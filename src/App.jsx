import React, { useState } from "react";
import studentData from "./data/data.json"
import Header from "./Components/Header.jsx";
import StudentCard from "./Components/StudentCard.jsx";
import CohortList from "./Components/CoHortList.jsx";

function App() {
  const totalStudents = studentData.length
  const [updatedStudentData, setUpdatedStudentData] = useState(studentData)

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
    <div className="app">
      <>
        <Header />
      </>
      <main>
        <div className="cohort-list">
          <CohortList cohorts={uniqueCohorts}/>
        </div>
        <div className="student-list">
          <h2>All Students</h2>
          <p>Total Students: {totalStudents}</p>
          {studentData.map(student => (
            <StudentCard key={student.id} student={student} addNote={handleAddNote} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;