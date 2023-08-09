import React from "react";

import ShowMore from "../ShowMore/ShowMore";

import "./Students.css";

function Students({ studentArray }) {
  function handleBirthdayParse(dob) {
    let splittedDob = dob.split("/");

    let month = splittedDob[0];
    let date = splittedDob[1];
    let year = splittedDob[2];

    let finalDateResult = "";

    if (month === "1") finalDateResult += `January ${date}, ${year}`;
    if (month === "2") finalDateResult += `February ${date}, ${year}`;
    if (month === "3") finalDateResult += `March ${date}, ${year}`;
    if (month === "4") finalDateResult += `April ${date}, ${year}`;
    if (month === "5") finalDateResult += `May ${date}, ${year}`;
    if (month === "6") finalDateResult += `June ${date}, ${year}`;
    if (month === "7") finalDateResult += `July ${date}, ${year}`;
    if (month === "8") finalDateResult += `August ${date}, ${year}`;
    if (month === "9") finalDateResult += `September ${date}, ${year}`;
    if (month === "10") finalDateResult += `October ${date}, ${year}`;
    if (month === "11") finalDateResult += `November ${date}, ${year}`;
    if (month === "12") finalDateResult += `December ${date}, ${year}`;

    return finalDateResult;
  }

  function handleOnTrackToGraduate(certs, codeWars) {
    let isOnTime = true;

    for (let key in certs) {
      if (!certs[key]) {
        isOnTime = false;
        return isOnTime;
      }
    }

    for (let key in codeWars) {
      if (codeWars[key].total <= 600) {
        isOnTime = false;
        return isOnTime;
      }
    }

    return isOnTime;
  }

  return (
    <section className="student-section-container">
      <h2>All Students</h2>
      <p className="indent">
        Total Students: <span>{studentArray.length}</span>
      </p>

      {studentArray.map((item) => {
        return (
          <div className="student-container" key={item.id}>
            <div>
              <img src={item.profilePhoto} alt={item.names.preferredName} />
            </div>
            <div>
              <h4 className="student-container__h4">
                {item.names.preferredName} {item.names.middleName[0]}{" "}
                {item.names.surname}
              </h4>
              <p>{item.username}</p>
              <p className="student-container__dob">
                <span>Birthday:</span> {handleBirthdayParse(item.dob)}
              </p>

              <ShowMore
                cohort={item.cohort}
                certifications={item.certifications}
                codewars={item.codewars}
              />
            </div>
            <p className="student-container__on-track-to-grad">
              {handleOnTrackToGraduate(item.certifications, item.codewars) && (
                <span className="on-track">On Track to Graduate</span>
              )}
            </p>
          </div>
        );
      })}
    </section>
  );
}

export default Students;
