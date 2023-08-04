import React, { useState } from "react";
import studentData from "./data/data.json"
import Header from "./Components/Header.jsx";
import StudentCard from "./Components/StudentCard.jsx";

function App() {

  return (
    <div className="app">
      <>
        <Header />
      </>
      <main>
        <div className="student-list">
          <h3>Student List</h3>
          {studentData.map(student => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;