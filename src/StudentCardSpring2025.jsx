import { useState } from "react"
import data from "../src/data/data.json"
import OneOnOneForm from "./1on1"

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

    function classCount(){ 
    
        const count=document.querySelector('div.spring2025').children.length
    
    return count
    }
    const studentsToRender = data.map((eachStudent) => {
        // const[ifTrue,setIfTrue]=useState(false)
        const myDiv = document.querySelector("table")
        const [hasIt, SetHasIt] = useState("✅");
        const [doesntHaveIt, SetDoenstHaveIt] = useState("❌")
        const [shows, SetShows] = useState(true)

        if (eachStudent.cohort.cohortCode === "Spring2025")
            return (
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
                            <a><button onClick={() => SetShows(!shows)}>ShowMore.....</button></a>
                            <a><button onClick={() => SetShows(!shows)}>ShowLess.....</button></a>
                            {shows && (
                                <div id={eachStudent.id}><table id={eachStudent.id}>
                                    <th className="top1">CodeWars</th>
                                    <th className="top2">Scores</th>
                                    <th className="top3">Certifications</th>
                                    <tbody>
                                        <tr>
                                            <td>CurrentTotal:{eachStudent.codewars.current.total}%</td>
                                            <td>Assignments:{eachStudent.cohort.scores.assignments}%</td>

                                            <td>Resume:{eachStudent.certifications.resume?hasIt:doesntHaveIt}</td>
                                        </tr>
                                        <tr><td>LastWeek:{eachStudent.codewars.current.lastWeek}</td>
                                            <td>Projects:{eachStudent.cohort.scores.projects}%</td>

                                            <td>LinkedIn :{eachStudent.certifications.linkedin?hasIt:doesntHaveIt}</td></tr>
                                        <tr><td>Goal:{eachStudent.codewars.goal.total}</td>
                                            <td>Assesment:{eachStudent.cohort.scores.assessments}%</td>
                                            <td>Mock Interview:{ eachStudent.certifications.mockInterview?hasIt:doesntHaveIt}</td></tr>
                                            <tr><td>Percent of Goal</td> 
                                <td></td>  
                                
                                <td>GitHub:{eachStudent.certifications.github?hasIt:doesntHaveIt}</td></tr>
                            
                        </tbody>
                        

                    </table></div>)}</div>

                    {/* <p>Percent of Goal <br></br>GitHub:{doesntHaveIt}</p> */}
                </section>
               <div id={eachStudent.id}>< OneOnOneForm id={eachStudent.id}/></div>





                </div>);
    })

    return (<div className="spring2025" hidden="hidden"> {studentsToRender}</div>);

}


export default StudentCardsSpring25




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