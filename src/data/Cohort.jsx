import React, { useState } from 'react';
import studentsData from './data.json';
import StudentCard from './StudentCard';

const Cohort = () => {
  const [selectedCohort, setSelectedCohort] = useState(null);
  const uniqueCohorts = [...new Set(studentsData.map(student => student.cohort.cohortCode))];

  const toggleCohort = (cohortCode) => {
    if (selectedCohort === cohortCode) {
      setSelectedCohort(null);
    } else {
      setSelectedCohort(cohortCode);
    }
  };

  const cohortsWithStudentCount = uniqueCohorts.map(cohortCode => ({
    code: cohortCode,
    studentCount: studentsData.filter(student => student.cohort.cohortCode === cohortCode).length
  }));

  const totalStudentCount = studentsData.length;

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
          <h3>All Students ({totalStudentCount} students)</h3>
        </div>
        {cohortsWithStudentCount.map(cohort => (
          <div
            key={cohort.code}
            className={`student-cohort ${selectedCohort === cohort.code ? 'active' : ''}`}
            onClick={() => toggleCohort(cohort.code)}
          >
            <h3>
              {cohort.code}{' '}
              {selectedCohort === cohort.code && `(${cohort.studentCount} students)`}
            </h3>
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
