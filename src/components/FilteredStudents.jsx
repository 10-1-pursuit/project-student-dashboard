import React from "react"
import "./filteredStudents.css"
import StudentCard from "./StudentCard"



function FilteredStudents ({
    selectedCohort,
    selectedStudentsList,
    studentsList,
}){
    return(
        <div>
            {!selectedCohort
            ? studentsList.map((student)=> <StudentCard student={student} />) : selectedStudentsList.map((student)=>(
                <StudentCard student={student} />
            ))}
        </div>
    )
}

export default FilteredStudents