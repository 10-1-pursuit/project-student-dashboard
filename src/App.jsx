import data from "./data/data.json"
import { useState } from "react"
import StudentCard from "./Components/StudentCard.jsx"
import "./App.css"
// import CohortListByName from "./Components/CohortListByName.jsx"
//console.log(data)



function App() {
  const totalofAllStudents = data.length
  
  const[cohortFall2025, setCohortFall2025]=useState("Fall 2025")
  const[cohortWinter2025, setCohortWinter2025]=useState("Winter 2025")
  const[cohortSpring2025, setCohortSpring2025]=useState("Spring 2025")
  const[cohortSummer2025, setCohortSummer2025]=useState("Summer 2025")
  const[cohortFall2026, setCohortFall2026]=useState("Fall 2026")
  const[cohortWinter2026, setCohortWinter2026]=useState("Winter 2026")
  const[cohortSpring2026, setCohortSpring2026]=useState("Spring 2026")
  const[cohortSummer2026, setCohortSummer2026]=useState("Summer 2026")


  const studentListForHomePage = data.map(
    (eachStudentToListObj)=>{
      return(
        <StudentCard 
        key={eachStudentToListObj.id}
        eachStudentToListObjToRender={eachStudentToListObj}/>
      )
    }
  )
  
  const cohortListForHomePage = data.map(
    
    (eachCohortToListObj)=>{
      // console.log(eachCohortToListObj.cohort.cohortCode)
      function handleCohortFall2025(){
        if(eachCohortToListObj.cohort.cohortCode==="Fall2025"){
          setCohortFall2025(
            <div>
              <img src={eachCohortToListObj.profilePhoto} alt={eachCohortToListObj.names.preferredName}/>
              <h3>{eachCohortToListObj.names.preferredName} {eachCohortToListObj.names.middleName.charAt(0)}. {eachCohortToListObj.names.surname}</h3>
              <h4>{eachCohortToListObj.username}</h4>
              <h4>Birthday: {eachCohortToListObj.dob}</h4>
              <h4>Start Date: {eachCohortToListObj.cohort.cohortStartDate}</h4>
            </div>
          )
        }
      }
      
      return(
        // <CohortListByName eachCohortToListObjToRender={eachCohortToListObj}/>
        <div>
        
      </div>
        
      )
    }
  )

  return (
    <div className="container">
      <div className="child-one"><h1 id="student-dashboard">Student Dashboard</h1></div>
    <div className="child-two">
      <h2 > Choose a Class by Start Date</h2>
      <h2 > {cohortListForHomePage}</h2>
      <h2 onClick={(synthEvent)=>{console.log("it clicks 1")}}>{cohortFall2025} </h2>
      <h2 onClick={(synthEvent)=>{console.log("it clicks 2")}}>{cohortWinter2025}</h2>
      <h2 onClick={(synthEvent)=>{console.log("it clicks 3")}}>{cohortSpring2025}</h2>
      <h2 onClick={(synthEvent)=>{console.log("it clicks 4")}}>{cohortSummer2025}</h2>
      <h2 onClick={(synthEvent)=>{console.log("it clicks 5")}}>{cohortFall2026}</h2>
      <h2 onClick={(synthEvent)=>{console.log("it clicks 6")}}>{cohortWinter2026}</h2>
      <h2 onClick={(synthEvent)=>{console.log("it clicks 7")}}>{cohortSpring2026}</h2>
      <h2 onClick={(synthEvent)=>{console.log("it clicks 8")}}>{cohortSummer2026}</h2>
    </div>
    <div className="child-three">
      <h2 id="total-students">Total Students: {totalofAllStudents}</h2>
      <h3 >{studentListForHomePage}</h3>
      </div>
    </div>
  );  
}

export default App;

