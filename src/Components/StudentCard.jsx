import { useState} from "react";


const StudentCard =({eachStudentToListObjToRender})=>{
    const[seeStudentCardDetails, setSeeStudentCardDetails]=useState(false)
    const[textForSeeMoreOrLessDetails, setTextForSeeMoreOrLessDetails] = useState("See More...")
    const[textForOnOrOffTrack ,setTextForOnOrOffTrack] = useState("")
    const[displayStudentCardDetails, setDisplayStudentCardDetails] = useState("")

    function handleSeeMoreOrLessDetailsToggle(){
        setSeeStudentCardDetails(!seeStudentCardDetails)
          if(seeStudentCardDetails === false){
            setTextForSeeMoreOrLessDetails("See More...")
          } else{
            setTextForSeeMoreOrLessDetails("See Less...")
          }}
    
    function onTrackStatus(){
        if(eachStudentToListObjToRender.certifications.resume === true &&
            eachStudentToListObjToRender.certifications.linkedin === true &&
            eachStudentToListObjToRender.certifications.github === true &&
            eachStudentToListObjToRender.certifications.mockInterview === true &&
            eachStudentToListObjToRender.codewars.current.total > 600){
            setTextForOnOrOffTrack("On Track")
        } else {
            setTextForOnOrOffTrack("Off Track")
        }}

    function showStudentCardDetails(){
        setDisplayStudentCardDetails(
            <div>
                <h3>Codewars</h3>
                    <ul>{eachStudentToListObjToRender.codewars.current.total}</ul>
                    <ul>{eachStudentToListObjToRender}</ul>
                    <ul></ul>
                    <ul></ul>
                <h3></h3>
                    <ul></ul>
                    <ul></ul>
                    <ul></ul>
                <h3></h3>
                    <ul></ul>
                    <ul></ul>
                    <ul></ul>
                    <ul></ul>
            </div>

        )
    }
    
    return(
        <div >
        <img src={eachStudentToListObjToRender.profilePhoto} alt=""/>
        <h3>{eachStudentToListObjToRender.names.preferredName} {eachStudentToListObjToRender.names.middleName.charAt(0)}. {eachStudentToListObjToRender.names.surname}</h3>
        <h4>{eachStudentToListObjToRender.username}</h4>
        <h4>{eachStudentToListObjToRender.dob}</h4>
        <h4>{textForOnOrOffTrack}</h4>
        <h3>{displayStudentCardDetails}</h3>
        <a onClick={(synthEvent)=>{handleSeeMoreOrLessDetailsToggle(), onTrackStatus(), showStudentCardDetails()}} >{textForSeeMoreOrLessDetails}</a>
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