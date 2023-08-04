import React from 'react';
import studentData from './data.json'


const StudentCard = () => {
  // Now you can use the studentData array in your component
  return (
    <div>
      {studentData.map((student) => (
        <div key={student.id}>
          <h2><b1>{student.names.preferredName} {student.names.surname}</b1></h2>
          <p>Birthday: {student.dob}</p>
          <p>{student.username}</p>
          <img src={student.profilePhoto} alt="Profile" />
        
        </div>
      ))}
    </div>
  );
};

export default StudentCard;
