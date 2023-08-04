import StudentProfile from "./StudentProfile";
import data from '../data/data.json';
import { useState } from "react";

const StudentDashboard = () => {
    const studentsData = data;

    return (
        <div>
        <h1>Student Dashboard</h1>
        <p>Total Students: {studentsData.length}</p>
      <ul>
        {studentsData.map((student) => (
          <StudentProfile key={student.id} student={student} />
        ))}
      </ul>
      </div>
    )
}

export default StudentDashboard;