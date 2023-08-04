import React, { useState } from "react";
import "./StudentCard.css"

const isOnTrack = (student) => {
    const hasResumeCert = student.certifications.resume
    const hasLinkedInCert = student.certifications.linkedin
    const hasGithubCert = student.certifications.github
    const hasMockInterviewCert = student.certifications.mockInterview
    const codeWarsScore = student.codewars.current.total
    return (
        hasResumeCert && hasLinkedInCert && hasGithubCert && hasMockInterviewCert && codeWarsScore > 600
    )
}


const StudentCard = ({ student }) => {
    const [showDetails, setShowDetails] = useState(false)
    const toggleDetails = (event) => {
        event.preventDefault()
        setShowDetails(!showDetails)
    }
    const onTrack = isOnTrack(student)
    return (
        <div key={student.id} className={`student-card ${onTrack ? "on-track" : "off-track"}`}>
            <div>
                <img src={student.profilePhoto} alt={student.names.preferredName} />
            </div>
            <div>
                <h2>{`${student.names.preferredName} ${student.names.middleName} ${student.names.surname}`}</h2>
                <p>{student.username}</p>
                <p>{student.dob}</p>
                <p>Status: {onTrack ? "On Track" : "Off Track"}</p>
                <a href="#" onClick={event => toggleDetails(event)}>
                    {showDetails ? "Show Less..." : "Show More..."}
                </a>
                {showDetails && (
                    <div className="additional-details">
                        <div className="column">
                            <h3>Codewars</h3>
                            <p>Current: {student.codewars.current.total}</p>
                            <p>Last Week: {student.codewars.current.lastWeek}</p>
                            <p>Goal: {student.codewars.goal.total}</p>
                            <p>Percent of Goal Achieved: {((student.codewars.current.total / student.codewars.goal.total) * 100).toFixed(2)}%</p>
                        </div>
                        <div className="column">
                            <h3>Scores</h3>
                            <p>Assignments: {(student.cohort.scores.assignments * 100).toFixed(2)}%</p>
                            <p>Projects: {(student.cohort.scores.projects * 100).toFixed(2)}%</p>
                            <p>Assessments: {(student.cohort.scores.assessments * 100).toFixed(2)}%</p>
                        </div>
                        <div className="column">
                            <h3>Certifications</h3>
                            <p>Resume: {student.certifications.resume ? "✅" : "❌"}</p>
                            <p>LinkedIn: {student.certifications.linkedin ? "✅" : "❌"}</p>
                            <p>Mock Interview: {student.certifications.mockInterview ? "✅" : "❌"}</p>
                            <p>GitHub: {student.certifications.github ? "✅" : "❌"}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default StudentCard