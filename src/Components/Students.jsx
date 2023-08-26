import React from "react";
import moment from "moment";
// import Showmore from "./ShowMore/showmore";
//  import data from "../data/data.json"


function DisplayStudent({ studentList }) {
  function FixingDob(dob) {
    let fixedDob = dob.split("/");
    fixedDob = moment(dob).format("MMMM D, YYYY");
    return fixedDob;
  }
   console.log(studentList);

  return (
    <section>
      <div className="displayStudent">
        <h2> All Students</h2>
        <p>
          Total Students : {""}
          <span>{studentList.length}</span>
        </p>

        {studentList.map(
          ({
            names: { preferredName, middleName, surname },
            username,
            dob,
            id,
            profilePhoto,
          }) => {
            return (
              <>
                <div key={id} className="student-profile ">
                  <img src={profilePhoto} alt={preferredName} />

                  <div className="profile">
                    <h3>
                      {preferredName} {middleName[0]} {surname}
                    </h3>
                    <p>
                      <span>{username}</span>

                      <br />
                      <span>Birthday: {FixingDob(dob)} </span>
                    </p>
                  </div>
                </div>
              </>
            )
          }
        )}
      </div>
    </section>
  );
}
export default DisplayStudent;
