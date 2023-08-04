import data from "../src/data/data.json"




function StudentCards(){

   const studentsToRender= data.map((eachStudent)=>{return (<div>

        <img src={eachStudent.profilePhoto}/>
    </div>);})

return(<>{studentsToRender}</>);
    
}


export default StudentCards