import React from "react";

const StudentCard = ({ data }) => {
    const studentCardToRender = data.map((eachStudentObj) => {
        return <div className="sCard-container">
            <img className="sCard-img"
                src={eachStudentObj.profilePhoto}
                alt={`${eachStudentObj.names.preferredName}'s profile`}
            />

            <div className="sCard">
                <strong>{eachStudentObj.names.preferredName} {eachStudentObj.names.middleName} {eachStudentObj.names.surname}</strong>
                <br />{eachStudentObj.username}
                <br />Birthday: {eachStudentObj.dob}
            </div>

        </div>;
    });

    return <>{studentCardToRender}</>;
};

export default StudentCard;
