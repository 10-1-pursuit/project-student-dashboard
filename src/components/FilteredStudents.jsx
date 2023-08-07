import React from "react"
import "./components/filteredStudents.css"
import StudentCard from "./components/StudentCard.jsx"



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