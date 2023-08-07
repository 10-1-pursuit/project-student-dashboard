import React from "react"
import ".components/header.css"

function Header ({studentsList, setStudentsList}){
   function handleStudentsList () {
    setStudentsList(studentsList.length)
}
return(
    <div className="header">
        <header>
            <h1 onClick={handleStudentsList}>Student Dashboard</h1>
        </header>
    </div>
)

}

export default Header