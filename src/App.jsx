import React from 'react';
import { useState } from 'react';
import data from './data/data.json'

console.log(data)

function App() {
  const [studentsData, setStudentsData] = useState(data);

  return (
    <div>
      <h1>Student Dashboard</h1>
    <ul>
      {studentsData.map((student) => (
        <li key={student.id}>
          <h3>{student.names.preferredName}</h3>
          <p>Email: {student.username}</p>
          <p>Birthday: {student.dob}</p>
          <img src={student.profilePhoto} alt={student.names.prefferedName} />
        </li>
      ))}
    </ul>
    </div>
  );
}

export default App;
