import StudentProfile from "./StudentProfile";
import data from '../data/data.json';
import { useState } from "react";
import "./Home.css";
import Header from './Header';
import FormatCohortNames, { formatCohortCode } from './FormatCohortNames';

const Home = () => {
    const studentsData = data;
    const [selectedCohort, setSelectedCohort] = useState('');

    const filteredStudents = selectedCohort ? studentsData.filter((student) => formatCohortCode(student.cohort.cohortCode) === selectedCohort) : studentsData;

    console.log("Selected Cohort:", selectedCohort);
    console.log(filteredStudents);

    return (
      <div>
        <div className="header">
          <Header />
          </div>
          <div className="container">
            <div className="cohort-list">
            <h3>Choose a class by Start Date</h3>
          <FormatCohortNames studentsData={studentsData} setSelectedCohort={setSelectedCohort}/>
        </div>
        <div className="student-right">
        {selectedCohort ? (
          <h2>{formatCohortCode(selectedCohort)}</h2>
        ) : (
          <h2>All Students</h2>
        )}
        <p>Total Students: {filteredStudents.length}</p>
        <div className="student-profile-box">
        {filteredStudents.map((student) => (
          <div key={student.id} className="student-profile">
          <StudentProfile student={student} />
          </div>
        ))}
      </div>
      </div>
      </div>
</div>
    )
}

export default Home;