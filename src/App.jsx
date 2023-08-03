import studentData from "./data/data.json"
import "./index.css"




const studentsToRender = studentData.map(
  (eachStudentObj) => {
    return (
      <div className="Student">
        <img src={eachStudentObj.profilePhoto} alt={`${eachStudentObj.names.preferredName}`} />
        <h4>{eachStudentObj.names.preferredName}</h4>
        <p>{eachStudentObj.username}</p>
        <span>Birthday: {eachStudentObj.dob}</span> <br />

      </div>)
  })











function App() {

  return (
    <>
   
      <div>
      <header>
        <h1>Student Dashboard</h1>
        </header>
      </div>
      <div>
        <h2> All Students</h2>
      </div>
      {studentsToRender}
    </>
  );
}

export default App;
