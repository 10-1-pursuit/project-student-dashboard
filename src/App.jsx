import data from "./data/data.json"

console.log(data)

function App() {
  
  // WILL NEED TO USE STATE

  const renderStudents = data.map( 
    
    (eachStudentObj)=>{
      
      return(
        <div>
      <img src="" alt="Student Profile Pic" />
      <h3>{eachStudentObj.username}</h3>
        </div>
        )
      }
    
    )

  return (
  
    <div>
    
      <h1>Student Dashboard</h1>
      {renderStudents}
    </div>
    
  
  );
}

export default App;
