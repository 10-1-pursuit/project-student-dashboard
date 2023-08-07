import data from "./data/data.json"
import { useState } from "react"
import StudentCard from "./Components/StudentCard.jsx"
import CohortListByName from "./Components/CohortListByName.jsx"
//console.log(data)



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

//   // Javasripttuturial.net way below
//  const uniqueCohortList = [...new Map(data.map((d)=>[d.cohort.cohortCode, d])).values()]
// //  console.log(uniqueCohortList) 
//   const cohortListForHomePage = uniqueCohortList.map(
//     (eachCohortNameForList)=>{
//       return(<div>
//         <h4>{eachCohortNameForList.cohort.cohortCode}</h4>
//       </div>)
//     }
//   )

  return (
    <div>
       <CohortListByName />
      <h1>Student Dashboard</h1>
      <h3>Total Students: {totalofAllStudents}</h3>
      {/* {cohortListForHomePage} */}
      {studentListForHomePage}
    </div>
  );
}

export default App;

