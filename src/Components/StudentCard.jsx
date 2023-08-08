import React, { useState } from "react";
import OneOnOneSection from "./OneOnOneSection.jsx";
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


const StudentCard = ({ student, addNote }) => {
    const [commenter, setCommenter] = useState("")
    const [comment, setComment] = useState("")
    const [expandedState, setExpandedState] = useState({});

    const handleCommenterChange = event => setCommenter(event.target.value)
    const handleCommentChange = event => setComment(event.target.value)

    const handleSubmit = event => {
        event.preventDefault()
        if (commenter.trim() === "" || comment.trim() === "") return;
        addNote(student.id, commenter, comment)

        setCommenter("")
        setComment("")
    }

    const toggleExpanded = (event) => {
        event.preventDefault()
        setExpandedState((prevState) => ({
            ...prevState,
            [student.id]: !prevState[student.id]
        }));
    };

    const isExpanded = expandedState[student.id]
    const onTrack = isOnTrack(student)
    return (
        <div key={student.id} className={`student-card ${onTrack ? "on-track" : "off-track"}`}>
            <div>
                <img src={student.profilePhoto} alt={student.names.preferredName} />
            </div>
            <div>
                <h3>{`${student.names.preferredName} ${student.names.middleName} ${student.names.surname}`}</h3>
                <p>{student.username}</p>
                <p>{student.dob}</p>
                <p>Status: {onTrack ? "On Track" : "Off Track"}</p>
                <a href="#" onClick={event => toggleExpanded(event)}>
                    {isExpanded ? "Show Less..." : "Show More..."}
                </a>
                {isExpanded && (
                    <div className="additional-details">
                        <div className="column">
                            <h3>Codewars:</h3>
                            <p>Current: {student.codewars.current.total}</p>
                            <p>Last Week: {student.codewars.current.lastWeek}</p>
                            <p>Goal: {student.codewars.goal.total}</p>
                            <p>Percent of Goal Achieved: {((student.codewars.current.total / student.codewars.goal.total) * 100).toFixed(2)}%</p>
                        </div>
                        <div className="column">
                            <h3>Scores:</h3>
                            <p>Assignments: {(student.cohort.scores.assignments * 100).toFixed(2)}%</p>
                            <p>Projects: {(student.cohort.scores.projects * 100).toFixed(2)}%</p>
                            <p>Assessments: {(student.cohort.scores.assessments * 100).toFixed(2)}%</p>
                        </div>
                        <div className="column">
                            <h3>Certifications:</h3>
                            <p>Resume: {student.certifications.resume ? "✅" : "❌"}</p>
                            <p>LinkedIn: {student.certifications.linkedin ? "✅" : "❌"}</p>
                            <p>Mock Interview: {student.certifications.mockInterview ? "✅" : "❌"}</p>
                            <p>GitHub: {student.certifications.github ? "✅" : "❌"}</p>
                        </div>
                        <OneOnOneSection
                            student={student}
                            commenter={commenter}
                            comment={comment}
                            handleCommentChange={handleCommentChange}
                            handleSubmit={handleSubmit}
                            handleCommenterChange={handleCommenterChange}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}

export default StudentCard