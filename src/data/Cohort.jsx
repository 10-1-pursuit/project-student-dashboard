import React, { useState } from 'react';
import studentsData from './data.json';
import StudentCard from './StudentCard';

const Cohort = () => {
  const [selectedCohort, setSelectedCohort] = useState(null);
  const uniqueCohorts = [...new Set(studentsData.map(student => student.cohort.cohortCode))];

  const toggleCohort = (cohortCode) => {
    setSelectedCohort(selectedCohort === cohortCode ? null : cohortCode);
  };

  const fellowsToRender = studentsData
    .filter(student => !selectedCohort || student.cohort.cohortCode === selectedCohort)
    .map(eachFellowObj => (
      <div key={eachFellowObj.id}>
        <h4>Name: {eachFellowObj.names.preferredName}</h4>
      </div>
    ));

  return (
    <div className='cohorts-container'>
      <div className='cohorts-column'>
        <h2>Choose a Class by Start Date</h2>
        <div
          key="all"
          className={`student-cohort ${selectedCohort === null ? 'active' : ''}`}
          onClick={() => toggleCohort(null)}
        >
          <h3>All Students</h3>
        </div>
        {uniqueCohorts.map(cohortCode => (
          <div
            key={cohortCode}
            className={`student-cohort ${selectedCohort === cohortCode ? 'active' : ''}`}
            onClick={() => toggleCohort(cohortCode)}
          >
            <h3>{cohortCode}</h3>
          </div>
        ))}
      </div>
      <StudentCard selectedCohort={selectedCohort} />
      <div className="fellows-list">
        {fellowsToRender}
      </div>
    </div>
  );
};

export default Cohort;
