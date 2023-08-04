import data from "../src/data/data.json"




function StudentCards() {

    const studentsToRender = data.map((eachStudent) => {
        return (
            <div className="layout">

                <section><img src={eachStudent.profilePhoto} /></section>

                <section><p className="student-name"> {eachStudent.names.preferredName}  {eachStudent.names.middleName} {eachStudent.names.surname}</p>
                    <p>{eachStudent.username}</p>
                    <p>BirthDay : {eachStudent.dob}</p>
                    <br>
                    </br>
                    <br></br>

                    <a>ShowMore.....</a>

                    <div id="table" hidden="hidden"><table>
                        <th>CodeWars</th>
                        <th></th>
                        <th>Scores</th>
                        <th></th>
                        <th>Certifications</th>
                        <tbody>
                            <tr>
                                <td>CurrentTotal</td> <td></td>
                                <td>Assignments</td>
                                <td></td>
                                <td>Resume</td>
                            </tr>
                            <tr><td>LastWeek</td> <td></td>
                                <td>Project</td>
                                <td></td>
                                <td>LinkedIn</td></tr>
                            <tr><td>Goal</td> <td></td>
                                <td>Assesment</td>  <td></td>
                                
                                <td>Mock Interview</td></tr>
                            <tr><td>Percent Of Goal Achieved</td>
                                <td></td>  
                                <td>GitHub</td>
                            </tr>
                        </tbody>

                    </table></div>
                </section>





            </div>);
    })

    return (<>{studentsToRender}</>);

}


export default StudentCards