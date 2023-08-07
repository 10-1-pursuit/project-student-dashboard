import React from 'react'
import "./ShowMoreData.css"

function ShowMoreData({ cohort, certifications, codewars }) {
   //console.log(codewars);
   //console.log(cohort);
   //console.log(certifications);

   const codeWarsAndGoalRatio = Math.floor(codewars.current.total / codewars.goal.total) * 100

   let codeWarsAndGoalRatioStyle;
   if (codeWarsAndGoalRatio >= 100)  codeWarsAndGoalRatioStyle = "color-green";
   if (codeWarsAndGoalRatio >= 50 && codeWarsAndGoalRatio < 100)  codeWarsAndGoalRatioStyle = "color-yellow";
   if (codeWarsAndGoalRatio < 50)  codeWarsAndGoalRatioStyle = "color-red";

  return (
    <div className='show-more-data-container'>
        <div>
            <h2>Code Wars:</h2>
            <p>
                <span>Current Total:</span> {codewars.current.total}
            </p>
            <p>
                <span>Last Week:</span> {codewars.current.lastWeek}
            </p>
            <p>
                <span>Goal</span> {codewars.goal.total}
            </p>
            <p>
                <span>Percent of Goal Achieved:</span>{" "}
                <span className={codeWarsAndGoalRatioStyle}> {codeWarsAndGoalRatio}</span>
            </p>
        </div>
        <div>
            <h2>Scores</h2>
            <p>
                <span>Assessments: </span> {cohort.scores.assessments * 100}%
            </p>
            <p>
                <span>Projects: </span> {cohort.scores.projects * 100}%
            </p>
            <p>
                <span>Assignments: </span> {cohort.scores.assignments * 100}%
            </p>
        </div>
        <div>
            <h2>Certifications:</h2>
            <p>
                <span>Resume: </span> {certifications.resume ? "✅" : "❌"}
            </p>
            <p>
                <span>LinkedIn: </span> {certifications.linkedin ? "✅" : "❌"}
            </p>
            <p>
                <span>Mock Interview: </span> {certifications.mockInterview ? "✅" : "❌"}
            </p>
            <p>
                <span>Github: </span> {certifications.github ? "✅" : "❌"}
            </p>
        </div>

    </div>
  );
}

export default ShowMoreData