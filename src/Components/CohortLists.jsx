import React from "react";

const CohortList = ({ cohorts, selectCohort }) => {
    const cohortsInOrder = cohorts.map(cohort => {
        const season = cohort.slice(0, -4)
        const year = cohort.slice(-4)
        return `${season} ${year}`
    }).sort((a, b) => {
        const seasonOrder = ['Winter', 'Fall', 'Summer', 'Spring'];
        const seasonA = a.split(' ')[0];
        const seasonB = b.split(' ')[0];
        const yearA = parseInt(a.split(' ')[1]);
        const yearB = parseInt(b.split(' ')[1]);

        if (yearA !== yearB) {
            return yearB - yearA;
        }

        return seasonOrder.indexOf(seasonA) - seasonOrder.indexOf(seasonB)
    })

    return (
        <div className="cohort-list">
            <h3>CoHorts</h3>
            <ul>
                <li onClick={() => selectCohort(null)}>All Students</li>
                {cohortsInOrder.map((cohort, index) => (
                    <li key={index} onClick={() => selectCohort(cohort)}>{cohort}</li>
                ))}
            </ul>
        </div>
    )
}

export default CohortList