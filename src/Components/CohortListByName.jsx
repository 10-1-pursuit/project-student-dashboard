import { useState } from "react"




// const CohortListByName=({eachCohortToListObjToRender})=>{
//     // console.log(eachCohortToListObjToRender)
//     const[winter2025, setWinter2025]=useState("Winter 2025")

//     function setCohortList(){
//      if(eachCohortToListObjToRender.cohort.cohortCode === "Winter2025"){
//         return(setWinter2025(
//             <div>
//             <h3></h3>
//             <img src={eachCohortToListObjToRender.profilePhoto} alt=""/>
//             <h3>{eachCohortToListObjToRender.names.preferredName} {eachCohortToListObjToRender.names.middleName.charAt(0)}. {eachCohortToListObjToRender.names.surname}</h3>
//             <h4>{eachCohortToListObjToRender.username}</h4>
//             <h4>{eachCohortToListObjToRender.dob}</h4>
//             <h4>{eachCohortToListObjToRender.cohort.cohortStartDate}</h4>
//           </div>
//         ))
//      }
//     }
//     return(
//         <div>
//             <h3 onClick={(synthEvent)=>{console.log({eachCohortToListObj})}}>{winter2025}</h3>
//             </div>
//     )

// }

// export default CohortListByName