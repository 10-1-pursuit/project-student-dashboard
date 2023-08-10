// import { useState } from "react"
// import data from "../src/data/data.json"
// import OneOnOneForm from "./1on1"




// function StudentCardsWinter26() {


//     const studentsToRender = data.map((eachStudent) => {


//         const [shows, SetShows] = useState('true')
//         const [hasIt, SetHasIt] = useState("✅");
//         const [doesntHaveIt, SetDoenstHaveIt] = useState("❌")
//         const[offTrack,SetOffTrack]=useState(<>OFF TRACK📚⏳</>)
//         const[onTrack,SetOnTrack]=useState(<>ON TRACK TO GRADUATE🎓</>)
//         const count=document.querySelector('div.winter2026').children.length

        

//         if (eachStudent.cohort.cohortCode === "Winter2026")




//             return (
//                 <>
//                 <p>{count}</p>
//                 <div className="layout" key={Math.random() * 100000}>

//                     <section key={eachStudent.id}><img src={eachStudent.profilePhoto} /></section>

//                     <section><p className="student-name"> {eachStudent.names.preferredName}  {eachStudent.names.middleName} {eachStudent.names.surname}</p>
//                         <p>{eachStudent.username}</p>
//                         <p>BirthDay : {eachStudent.dob}</p>
//                         <p>Cohort : {eachStudent.cohort.cohortCode.slice(0,6)+" "+(eachStudent.cohort.cohortCode.slice(6))}</p>
//                         <p>{eachStudent.certifications.resume&&eachStudent.certifications.linkedin
//          &&eachStudent.certifications.github&& eachStudent.certifications.mockInterview?onTrack:offTrack}</p>
                
//                         <br>
//                         </br>
//                         <br></br>
//                         <div>

//                             <a><button onClick={() => SetShows(!shows)}>ShowMore.....</button></a>
//                             <a><button onClick={() => SetShows(!shows)}>ShowLess.....</button></a>
//                             {shows && (
//                                 <div id="table"><table id={eachStudent.id}>
//                                     <th className="top1">CodeWars</th>

//                                     <th className="top2">Scores</th>

//                                     <th className="top3">Certifications</th>
//                                     <tbody>
//                                         <tr>
//                                             <td>CurrentTotal:{eachStudent.codewars.current.total}%</td>
//                                             <td>Assignments:{eachStudent.cohort.scores.assignments}%</td>

//                                             <td>Resume:{hasIt}</td>
//                                         </tr>
//                                         <tr><td>LastWeek:{eachStudent.codewars.current.lastWeek}</td>
//                                             <td>Projects:{eachStudent.cohort.scores.projects}%</td>

//                                             <td>LinkedIn :{hasIt}</td></tr>
//                                         <tr><td>Goal:{eachStudent.codewars.goal.total}</td>
//                                             <td>Assesment:{eachStudent.cohort.scores.assessments}%</td>

//                                             <td>Mock Interview:{doesntHaveIt}</td></tr>

//                                         <tr><td>Percent of Goal {(eachStudent.codewars.current.total /eachStudent.codewars.goal.total*100).toFixed(0)}%</td>
//                                             <td></td>

//                                             <td>GitHub:{doesntHaveIt}</td></tr>

//                                     </tbody>


//                                 </table></div>)}</div>

                       
//                     </section>
//                     <div id={eachStudent.id}>< OneOnOneForm id={eachStudent.id} /></div>





//                 </div></>);
//     })

//     return (<div className="winter2026" hidden="hidden" > {studentsToRender}</div>);

// }


// export default StudentCardsWinter26