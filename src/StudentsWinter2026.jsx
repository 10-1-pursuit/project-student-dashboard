import { useState } from "react"
import data from "../src/data/data.json"
import OneOnOneForm from "./1on1"




function StudentCardsWinter26() {


    const studentsToRender = data.map((eachStudent) => {


        const [shows, SetShows] = useState('true')
        const [hasIt, SetHasIt] = useState("✅");
        const [doesntHaveIt, SetDoenstHaveIt] = useState("❌")

        if (eachStudent.cohort.cohortCode === "Winter2026")




            return (
                <div className="layout" key={Math.random() * 100000}>

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
                                <div id="table"><table id={eachStudent.id}>
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

                                        <tr><td>Percent of Goal</td>
                                            <td></td>

                                            <td>GitHub:{doesntHaveIt}</td></tr>

                                    </tbody>


                                </table></div>)}</div>

                       
                    </section>
                    <div id={eachStudent.id}>< OneOnOneForm id={eachStudent.id} /></div>





                </div>);
    })

    return (<div className="winter2026" hidden="hidden" > {studentsToRender}</div>);

}


export default StudentCardsWinter26