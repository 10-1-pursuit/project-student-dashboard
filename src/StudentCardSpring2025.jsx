import { useState } from "react"
import data from "../src/data/data.json"

// const ShowCard=()=>{
//     const myDiv=document.querySelector("table")
//     const myDivId=document.querySelector('table').id
//     const Show=data.map((el)=>{
//         if(el.id){
//             myDiv.removeAttribute("hidden")
//         }
//         return Show
    
        
//     })
    
    
    
    
//     }

function StudentCardsSpring25() {
    
  

    const studentsToRender = data.map((eachStudent) => {
        
        // const[ifTrue,setIfTrue]=useState(false)
        const myDiv=document.querySelector("table")

        const[hasIt,SetHasIt]=useState("✅");
        const[doesntHaveIt,SetDoenstHaveIt]=useState("❌")
        const[show,SetShow]=useState(true)

        if(eachStudent.cohort.cohortCode === "Spring2025")
       

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
            <div className="layout">
                

                <section key={eachStudent.id}><img src={eachStudent.profilePhoto} /></section>

                <section><p className="student-name"> {eachStudent.names.preferredName}  {eachStudent.names.middleName} {eachStudent.names.surname}</p>
                    <p>{eachStudent.username}</p>
                    <p>BirthDay : {eachStudent.dob}</p>
                    <p>{eachStudent.cohort.cohortCode}</p>
                    <br>
                    </br>
                    <br></br>
                  

                    <a ><button type="button" onClick="">ShowMore.....</button></a>

                    <div id={eachStudent.id}><table id ={eachStudent.id}>
                        <th className="top1">CodeWars</th>
                        
                        <th className="top2">Scores</th>
                        
                        <th className="top3">Certifications</th>
                        <tbody>
                            <tr>
                                <td>CurrentTotal:{eachStudent.codewars.current.total}%</td>
                                <td>Assignments:{eachStudent.cohort.scores.assignments}%</td>
                                
                                <td>Resume:{hasIt}</td>
                            </tr>
                            <tr><td>LastWeek:{eachStudent.codewars.current.lastWeek}</td> 
                                <td>Projects:{eachStudent.cohort.scores.projects}%</td>
                                
                                <td>LinkedIn :{hasIt}</td></tr>
                            <tr><td>Goal:{eachStudent.codewars.goal.total}</td> 
                                <td>Assesment:{eachStudent.cohort.scores.assessments}%</td>  
                                
                                <td>Mock Interview:{doesntHaveIt}</td></tr>
                            
                        </tbody>
                        

                    </table></div>

                    <p>Percent of Goal <br></br>GitHub:{doesntHaveIt}</p>
                </section>





            </div>);
    })

    return (<div class="spring2025" hidden="hidden"> {studentsToRender}</div>);

}


export default StudentCardsSpring25