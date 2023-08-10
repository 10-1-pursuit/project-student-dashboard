import { useState } from "react"
import data from '../data/data.json'



const CohortListByName=()=>{
    // Javasripttuturial.net way below
    const uniqueCohortList = [...new Map(data.map((d)=>[d.cohort.cohortCode, d])).values()]
     console.log(uniqueCohortList) 
    const cohortListForHomePage = uniqueCohortList.map(
        (eachCohortNameForList)=>{
        return(<div>
            <h4 onClick={(synthEvent)=>{console.log(synthEvent.target.innerText)}}>{eachCohortNameForList.cohort.cohortCode}</h4>
        </div>)
        }
    )


    
    return(<>{cohortListForHomePage}</>)


}

export default CohortListByName







// const[winter2025, setWinter2025]=useState("")
//     const[winter2025Toggle, setWinter2025Toggle]=useState(false)
//     const[textForTitleToggle, settextForTitleToggle]=useState("Winter 2025")

//     function handleWinter2025Toggle(){
//         setWinter2025Toggle(!winter2025Toggle)
//         console.log(winter2025Toggle)
//         if(winter2025Toggle === false){
//            settextForTitleToggle("Winter 2025") 
//         }else settextForTitleToggle("All Students")
//     }

//     function handleWinter2025CohortList(){
//      if(eachCohortToListObjToRender.cohort.cohortCode === "Winter2025"){
//         return(setWinter2025(
//             <div>
//             <img src={eachCohortToListObjToRender.profilePhoto} alt=""/>
//             <h3>{eachCohortToListObjToRender.names.preferredName} {eachCohortToListObjToRender.names.middleName.charAt(0)}. {eachCohortToListObjToRender.names.surname}</h3>
//             <h4>{eachCohortToListObjToRender.username}</h4>
//             <h4>Birthday: {eachCohortToListObjToRender.dob}</h4>
//             <h4>Start Date: {eachCohortToListObjToRender.cohort.cohortStartDate}</h4>
//           </div>
//         ))
//      }
//     }
//     return(
//         <div>
//             <h3 onClick={(synthEvent)=>{handleWinter2025Toggle(), handleWinter2025CohortList()}}>{textForTitleToggle}{winter2025}</h3>
//             </div>
//     )