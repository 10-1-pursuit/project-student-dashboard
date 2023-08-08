import studentData from "./data/data.json"
import "./index.css"
import { useState } from "react"

import StudentCard from "./componnents/StudentCard"
import CohortList from "./componnents/CohortList"







function App() {


  const [studentArray, setStudentArray] = useState(studentData)

  const studentsToRender = studentArray.map(
    (eachStudentObj) => {

      return (

        <StudentCard eachStudentObj={eachStudentObj} />

      )
    })

  return (
    <>

      <div>
        <header>
          <h1>Student Dashboard</h1>
        </header>
      </div>
      <main>
      <div className="class">
        < CohortList setStudentArray={setStudentArray} />

      </div>
      <div id="imgs">
        <h1> All Students</h1>
        {studentsToRender}
      </div>
    </main >

    </>
  );
}


export default
  App