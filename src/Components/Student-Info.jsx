import data from "../data/data.json";
import { useState } from "react";

const ViewInfo = () => {
    return (
        <>
            <h2 className="view-info view-title" >All Students</h2>
            <p className="view-info student-count">Total Students: <span className="green-text"> {data.length}</span></p>
        </>
    )
};

const StudentCards = () => {

    const [studentCohort, setStudentCohort] = useState(data);

    const studentstoRender =
        studentCohort.map((studentObj) => {
            return (
                <>
                    < section className="card-container" >
                        <section className="student-top-info">
                        <img className="student-img" src={studentObj.profilePhoto} alt="Student Profile Photo" />
                        <div className="badge-info-container">
                            <h3 className="badge-info"> {studentObj.names.preferredName + " " + studentObj.names.middleName.at(0) + ". " + studentObj.names.surname}</h3>
                            <p className="badge-info">{studentObj.username}</p>
                            <p className="badge-info"><span className="green-text">Birthday:</span> {studentObj.dob}</p>
                            <br />
                            <p className="badge-expander">Show More...</p>
                        </div>
                    </section >
                    <section className="student-details">
                        <div className="codewars-container">
                            <p><span className="green-text">Current Total:</span> {studentObj.codewars.current.total}</p>
                            <p><span className="green-text">Last Week:</span> {studentObj.codewars.current.lastWeek}</p>
                            <p><span className="green-text">Goal:</span> {studentObj.codewars.goal.total}</p>
                            <p><span className="green-text">Percent of Goal Achieved:</span> {studentObj.codewars.percentOfGoalAchieved}</p>
                        </div>
                        <div className="scores-container">
                            <p><span className="green-text">Assignments:</span> {studentObj.cohort.scores.assignments * 100}</p>
                            <p><span className="green-text">Projects:</span> {studentObj.cohort.scores.projects * 100}</p>
                            <p><span className="green-text">Assessments:</span> {studentObj.cohort.scores.assessments * 100}</p>
                        </div>
                        <div className="certifications-container">
                            <p><span className="green-text">Resume:</span>{studentObj.certifications.resume ? "✅" : "❌"}</p>
                            <p><span className="green-text">LinkedIn</span>:{studentObj.certifications.linkedin ? "✅" : "❌"}</p>
                            <p><span className="green-text">Mock Interview:</span>{studentObj.certifications.mockInterview ? "✅" : "❌"}</p>
                            <p><span className="green-text">GitHub:</span>{studentObj.certifications.github ? "✅" : "❌"}</p>
                        </div>
                        </section>
                    </section >
                </>

            )
        });


    return (
        <>
            {studentstoRender}
        </>
    )
};


export { StudentCards, ViewInfo };