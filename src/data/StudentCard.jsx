import React, { useState } from 'react';
import studentsData from './data.json';

const StudentCard = ({ selectedCohort }) => {
  const filteredStudents = selectedCohort
    ? studentsData.filter(student => student.cohort.cohortCode === selectedCohort)
    : studentsData;

  const [expandedStudentId, setExpandedStudentId] = useState(null);

  const toggleDetails = (studentId) => {
    if (expandedStudentId === studentId) {
      setExpandedStudentId(null);
    } else {
      setExpandedStudentId(studentId);
    }
  };

  return (
    <div className="student-card-container">
      {filteredStudents.map((student) => (
        <div key={student.id} className={`student-box ${student.onTrackToGraduate ? 'on-track' : ''}`}>
          <div className="student-info">
            <img src={student.profilePhoto} alt="Profile" />
            <div className="student-text">
              <h2>{student.names.preferredName} {student.names.surname}</h2>
              <p>{student.username}</p>
              <p onClick={() => toggleDetails(student.id)}>
                Birthday: {student.dob}
                <span className="show-more">
                  {expandedStudentId === student.id ? 'Show less' : 'Show more'}
                </span>
              </p>
              {expandedStudentId === student.id && (
                <div className="student-details">
                  <div className="column-codewar">
                    <h3>CodeWar</h3>
                    <p>Current Total: {student.codewars.current.total}</p>
                    <p>Last Week: {student.codewars.current.lastWeek}</p>
                    <p>Goal: {student.codewars.goal.total}</p>
                    <p>Percent of Goal Achieved: {student.codewars.goal.lastWeek}</p>
                    </div>
                    <div className="column-scores">
                      <h3>Scores</h3>
                  <p>Assignments: {student.cohort.scores.assignments}</p>
                    <p>Projects: {student.cohort.scores.projects}</p>
                    <p>Assessments: {student.cohort.scores.assessments}</p>
                    </div>
                    <h3>Certifications</h3>
                   
                    <p>Resume: {student.certifications.resume ? 'Yes' : 'No'}</p>
                    <p>LinkedIn: {student.certifications.linkedin ? 'Yes' : 'No'}</p>
                    <p>Github: {student.certifications.github ? 'Yes' : 'No'}</p>
                    <p>Mock Interview: {student.certifications.mockInterview ? 'Yes' : 'No'}</p>
                  </div>
             
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StudentCard;
