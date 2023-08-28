import React, { useState } from "react";
// import StudentDetails from "./StudentDetails";
import Comment from "./Comments";

function Showmore({ codewars, certifications, cohort }) {
  const [showMore, setshowMore] = useState(false);

  return (
    <>
      <p className="student-show-more-container text-danger">
        <span onClick={() => setshowMore(!showMore)}>
          {showMore ? "Show Less..." : "Show More..."}
        </span>
      </p>
      <div>
        {showMore && (
          <>
            <StudentDetails
              codewars={codewars}
              certifications={certifications}
              cohort={cohort}
            />
            <hr />
            <Comment />
          </>
        )}
      </div>
    </>
  );
}

export default Showmore;
