import data from "./data/data.json"
import { useState } from "react"
import StudentCard from "./Components/StudentCard.jsx"
// import CohortListByName from "./Components/CohortListByName.jsx"
//console.log(data)



function App() {
  const totalofAllStudents = data.length
  const[winter2025, setWinter2025]=useState("Winter 2025")

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
      function cohortListForWinter2025(){
        if(eachCohortToListObj.cohort.cohortCode==="Winter2025"){
          setWinter2025(
              <div>
    <h3></h3>
    <img src={eachCohortToListObj.profilePhoto} alt=""/>
    <h3>{eachCohortToListObj.names.preferredName} {eachCohortToListObj.names.middleName.charAt(0)}. {eachCohortToListObj.names.surname}</h3>
    <h4>{eachCohortToListObj.username}</h4>
    <h4>{eachCohortToListObj.dob}</h4>
    <h4>{eachCohortToListObj.cohort.cohortStartDate}</h4>
  </div>
  
          )
        }
      }

      return(
        <div>
          <h3>{winter2025}</h3>
        </div>
      )
    }
  )

  return (
    <div>
      <h1>Student Dashboard</h1>
      <h3>Total Students: {totalofAllStudents}</h3>
      {/* <CohortListByName /> */}
      {cohortListForHomePage}
      {studentListForHomePage}
    </div>
  );
}

export default App;

// return(
//   <div>
//   <h3></h3>
//   <img src={eachCohortToListObj.profilePhoto} alt=""/>
//   <h3>{eachCohortToListObj.names.preferredName} {eachCohortToListObj.names.middleName.charAt(0)}. {eachCohortToListObj.names.surname}</h3>
//   <h4>{eachCohortToListObj.username}</h4>
//   <h4>{eachCohortToListObj.dob}</h4>
//   <h4>{eachCohortToListObj.cohort.cohortStartDate}</h4>
// </div>
// )

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

// {
//   "id": "D8-hEWB",
//   "names": {
//     "preferredName": "Israel",
//     "middleName": "Benjamin",
//     "surname": "Rodriguez"
//   },
//   "username": "israel.rodriguez@pursuit.org",
//   "dob": "2/3/1979",
//   "profilePhoto": "https://xsgames.co/randomusers/avatar.php?g=male&minimum_age=38&maximum_age=48",
//   "codewars": {
//     "current": { "total": 1804, "lastWeek": 144 },
//     "goal": { "total": 850, "lastWeek": 75 }
//   },
//   "certifications": {
//     "resume": false,
//     "linkedin": false,
//     "github": false,
//     "mockInterview": false
//   },
//   "notes": [
//     {
//       "commenter": "Alan R.",
//       "comment": "Israel is a pleasure to work with!"
//     }
//   ],
//   "cohort": {
//     "cohortCode": "Winter2025",
//     "cohortStartDate": "12/1/25",
//     "scores": { "assignments": 0.71, "projects": 0.7, "assessments": 0.66 }
//   }