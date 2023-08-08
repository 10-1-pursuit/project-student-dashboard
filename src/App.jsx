import { useState } from "react";
import data from "./data/data.json";
import Header from "./components/Header"
import Aside from "./components/Aside.jsx";
import Main from "./components/Main.jsx";
import "./components/kpi.css";
import "./components/filteredStudents.css";
import "./components/header.css";
import "./components/form.css";

function App() {
  const [studentsList, setStudentsList] = useState(data);
  const [studentsByCode, setStudentsByCode] = useState(handleStuByCohortCode());

  const [selectedCohort, setSelectedCohort] = useState("");
  const [selectedStudentsList, setSelectedStudentsList] = useState([]);

  function handleStuByCohortCode() {
    let stuByCohort = {};

    for (let i = 0; i < studentsList.length; i++) {
      if (!stuByCohort[studentsList[i].cohort.cohortCode]) {
        stuByCohort[studentsList[i].cohort.cohortCode] = [studentsList[i]];
      } else {
        stuByCohort[studentsList[i].cohort.cohortCode].push(studentsList[i]);
      }
    }
    return stuByCohort;
  }
  let cohortCodes = Object.keys(studentsByCode);

  return (
    <div>
      <Header studentsList={studentsList} />
      <div className="container">
        <Aside
          studentsList={studentsList}
          cohortCodes={cohortCodes}
          setSelectedCohort={setSelectedCohort}
          studentsByCode={studentsByCode}
          setSelectedStudentsList={setSelectedStudentsList}
        />
        <Main
          studentsList={studentsList}
          studentsByCode={studentsByCode}
          selectedCohort={selectedCohort}
          selectedStudentsList={selectedStudentsList}
        />
      </div>
    </div>
  );
}
export default App;

