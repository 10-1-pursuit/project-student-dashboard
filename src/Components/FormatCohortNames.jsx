const FormatCohortNames = ({ studentsData }) => {
    const formatCohortCode = (cohortCode) => {
      if (cohortCode.includes(' ')) {
        return cohortCode;
      }
  
      const season = cohortCode.slice(0, -4);
      const year = cohortCode.slice(-4);
      return `${season} ${year}`;
    };
  
    const sortedCohortCodes = [];
    studentsData.forEach((student) => {
        const formattedCode = formatCohortCode(student.cohort.cohortCode);
        if (!sortedCohortCodes.includes(formattedCode)) {
            sortedCohortCodes.push(formattedCode);
        }
    })

    sortedCohortCodes.sort((a, b) => {
        const seasonOrder = ['Winter', 'Fall', 'Summer', 'Spring'];
        const seasonA = a.slice(0, -4);
        const seasonB = b.slice(0, -4);
        const yearA = parseInt(a.slice(-4));
        const yearB = parseInt(b.slice(-4));

        if (seasonOrder[seasonA] !== seasonOrder[seasonB]) {
            return seasonOrder[seasonA] - seasonOrder[seasonB];
        } else {
            return yearB - yearA
        }
    })
  
    return (
      <div>
        <h3>Choose a class by Start Date</h3>
        <ul>
          {sortedCohortCodes.map((cohortCode) => {
            return <li key={cohortCode}>{formatCohortCode(cohortCode)}</li>;
          })}
        </ul>
      </div>
    );
  };
  
  export default FormatCohortNames;