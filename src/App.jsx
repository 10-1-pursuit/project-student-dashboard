import React, { useState } from "react";
import studentData from "./data/data.json"
import Header from "./Components/Header.jsx";

function App() {

  return (
    <div className="app">
      <>
        <Header />
      </>
      <main>
        <div className="student-list">
          <h3>Student List</h3>
          {studentData.map(student => {
            return (
              <div key={student.id} className="student-card">
                <div>
                  <img src={student.profilePhoto} alt={student.names.preferredName} />
                </div>
                <div>
                  <h2>{`${student.names.preferredName} ${student.names.middleName} ${student.names.surname}`}</h2>
                  <p>{student.username}</p>
                  <p>{student.dob}</p>
                </div>
              </div>
            )
          })}
        </div>
      </main>
    </div>
  );
}

export default App;