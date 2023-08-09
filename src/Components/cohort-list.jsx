import data from "../data/data.json";

const StudentCohortsSet = data.reduce((Cohorts, studentObj) => {
    const modifiedValue = studentObj.cohort.cohortCode.replace(/(\d+)/, ' $1'); // Add space before year
    Cohorts.add(modifiedValue);
    return Cohorts;
}, new Set());

const seasonOrder = {
    'Winter ': 3,
    'Fall ': 2,
    'Summer ': 1,
    'Spring ': 0
};

const StudentCohortsArray = [...StudentCohortsSet].sort((a, b) => {

    const yearA = parseInt(a.match(/\d+/)[0]);
    const yearB = parseInt(b.match(/\d+/)[0]);
    const seasonA = a.match(/(\D+)/)[0];
    const seasonB = b.match(/(\D+)/)[0];

    if (yearA === yearB) {
        return seasonOrder[seasonB] - seasonOrder[seasonA];
    }

    return yearB - yearA
});

// console.log(StudentCohortsArray);

const ListOfCohorts = StudentCohortsArray.map((cohort) =>
    <h3 key={StudentCohortsArray.indexOf(cohort)} className="list-item">{cohort}</h3>
);



const CohortList = () => {
    return <>{ListOfCohorts}</>
}
export default CohortList;