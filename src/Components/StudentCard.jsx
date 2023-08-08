import { useState} from "react";


const StudentCard =({eachStudentToListObjToRender})=>{
    const[seeStudentCardDetails, setSeeStudentCardDetails]=useState(false)
    const[textForSeeMoreOrLessDetails, setTextForSeeMoreOrLessDetails] = useState("See More...")
    const[textForOnOrOffTrack ,setTextForOnOrOffTrack] = useState("")
    const[displayStudentCardDetails, setDisplayStudentCardDetails] = useState("")
    const[hasResume, setHasResume]=useState("")
    const[hasLinkedIn, setHasLinkedIn] = useState("")
    const[hasGitHub, setHasGitHub] = useState("")
    const[hasMockInterview, setHasMockInterview] = useState("")

    function handleSeeMoreOrLessDetailsToggle(){

        setSeeStudentCardDetails(!seeStudentCardDetails)
        if(seeStudentCardDetails === false){
          setTextForSeeMoreOrLessDetails("See More...")
        } else{
          setTextForSeeMoreOrLessDetails("See Less...")
        }

        if(eachStudentToListObjToRender.certifications.resume === true){
            setHasResume("✅")
        } else{setHasResume("❌")}
        if(eachStudentToListObjToRender.certifications.linkedin === true){
            setHasGitHub("✅")
        } else{setHasGitHub("❌")}
        if(eachStudentToListObjToRender.certifications.github === true){
            setHasLinkedIn("✅")
        } else{setHasLinkedIn("❌")}
        if(eachStudentToListObjToRender.certifications.mockInterview === true){
            setHasMockInterview("✅")
        } else{setHasMockInterview("❌")}

        return(
        setDisplayStudentCardDetails(
            <div>
                <h3>Codewars:</h3>
                    <ul>Current Total: {eachStudentToListObjToRender.codewars.current.total}</ul>
                    <ul>Last Week: {eachStudentToListObjToRender.codewars.current.lastWeek}</ul>
                    <ul>Goal: {eachStudentToListObjToRender.codewars.goal.total}</ul>
                    <ul>Percentage Goal Achieved: </ul>
                <h3>Scores:</h3>
                    <ul>Assignments: {eachStudentToListObjToRender.cohort.scores.assignments * 100}%</ul>
                    <ul>Projects: {eachStudentToListObjToRender.cohort.scores.projects * 100}%</ul>
                    <ul>Assessments: {eachStudentToListObjToRender.cohort.scores.assessments * 100}%</ul>
                <h3>Certifications: </h3>
                    <ul>Resume: {hasResume}</ul>
                    <ul>LinkedIn: {hasLinkedIn}</ul>
                    <ul>GitHub: {hasGitHub}</ul>
                    <ul>Mock Interview: {hasMockInterview}</ul>
            </div>
        ))
        
        }
    
    function handleOnTrackStatus(){
        if(eachStudentToListObjToRender.certifications.resume === true &&
            eachStudentToListObjToRender.certifications.linkedin === true &&
            eachStudentToListObjToRender.certifications.github === true &&
            eachStudentToListObjToRender.certifications.mockInterview === true &&
            eachStudentToListObjToRender.codewars.current.total > 600){
            setTextForOnOrOffTrack("On Track")
        } else {
            setTextForOnOrOffTrack("Off Track")
        }}
        
    return(
        <div >
        <img src={eachStudentToListObjToRender.profilePhoto} alt=""/>
        <h3>{eachStudentToListObjToRender.names.preferredName} {eachStudentToListObjToRender.names.middleName.charAt(0)}. {eachStudentToListObjToRender.names.surname}</h3>
        <h4>{eachStudentToListObjToRender.username}</h4>
        <h4>Birthday: {eachStudentToListObjToRender.dob}</h4>
        <h4>{textForOnOrOffTrack}</h4>
        <h5>{displayStudentCardDetails}</h5>
        <a onClick={(synthEvent)=>{handleSeeMoreOrLessDetailsToggle(), handleOnTrackStatus()}} >{textForSeeMoreOrLessDetails}</a>
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