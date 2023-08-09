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
    const[oneOnOneSection, setOneOnOneSection] = useState("")
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
                    <ul>Percentage Goal Achieved: {(eachStudentToListObjToRender.codewars.current.total / eachStudentToListObjToRender.codewars.goal.total).toFixed(2)*100}% </ul>
                <h3>Scores:</h3>
                    <ul>Assignments: {eachStudentToListObjToRender.cohort.scores.assignments * 100}%</ul>
                    <ul>Projects: {eachStudentToListObjToRender.cohort.scores.projects * 100}%</ul>
                    <ul>Assessments: {eachStudentToListObjToRender.cohort.scores.assessments * 100}%</ul>
                <h3>Certifications: </h3>
                    <ul>Resume: {hasResume}</ul>
                    <ul>LinkedIn: {hasLinkedIn}</ul>
                    <ul>GitHub: {hasGitHub}</ul>
                    <ul>Mock Interview: {hasMockInterview}</ul>
                <h3>1-on-1 Notes Section</h3>
                    <form onSubmit={(synthEvent)=>{synthEvent.preventDefault()
                      eachStudentToListObjToRender.setNewCommenterNameFromForm("")
                      eachStudentToListObjToRender.setNewCommentFromForm("")}}>
                      <label> 
                        Commenter Name
                        <input type="text" value={eachStudentToListObjToRender.newCommenterNameFromForm} 
                          onChange={(synthEvent)=>{eachStudentToListObjToRender.setNewCommenterNameFromForm(synthEvent.target.value)}}/>
                      </label>
                        <br/>
                        <br/>
                      <label> 
                        Comment
                        <input type="text" value={eachStudentToListObjToRender.newCommentFromForm}
                          onChange={(synthEvent)=>{eachStudentToListObjToRender.setNewCommentFromForm(synthEvent.target.value)}}/>
                      </label>
                      <br/>
                      <br/>
                      <input type="submit" value="Add Note"/>
                      <h5>Alan R. says, {eachStudentToListObjToRender.names.preferredName} is a pleasure to work with</h5>
                    </form>
            </div>
        ))
        
        }
    
    function handleOnTrackStatus(){
        if(eachStudentToListObjToRender.certifications.resume === true &&
            eachStudentToListObjToRender.certifications.linkedin === true &&
            eachStudentToListObjToRender.certifications.github === true &&
            eachStudentToListObjToRender.certifications.mockInterview === true &&
            eachStudentToListObjToRender.codewars.current.total > 600){
            setTextForOnOrOffTrack("On Track to Graduate")
        } else {
            setTextForOnOrOffTrack("Off Track to Graduate")
        }}


    return(
        <div className="student-details">
        <img src={eachStudentToListObjToRender.profilePhoto} alt={eachStudentToListObjToRender.names.preferredName}/>
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

