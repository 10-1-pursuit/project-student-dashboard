import { useState } from "react"
import data from "../src/data/data.json"
import OneOnOneForm from "./1on1"




 function StudentCardsAll() {
function classCount(){ 
    
    const count=studentsToRender.length 

return count
}
 
  

    const studentsToRender = data.map((eachStudent) => {
        
        // const[ifTrue,setIfTrue]=useState(false)
        const[shows,SetShows]=useState('true')
        const[hasIt,SetHasIt]=useState("✅");
        const[doesntHaveIt,SetDoenstHaveIt]=useState("❌")

        
       

        // // console.log(ifTrue)

        // if(ifTrue===eachStudent.certifications.linkedin){
        //     setIfTrue("❌")

           
        // }

        // if(eachStudent.certifications.linkedin==="false"){

        //     return(<>❌</>);


        // }

        // for (let cert of studentsToRender){

        //     if(certifications.linkedin==="false"){


        //     }
        // }
        

        return (
            <>
            <div className="layout" key={Math.random()*100000}>
                

                <section key={eachStudent.id}><img src={eachStudent.profilePhoto} /></section>

                <section><p className="student-name"> {eachStudent.names.preferredName}  {eachStudent.names.middleName} {eachStudent.names.surname}</p>
                    <p>{eachStudent.username}</p>
                    <p>BirthDay : {eachStudent.dob}</p>
                    <p>{eachStudent.cohort.cohortCode}</p>
                    <br>
                    </br>
                    <br></br>
                    <div>

                    <a><button onClick={()=>SetShows(!shows)}>ShowMore.....</button></a>
                    <a><button onClick={()=>SetShows(!shows)}>ShowLess.....</button></a>
                    {shows && (
                    <div id="table"><table id ={eachStudent.id}>
                        <th className="top1">CodeWars</th>
                        
                        <th className="top2">Scores</th>
                        
                        <th className="top3">Certifications</th>
                        <tbody>
                            <tr>
                                <td>CurrentTotal:{eachStudent.codewars.current.total}%</td>
                                <td>Assignments:{eachStudent.cohort.scores.assignments}%</td>
                                
                                <td>Resume:{eachStudent.certifications.resume ?hasIt:doesntHaveIt}</td>
                            </tr>
                            <tr><td>LastWeek:{eachStudent.codewars.current.lastWeek}</td> 
                                <td>Projects:{eachStudent.cohort.scores.projects}%</td>
                                
                                <td>LinkedIn :{eachStudent.certifications.linkedin ?hasIt:doesntHaveIt}</td></tr>
                            <tr><td>Goal:{eachStudent.codewars.goal.total}</td> 
                                <td>Assesment:{eachStudent.cohort.scores.assessments}%</td>  
                                
                                <td>Mock Interview:{eachStudent.certifications.mockInterview ?hasIt:doesntHaveIt}</td></tr>
                                <tr><td>Percent of Goal</td> 
                                <td></td>  
                                
                                <td>GitHub:{eachStudent.certifications.github ?hasIt:doesntHaveIt}</td></tr>
                             

                            
                        </tbody>
                        

                    </table></div>)}</div>

                    {/* <p>Percent of Goal <br></br>GitHub:{doesntHaveIt}</p> */}
                </section>
               <div id={eachStudent.id}>< OneOnOneForm id={eachStudent.id}/></div>





            </div></>);
    })

    return (<>
    {/* <div>{classCount()}</div> */}
    
    
    <div className="all-students" >Count of Student:{classCount()}{studentsToRender}</div></>);

}


export default StudentCardsAll