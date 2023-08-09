import React from "react";
import Form from "./Form";
import "./kpi.css";

function Kpi({ student }) {
  console.log(student.certifications.resume);
  return (
    <div className="kpi">
      <div className="code-wars">
        <h3>Code Wars:</h3>
        <p>
          <span>Current Total: </span>
          {student.codewars.current.total}
        </p>
        <p>
          <span>Last Week: </span>
          {student.codewars.current.lastWeek}
        </p>
        <p>
          <span>Goal: </span>
          {student.codewars.goal.total}
        </p>
        <p>
          <span>Percent of Goal Achieved: </span>{" "}
          {Math.floor(
            (student.codewars.current.total / student.codewars.goal.total) * 100
         ) }
        </p>
      </div>
      <div className="scores">
        <h3>Scores</h3>
        <p>
            <span>Assessments: </span>
            {student.cohort.scores.assessments * 100}%
            </p>
            <p>
              <span>Assignments: </span>
          {student.cohort.scores.assignments * 100}%
        </p>
        <p>
          <span>Project:</span>
          {student.cohort.scores.projects * 100}%
        </p>
      </div>
      <div className="certifications">
        <h3>Certifications</h3>
        <p>
          <span>Resume: </span>
          {student.certifications.resume === true ? <>✅</> : <>❌</>}
        </p>
        <p>
          <span>LinkedIn: </span>
          {student.certifications.linkedin === true ? <>✅</> : <>❌</>}
        </p>
        <p>
          Mock Interview:
          {student.certifications.github === true ? <>✅</> : <>❌</>}
        </p>
        <p>
          <span>Github: </span>
          {student.certifications.mockInterview === true ? <>✅</> : <>❌</>}
        </p>
      </div>
      <div>
        <Form student={student} />
      </div>
    </div>
  );
}

export default Kpi;
