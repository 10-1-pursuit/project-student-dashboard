import React from "react";

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
            </div>
        </div>
    )
}

export default StudentCard