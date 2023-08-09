import React from 'react';
import StudentCard from './data/StudentCard'
import Cohort from './data/Cohort'
import'./index.css'

// import CommonContext from './data/Common/';

// const selectedCohort = { 
//   activeCohort: null 
// };

function App() {
  return (
    // <CommonContext.Provider value={ selectedCohort, setSelectedCohort }>
      <div>
          <div class="container">
              <a href="#" class="logo"></a>
        <h1>Student Dashboard</h1>
        </div>
        <Cohort /> 
    
        <StudentCard />    
      </div>
     
  );
}

export default App;
