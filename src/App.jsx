import data from "./data/data.json"
import { useState } from "react"
import StudentCard from "./Components/StudentCard.jsx"
import "./App.css"
import CohortListByNameCard from "./Components/CohortListByNameCard.jsx"


function App() {
  const totalofAllStudents = data.length

  const studentListForHomePage = data.map(
    (eachStudentToListObj)=>{
      return(
        <StudentCard 
        key={eachStudentToListObj.id}
        eachStudentToListObjToRender={eachStudentToListObj}/>
      )
    }
  )

  return (
    <div className="container">
      <div className="child-one"><h1 id="student-dashboard">Student Dashboard</h1></div>
    <div className="child-two">
      <h2 > Choose a Class by Start Date</h2>
      <CohortListByNameCard/>

    </div>
    <div className="child-three">
      <h2 id="total-students">Total Students: {totalofAllStudents}</h2>
      <h3 >{studentListForHomePage}</h3>
      </div>
    </div>
  )
}


export default App;

