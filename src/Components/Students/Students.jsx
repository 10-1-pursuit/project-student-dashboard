import React from 'react'
import ShowMore from '../ShowMore/ShowMore';
import "./Students.css"

function Students( { studentArray }) {
    //console.log(studentArray)

    function handleBirthdayParse(dob) {
        let splittedDob = dob.split("/");
        //console.log(splittedDob);

        let month = splittedDob[0];
        let date = splittedDob[1];
        let year = splittedDob[2];

        let finaldateResult = "";

        if (month === "1") finaldateResult += `January ${date}, ${year}`;
        if (month === "2") finaldateResult += `February ${date}, ${year}`;
        if (month === "3") finaldateResult += `March ${date}, ${year}`;
        if (month === "4") finaldateResult += `April ${date}, ${year}`;
        if (month === "5") finaldateResult += `May ${date}, ${year}`;
        if (month === "6") finaldateResult += `June ${date}, ${year}`;
        if (month === "7") finaldateResult += `July ${date}, ${year}`;
        if (month === "8") finaldateResult += `August ${date}, ${year}`;
        if (month === "9") finaldateResult += `September ${date}, ${year}`;
        if (month === "10") finaldateResult += `October ${date}, ${year}`;
        if (month === "11") finaldateResult += `November ${date}, ${year}`;
        if (month === "12") finaldateResult += `December ${date}, ${year}`;
          return finaldateResult;
    }

    function handleOnTrackToGraduate(certs, codeWars) {
        //console.log(certs);
        //console.log(codeWars);

        let isOnTime = true;

        for (let cert in certs) {
            //console.log(certs[key]);
            if (!certs[cert]) {
                isOnTime = false;
                return isOnTime;
            }
        }

        for (let code in codeWars) {
            //console.log(codeWars[key]);
            if (codeWars[code].total <= 600) {
                isOnTime = false;
                return isOnTime;
            }
        }
        return isOnTime;
    }
  return (
    <section className="students-container">
        <h2>All students</h2>
        <p>
            Total Students: <span>{studentArray.length}</span>
        </p>

        {studentArray.map((item) => {
            return (
                    <div className="student-container" key={item.id}>
            <div>
                <img src={item.profilePhoto} alt={item.names.preferredName} />
            </div>
            <div>
                <h3 className='student-container__h3'>
                    {item.names.preferredName} {item.names.middleName[0]} {item.names.surname}</h3>
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
            <p className='student-container__on-track-to-grad'>
                {handleOnTrackToGraduate(item.certifications, item.codewars) && (
                <span>On Track to Graduate</span>
                )}
                
            </p>
            </div>
            );
            })
        }
    </section>
  )
}

export default Students