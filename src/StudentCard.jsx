import data from "../src/data/data.json"




function StudentCards(){

   const studentsToRender= data.map((eachStudent)=>{return (
<div className="layout">

    <section><img src={eachStudent.profilePhoto} /></section>

     <section><p className="student-name"> {eachStudent.names.preferredName}  {eachStudent.names.middleName } {eachStudent.names.surname}</p>
            <p>{eachStudent.username}</p>
            <p>BirthDay : {eachStudent.dob}</p>

            <a>ShowMore.....</a>
     </section>
        
       

        
        
    </div>);})

return(<>{studentsToRender}</>);
    
}


export default StudentCards