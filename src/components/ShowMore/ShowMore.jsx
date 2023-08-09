import React, { useState } from "react";

import ShowMoreData from "./ShowMoreData";
import OneOnOne from "./OneOnOne";

import "./ShowMore.css";

function ShowMore({ cohort, certifications, codewars }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <p className="student-container__show-more">
        <span onClick={() => setShowMore(!showMore)}>
          {showMore ? "Show Less..." : "Show More..."}
        </span>
      </p>
      <div>
        {showMore && (
          <>
            <ShowMoreData
              cohort={cohort}
              certifications={certifications}
              codewars={codewars}
            />
            <hr />
            <OneOnOne />
          </>
        )}
      </div>
    </>
  );
}

export default ShowMore;
