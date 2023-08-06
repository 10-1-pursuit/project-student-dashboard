import StudentProfile from "./StudentProfile";
import data from '../data/data.json';
import { useState } from "react";
import FormatCohortNames, { formatCohortCode } from './FormatCohortNames'

const Home = () => {
    const studentsData = data;
    const [selectedCohort, setSelectedCohort] = useState('');

    const filteredStudents = selectedCohort ? studentsData.filter((student) => formatCohortCode(student.cohort.cohortCode) === selectedCohort) : studentsData;

    console.log("Selected Cohort:", selectedCohort);
    console.log(filteredStudents);

    return (
        <div>
          <FormatCohortNames studentsData={studentsData} setSelectedCohort={setSelectedCohort}/>
        <h1>Student Dashboard</h1>
        <p>Total Students: {filteredStudents.length}</p>
      <ul>
        {filteredStudents.map((student) => (
          <StudentProfile key={student.id} student={student} />
        ))}
      </ul>
      </div>
    )
}

export default Home;