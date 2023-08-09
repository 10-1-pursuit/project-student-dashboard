import data from "../data/data.json";

const ViewInfo = () => {
    return (
        <>
            <h2 className="view-info view-title" >All Students</h2>
            <p className="view-info student-count">Total Students: <span className="green-text"> {data.length}</span></p>
        </>
    )
};

export default ViewInfo;

function StudentCards() {

    const allStudentObj =
        data.map((studentObj) => {
            return {
                profilePhoto: studentObj.profilePhoto,
                preferredName: studentObj.names.preferredName,
                middleName: studentObj.names.middleName,
                surname: studentObj.names.surname,
                username: studentObj.username,
                dob: studentObj.dob,
                currentTotal: studentObj.codewars.current.total,
                lastWeek: studentObj.codewars.current.lastWeek,
                goal: studentObj.codewars.goal.total,
                percentOfGoalAchieved: studentObj.codewars.percentOfGoalAchieved,
                assignments: studentObj.cohort.scores.assignments * 100,
                projects: studentObj.cohort.scores.projects * 100,
                assessments: studentObj.cohort.scores.assessments * 100,
                resume: studentObj.certifications.resume,
                linkedIn: studentObj.certifications.linkedin,
                mockInterview: studentObj.certifications.mockInterview,
                gitHub: studentObj.certifications.github
            }
        });

    allStudentObj.map((studentObj) => {
        return (
            <>
                <section className="card-container">
                    <img className="student-img" src={studentObj.profilePhoto} alt="Student Profile Photo" />
                    <div className="badge-info-container">
                        <h3 className="badge-info"> {studentObj.preferredName + " " + studentObj.middleName + ". " + studentObj.surname}</h3>
                        <p className="badge-info">{studentObj.username}</p>
                        <p className="badge-info"><span className="green-text">Birthday:</span> {studentObj.dob}</p>
                        <br />
                        <p className="badge-expander">Show More...</p>
                    </div>
                </section>
                {/* <section className="student-details">
                    <div className="codewars-container">
                        <p className="green-text">Current Total:{ }</p>
                        <p className="green-text">Last Week:{ }</p>
                        <p className="green-text">Goal:{ }</p>
                        <p className="green-text">Percent of Goal Achieved:{ }</p>
                    </div>
                    <div className="scores-container">
                        <p className="green-text">Assignments:{ }</p>
                        <p className="green-text">Projects:{ }</p>
                        <p className="green-text">Assessments:{ }</p>
                    </div>
                    <div className="certifications-container">
                        <p className="green-text">Resume:{ }</p>
                        <p className="green-text">LinkedIn:{ }</p>
                        <p className="green-text">Mock Interview:{ }</p>
                        <p className="green-text">GitHub:{ }</p>

                    </div>
                </section> */}
            </>
        )
    }
    )
}

export { StudentCards, ViewInfo };