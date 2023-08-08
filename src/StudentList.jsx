import React from "react";

const StudentList = ({ data }) => {
    const studentsToRender = data.map((eachStudentObj) => {
        return <>
            <h6 key={eachStudentObj.id}>{eachStudentObj.username}</h6>
            <div >
                {eachStudentObj.names.middleName}
            </div>
        </>;
    });

    return <>{studentsToRender}</>;
};

export default StudentList;
