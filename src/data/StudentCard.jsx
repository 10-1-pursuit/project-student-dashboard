import React, { useState } from 'react';
import studentsData from './data.json';

const StudentCard = ({ selectedCohort }) => {
  const filteredStudents = selectedCohort
    ? studentsData.filter(student => student.cohort.cohortCode === selectedCohort)
    : studentsData;

  return (
    <div className="student-card-container">
      {filteredStudents.map((student) => (
        <div key={student.id} className="student-box">
          <div className="student-info">
            <img src={student.profilePhoto} alt="Profile" />
            <div className="student-text">
              <h2>{student.names.preferredName} {student.names.surname}</h2>
              <p>{student.username}</p>
              <p>Birthday: {student.dob}</p>
              <p>Cohort: {student.cohort.cohortCode}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StudentCard;
