import { useState } from "react"
import data from "./data/data.json"
import Header from "./components/Header.jsx"
import Aside from "./components/Aside.jsx"
import Main from "./components/Main.jsx"
import "./components/kpi.css"
import "./components/filteredStudents.css"
import "./components/header.css"
import "./components/form.css"


function App() {
  const [studentsList, setStudentsList] = useState(data);
  const [studentsByCode, setStudentsByCode] = useState(handleStuByCohortCode())

  const [selectedCohort, setSelectedCohort] = useState("")
  const [selectedStudentsList, setSelectedStudentsList] = useState([])
  
  function handleStuByCohortCode(){
    let stuByCohort = {}
  }

  return (
  <div>


  <Header studentsList={studentsList} /> 
  </div>
  )
}

export default App;
