import React from 'react';
import { useState } from 'react';
import data from './data/data.json'

console.log(data)

function App() {
  const [studentsData, setStudentsData] = useState(data);

  const calculateOnTrackStatus = (student) => {
    const hasResumeCertification = student.certifications.resume;
    const hasLinkedInCertification = student.certifications.linkedin;
    const hasGitHubCertification = student.certifications.github;
    const hasMockInterviewCertification = student.certifications.mockInterview;
    const currentCodeWarsScore = student.codewars.current.total;

    return (
      hasResumeCertification &&
      hasLinkedInCertification &&
      hasGitHubCertification &&
      hasMockInterviewCertification &&
      currentCodeWarsScore > 600
    )
  }

  return (
    <div>
      <h1>Student Dashboard</h1>
    <ul>
      {studentsData.map((student) => (
        <li key={student.id}>
          <h3>{student.names.preferredName}</h3>
          <p>Email: {student.username}</p>
          <p>Birthday: {student.dob}</p>
          <img src={student.profilePhoto} alt={student.names.preferredName} />
          <p>{calculateOnTrackStatus(student) ? "On Track" : "Off Track"} to Graduate</p>
        </li>
      ))}
    </ul>
    </div>
  );
}

export default App;
