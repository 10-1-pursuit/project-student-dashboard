import React, { useState } from 'react';
import ShowMoreData from './ShowMoreData';
import OneOnOne from './OneOnOne';
import "./ShowMore.css";

function ShowMore( { cohort, certifications, codewars }) {

    //console.log(cohort);
    //console.log(certifications);
    //console.log(codewars);

    const [showMore, setshowMore] = useState(false);
  return (
    <div>
      <p className='student-container__show-more'>
        <span onClick={() => setshowMore(!showMore)}>
            {showMore ? "Show Less..." : "Show More..."}
        </span>
      </p>

        <div>
            {
                showMore && (
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
        

    </div>
  )
}

export default ShowMore