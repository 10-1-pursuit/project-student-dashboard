import "../cohortList.css"
import data from "../data/data.json"


function CohortList({ setStudentArray }) {

    function clickClassTitle(se) {
        console.log(se.target.innerText)
        // setStudentArray()
        if (se.target.innerText === 'All Students') {
            setStudentArray(data)
        } else {

            const filteredStudents = data.filter((eachStudent) => {
                if (se.target.innerText.replace(" ", "") === eachStudent.cohort.cohortCode) {
                    return eachStudent
                }
            })
            console.log(filteredStudents)
            setStudentArray(filteredStudents)

        }

    }




    return (
        <div id="classList">
            <a href="#" > <h2 onClick={(synthEvent) => { clickClassTitle(synthEvent) }}>  All Students</h2> </a>
            <a href="#"> <h2 onClick={(synthEvent) => { clickClassTitle(synthEvent) }}> Winter 2026</h2> </a>
            <a href="#"> <h2 onClick={(synthEvent) => { clickClassTitle(synthEvent) }} >Fall 2026</h2> </a>
            <a href="#"> <h2 onClick={(synthEvent) => { clickClassTitle(synthEvent) }}>Summer 2026</h2> </a>
            <a href="#">  <h2 onClick={(synthEvent) => { clickClassTitle(synthEvent) }}> Spring 2026</h2> </a>
            <a href="#">  <h2 onClick={(synthEvent) => { clickClassTitle(synthEvent) }}>Winter 2025</h2> </a>
            <a href="#">  <h2 onClick={(synthEvent) => { clickClassTitle(synthEvent) }}> Fall 2025</h2> </a>
            <a href="#">  <h2 onClick={(synthEvent) => { clickClassTitle(synthEvent) }}>Summer 2025</h2> </a>
            <a href="#"> <h2 onClick={(synthEvent) => { clickClassTitle(synthEvent) }}>Spring 2025</h2> </a>
        </div>
    )
}


export default CohortList