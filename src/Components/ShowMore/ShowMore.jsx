import React, { useState } from "react";
import StudDetails from "./StudDetails"
import Comment from "./Comments";

function ShowMore({ codewars, certifications, cohort }) {
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
            <StudDetails
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

export default ShowMore;
