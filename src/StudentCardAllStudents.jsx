import { useState } from "react"
import data from "../src/data/data.json"
import OneOnOneForm from "./1on1"




 function StudentCardsAll() {

    function  stringFilter(str){


        if(str.length =="10"){
    
         return  console.log(str.slice(0,6)+" "+str.slice(6))
        }
    
         

          
    
    
    
            
            }
           
        
    
function classCount(){ 
    
    const count=studentsToRender.length 

return count
}
 
  

    const studentsToRender = data.map((eachStudent) => {
        
        // const[ifTrue,setIfTrue]=useState(false)
        const[shows,SetShows]=useState('true')
        const[hasIt,SetHasIt]=useState("✅");
        const[doesntHaveIt,SetDoenstHaveIt]=useState("❌")
        const[offTrack,SetOffTrack]=useState(<>OFF TRACK ⏳📚</>)
        const[onTrack,SetOnTrack]=useState(<>ON TRACK TO GRADUATE 🎓</>)

        
       

        
        

        return (
            <>
          
            <div className="layout" key={Math.random()*100000}>
                
                <section key={eachStudent.id}><img src={eachStudent.profilePhoto} /><div>

<a><button onClick={()=>SetShows(!shows)}>ShowMore.....</button></a>
<a><button onClick={()=>SetShows(!shows)}>ShowLess.....</button></a>
{!shows && (
<div id="table" ><table id ={eachStudent.id}>
    <th className="top1">CodeWars</th>
    
    <th className="top2">Scores</th>
    
    <th className="top3">Certifications</th>
    <tbody>
        <tr>
            <td>CurrentTotal:{eachStudent.codewars.current.total}</td>
            <td>Assignments:{eachStudent.cohort.scores.assignments}%</td>
            
            <td>Resume:{eachStudent.certifications.resume ?hasIt:doesntHaveIt}</td>
        </tr>
        <tr><td>LastWeek:{eachStudent.codewars.current.lastWeek}</td> 
            <td>Projects:{eachStudent.cohort.scores.projects}%</td>
            
            <td>LinkedIn :{eachStudent.certifications.linkedin ?hasIt:doesntHaveIt}</td></tr>
        <tr><td>Goal:{eachStudent.codewars.goal.total}</td> 
            <td>Assesment:{eachStudent.cohort.scores.assessments}%</td>  
            
            <td>Mock Interview:{eachStudent.certifications.mockInterview ?hasIt:doesntHaveIt}</td></tr>
            <tr><td>Percent of Goal {(eachStudent.codewars.current.total /eachStudent.codewars.goal.total*100).toFixed(0)}%</td> 
            <td></td>  
            
            <td>GitHub:{eachStudent.certifications.github ?hasIt:doesntHaveIt}</td></tr>
         

        
    </tbody>
    

</table></div>)}</div></section>

                <section><p className="student-name"> {eachStudent.names.preferredName}  {eachStudent.names.middleName} {eachStudent.names.surname}</p>
                    <p>{eachStudent.username}</p>
                    <p>BirthDay : {eachStudent.dob}</p>
                    <p>Cohort : {eachStudent.cohort.cohortCode.includes("Fall")? (eachStudent.cohort.cohortCode.slice(0,4)+" "+eachStudent.cohort.cohortCode.slice(4)):(eachStudent.cohort.cohortCode.slice(0,6)+" "+eachStudent.cohort.cohortCode.slice(6))}</p>
                    
                    <p>{eachStudent.certifications.resume&&eachStudent.certifications.linkedin
         &&eachStudent.certifications.github&& eachStudent.certifications.mockInterview?onTrack:offTrack}</p>
         <div id={eachStudent.id}>< OneOnOneForm id={eachStudent.id}/></div>
                

                    <br>
                    </br>
                    <br></br>
                    

                    {/* <p>Percent of Goal <br></br>GitHub:{doesntHaveIt}</p> */}
                </section>
               





            </div></>);
    })

    return (<>
    {/* <div>{classCount()}</div> */}
    
    
    <div className="all-students" ><h1>All Students</h1><p><strong>Count of Students in Cohort:{classCount()}</strong></p>{studentsToRender}</div></>);

}


export default StudentCardsAll