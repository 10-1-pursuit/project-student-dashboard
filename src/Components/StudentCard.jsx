import { useState} from "react";


const StudentCard =({eachStudentToListObjToRender})=>{
    const[seeStudentCardDetails, setSeeStudentCardDetails]=useState(false)
    const[textForSeeMoreOrLessDetails, setTextForSeeMoreOrLessDetails] = useState("See More...")
    function handleSeeMoreOrLessDetailsToggle(){
        setSeeStudentCardDetails(!seeStudentCardDetails)
          if(seeStudentCardDetails === false){
            setTextForSeeMoreOrLessDetails("See More...")
          } else{
            setTextForSeeMoreOrLessDetails("See Less...")
          }}

    return(
        <div >
        <img src={eachStudentToListObjToRender.profilePhoto} alt=""/>
        <h3>{eachStudentToListObjToRender.names.preferredName} {eachStudentToListObjToRender.names.middleName.charAt(0)}. {eachStudentToListObjToRender.names.surname}</h3>
        <h4>{eachStudentToListObjToRender.username}</h4>
        <h4>{eachStudentToListObjToRender.dob}</h4>
        <a onClick={(synthEvent)=>{handleSeeMoreOrLessDetailsToggle()}} >{textForSeeMoreOrLessDetails}</a>
      </div>
    )
}


export default StudentCard



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