import { useState } from "react"
import "../studentCard.css"
import StudentDetails from "./StudentDetails"

const StudentCard = ({ eachStudentObj }) => {

    const [seeMoreToggle, setSeeMoreToggle] = useState(false)
    // console.log(seeMoreToggle)

    const [seeMoreOrLessTxt, setSeeMoreOrLessTxt] = useState("See More ...")


    function handleSeeMoreToggle() {
        setSeeMoreToggle(!seeMoreToggle)
        if (seeMoreToggle === false) {
            setSeeMoreOrLessTxt("See More...")

        } else {
            setSeeMoreOrLessTxt("See Less...")
        }

    }


    // console.log({ eachStudentObj })




    return (
        <div key={eachStudentObj.id} className="Student">
            <img src={eachStudentObj.profilePhoto} alt={`${eachStudentObj.names.preferredName}`} />
            <h4>{eachStudentObj.names.preferredName}</h4>
            <p>{eachStudentObj.username}</p>
            <span>Birthday: {eachStudentObj.dob}</span> <br />
            <a onClick={(sythEvent) => { handleSeeMoreToggle() }} >
                {seeMoreOrLessTxt}

            </a>
            {/* {seeMoreToggle? <h1>Nicki it'll be fine</h1> : <></>} */}
            {seeMoreToggle ?
                (<StudentDetails />)
                :
                <></>}
        </div>)
}


export default StudentCard