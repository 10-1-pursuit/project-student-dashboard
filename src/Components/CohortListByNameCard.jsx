import { useState } from "react"
import data from '../data/data.json'


const CohortListByNameCard=()=>{
    const uniqueCohortList = [...new Map(data.map((d)=>[d.cohort.cohortCode, d])).values()]
    const cohortListForHomePage = uniqueCohortList.map(
        (eachCohortNameForList)=>{
            // console.log(eachCohortNameForList)
        return(<div>
            <h4 onClick={(synthEvent)=>{console.log(synthEvent.target.innerText)}}>{eachCohortNameForList.cohort.cohortCode}</h4>
        </div>)
        }
    )
    return(<>{cohortListForHomePage}</>)
}

export default CohortListByNameCard







