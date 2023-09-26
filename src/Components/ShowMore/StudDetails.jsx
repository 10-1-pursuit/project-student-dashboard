import React from 'react'

function StudDetails({ cohort, codewars, certifications }) {
    
  return (
    <div className="show-more-details-container row">
      <div className=".col-sm-4 ">
        <h3>Code Wars:</h3>
        <p>
          <span className="text-success">Actual Total:</span>
          {codewars.current.total}
        </p>
        <p>
          <span className="text-success">Last Week:</span>
          {codewars.current.lastWeek}
        </p>
        <p>
          <span className="text-success">Goal:</span>
          {codewars.goal.total}
        </p>
        <p>
          <span className="text-success">Percent of Goal Achieved:</span>
          {Math.floor(codewars.current.total / codewars.goal.total) * 100}
        </p>
      </div>

      <div className=".col">
        <h3>Scores</h3>

        <p>
          <span className="text-success">Assessments: </span>
          {cohort.scores.assessments * 100}%
        </p>
        <p>
          <span className="text-success">Project:</span>{" "}
          {cohort.scores.projects * 100}%
        </p>
        <p>
          <span className="text-success">Assignments: </span>
          {cohort.scores.assignments * 100}%
        </p>
      </div>

      <div className=".col">
        <h3>Certifications:</h3>
        <p>
          <span className="text-success col">Resume: </span>{" "}
          {certifications.resume ? "✅" : "❌"}
        </p>
        <p>
          <span className="text-success">LinkedIn: </span>{" "}
          {certifications.linkedin ? "✅" : "❌"}
        </p>
        <p>
          <span className="text-success">Mock Interview: </span>
          {certifications.mockInterview ? "✅" : "❌"}
        </p>
        <p>
          <span className="text-success .container">Github: </span>
          {certifications.github ? "✅" : "❌"}
        </p>
      </div>
    </div>
  );
} 

export default StudDetails;