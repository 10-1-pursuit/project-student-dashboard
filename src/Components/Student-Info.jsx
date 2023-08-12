import data from "../data/data.json";
import { useState } from "react";
import { Fragment } from "react";


const CohortandStudentCards = () => {

    const [viewTitle, setViewTitle] = useState("All Students");
    const [studentCount, setStudentCount] = useState(data.length);
    const [studentCohort, setStudentCohort] = useState(data);
    const [showDetailsState, setShowDetailsState] = useState({});

    const toggleDetails = (studentId) => {
        setShowDetailsState((prevState) => ({
            ...prevState,
            [studentId]: !prevState[studentId],
        }));
    };

    const StudentDetails = ({ showDetails, studentObj }) => {
        if (showDetails) {
            return (
                <>
                    <section className="student-details">
                        <div className="codewars-container">
                            <p><span className="green-text">Current Total:</span> {studentObj.codewars.current.total}</p>
                            <p><span className="green-text">Last Week:</span> {studentObj.codewars.current.lastWeek}</p>
                            <p><span className="green-text">Goal:</span> {studentObj.codewars.goal.total}</p>
                            <p><span className="green-text">Percent of Goal Achieved:</span> {(100 * studentObj.codewars.current.total / studentObj.codewars.goal.total).toFixed(0)}%</p>
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
                </>
            )
        } return null;
    }

    const studentstoRender =
        studentCohort.map((studentObj) => {
            const studentId = studentObj.id;
            const areDetailsShowing = showDetailsState[studentId] || false;

            return (
                <Fragment key={studentId}>
                    < section className="card-container" >
                        <section className="student-top-info">
                            <img className="student-img" src={studentObj.profilePhoto} alt="Student Profile Photo" />
                            <div className="badge-info-container">
                                <h3 className="badge-info"> {studentObj.names.preferredName + " " + studentObj.names.middleName.at(0) + ". " + studentObj.names.surname}</h3>
                                <p className="badge-info">{studentObj.username}</p>
                                <p className="badge-info"><span className="green-text">Birthday:</span> {studentObj.dob}</p>
                                <br />
                                <p className="badge-expander" onClick={ () => toggleDetails(studentId)}>{areDetailsShowing ? "Show Less" : "Show More..."}{" "} </p>
                            </div>
                        </section >
                        <StudentDetails showDetails={areDetailsShowing} studentObj={studentObj} />
                        <section className="one-on-one-container">
                            <h4 className="one-on-one-title">1-on-1 Notes</h4>
                            <div className="comments-box">
                                <div className="comments-box-top">
                                <p className="commenter-name-element">Commenter Name</p>
                                    <input className="comments-input" type="text" placeholder="" />
                                </div>
                                <div className="comments-box-middle">
                                <p className="comment-element">Comment</p>
                                    <textarea className="comments-textarea" type="text" placeholder="Add a comment..." />
                                </div>
                                <button className="comments-button">Add Note</button>
                            </div>
                            <div className="comments..."> {/* This is where the comments will go */}
                            </div>
                        </section>
                    </section >
                </Fragment>

            )
        });

    const StudentCohortsSet = data.reduce((Cohorts, studentObj) => {
        const modifiedValue = studentObj.cohort.cohortCode.replace(/(\d+)/, ' $1'); // Add space before year
        Cohorts.add(modifiedValue);
        return Cohorts;
    }, new Set());

    const seasonOrder = {
        'Winter ': 3,
        'Fall ': 2,
        'Summer ': 1,
        'Spring ': 0
    };

    const StudentCohortsArray = [...StudentCohortsSet].sort((a, b) => {

        const yearA = parseInt(a.match(/\d+/)[0]);
        const yearB = parseInt(b.match(/\d+/)[0]);
        const seasonA = a.match(/(\D+)/)[0];
        const seasonB = b.match(/(\D+)/)[0];

        if (yearA === yearB) {
            return seasonOrder[seasonB] - seasonOrder[seasonA];
        }

        return yearB - yearA
    });

    const ListOfCohorts = StudentCohortsArray.map((cohort) =>
        <h3 key={StudentCohortsArray.indexOf(cohort)} className="list-item" onClick={(se) => clickedCohortEvent(se.target.innerText)}>{cohort}</h3>
    );

    function clickedCohortEvent(clickedCohort) {
        if (clickedCohort === "All Students") {
            setStudentCohort(data);
            setViewTitle("All Students");
            setStudentCount(data.length);
        } else {
            const filteredCohort = data.filter((student) => {
                return student.cohort.cohortCode === clickedCohort.replace(/\s/g, '');
            });
            setStudentCohort(filteredCohort);
            setViewTitle(clickedCohort);
            setStudentCount(filteredCohort.length);
        }
    }




    return (
        <>
            <h1 className="landing-title">Student Dashboard</h1>

            <section className="main-container">
                <div className="cohort-selection">
                    <h2 className="cohort-list-title">Choose a Class by Start Date</h2>
                    <h3 onClick={(se) => clickedCohortEvent(se.target.innerText)} key={0.5} className="list-item">All Students</h3>
                    {ListOfCohorts}
                </div>

                <section className="student-card-container">
                    <h2 className="view-info view-title" >{viewTitle}</h2>
                    <p className="view-info student-count">Total Students: <span className="green-text"> {studentCount}</span></p>
                    <div>
                        {studentstoRender}
                    </div>
                </section>
            </section >

        </>
    )
};


export { CohortandStudentCards };