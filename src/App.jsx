import data from "./data/data.json"

//console.log(data)

function App() {
  const totalofAllStudents = data.length

  const studentListForHomePage = data.map(
    (eachStudentToListObj)=>{
      return(<div key={eachStudentToListObj.id}>
        <img src={eachStudentToListObj.profilePhoto} alt=""/>
        <h3>{eachStudentToListObj.names.preferredName} {eachStudentToListObj.names.middleName.charAt(0)}. {eachStudentToListObj.names.surname}</h3>
        <h4>{eachStudentToListObj.username}</h4>
        <h4>{eachStudentToListObj.dob}</h4>
        <a>See More...</a>
      </div>)
    }
  )

  // Javasripttuturial.net way below
 const uniqueCohortList = [...new Map(data.map((d)=>[d.cohort.cohortCode, d])).values()]
//  console.log(uniqueCohortList) 
  const cohortListForHomePage = uniqueCohortList.map(
    (eachCohortNameForList)=>{
      return(<div>
        <h4>{eachCohortNameForList.cohort.cohortCode}</h4>
      </div>)
    }
  )

  return (
    <div>
      <h1>Student Dashboard</h1>
      <h3>Total Students: {totalofAllStudents}</h3>
      {cohortListForHomePage}
      {studentListForHomePage}
    </div>
  );
}

export default App;


/*
  {
    "id": "D8-hEWB",
    "names": {
      "preferredName": "Israel",
      "middleName": "Benjamin",
      "surname": "Rodriguez"
    },
    "username": "israel.rodriguez@pursuit.org",
    "dob": "2/3/1979",
    "profilePhoto": "https://xsgames.co/randomusers/avatar.php?g=male&minimum_age=38&maximum_age=48",
    "codewars": {
      "current": { "total": 1804, "lastWeek": 144 },
      "goal": { "total": 850, "lastWeek": 75 }
    },
    "certifications": {
      "resume": false,
      "linkedin": false,
      "github": false,
      "mockInterview": false
    },
    "notes": [
      {
        "commenter": "Alan R.",
        "comment": "Israel is a pleasure to work with!"
      }
    ],
    "cohort": {
      "cohortCode": "Winter2025",
      "cohortStartDate": "12/1/25",
      "scores": { "assignments": 0.71, "projects": 0.7, "assessments": 0.66 }
    }
*/