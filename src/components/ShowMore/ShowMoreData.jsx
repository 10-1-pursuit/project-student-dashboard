import React from "react";

import "./ShowMoreData.css";

function ShowMoreData({ cohort, certifications, codewars }) {
  // const codeWarsAndGoalRatio =
  // Math.floor(codewars.current.total / codewars.goal.total) * 100;

  // let codeWarsAndGoalRatioStyle;
  // console.log(codeWarsAndGoalRatio);
  // if (codeWarsAndGoalRatio >= 100) codeWarsAndGoalRatioStyle = "color-green";
  // if (codeWarsAndGoalRatio >= 50 && codeWarsAndGoalRatioStyle < 100)
  //   codeWarsAndGoalRatioStyle = "color-yellow";

  // if (codeWarsAndGoalRatio < 50) codeWarsAndGoalRatioStyle = "color-red";

  // return (
  //   <div className="show-more-data-container">
  //     <div>
  //       <h2>Code Wars:</h2>
  //       <p>
  //         <span>Current Total:</span> {codewars.current.total}
  //       </p>
  //       <p>
  //         <span>Last Week:</span> {codewars.current.lastWeek}
  //       </p>
  //       <p>
  //         <span>Goal:</span> {codewars.goal.total}
  //       </p>
  //       <p>
  //         <span>Percent of Goal Achieved:</span>{" "}
  //         <span className={codeWarsAndGoalRatioStyle}>
  //           {" "}
  //           {codeWarsAndGoalRatio}
  //         </span>
  //       </p>
  //     </div>

  //     <div>

  return (
    <div className="show-more-data-container">
      <div>
        <h4>Code Wars:</h4>
        <p>
          <span className="reduce">Current Total: </span>
          {codewars.current.total}
        </p>
        <p>
          <span className="reduce">Last Week:</span> {codewars.current.lastWeek}
        </p>
        <p>
          <span className="reduce">Goal:</span> {codewars.goal.total}
        </p>
        <p>
          <span className="reduce">Percent of Goal Achieved:</span>{" "}
          {Math.floor(codewars.current.total / codewars.goal.total) * 100}
        </p>
      </div>

      <div>
        <h4>Scores</h4>

        <p>
          <span className="reduce">Assessments: </span>
          {cohort.scores.assessments * 100}%
        </p>
        <p>
          <span className="reduce">Project: </span>
          {cohort.scores.projects * 100}%
        </p>
        <p>
          <span className="reduce">Assignments: </span>
          {cohort.scores.assignments * 100}%
        </p>
      </div>

      <div>
        <h4>Certifications:</h4>
        <p>
          <span className="reduce">Resume: </span>{" "}
          {certifications.resume ? "✅" : "❌"}
        </p>
        <p>
          <span className="reduce">LinkedIn: </span>{" "}
          {certifications.linkedin ? "✅" : "❌"}
        </p>
        <p>
          <span className="reduce">Mock Interview: </span>{" "}
          {certifications.mockInterview ? "✅" : "❌"}
        </p>
        <p>
          <span className="reduce">Github: </span>{" "}
          {certifications.github ? "✅" : "❌"}
        </p>
      </div>
    </div>
  );
}

export default ShowMoreData;
