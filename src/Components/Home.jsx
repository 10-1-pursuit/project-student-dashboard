import StudentProfile from "./StudentProfile";
import data from '../data/data.json';
import FormatCohortNames from './FormatCohortNames'

const Home = () => {
    const studentsData = data;

    return (
        <div>
          <FormatCohortNames studentsData={studentsData} />
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

export default Home;