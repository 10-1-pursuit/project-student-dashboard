import { useState } from "react";

import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Students from "./Components/Students/Students";

import data from "./data/data.json";
import "./App.css";


function App() {

  //console.log(data);

  const [studentArray, setstudentArray] = useState(alphabeticalOrder(data));
  //console.log(studentArray);

  const [cohortArray, setCohortArray] = useState(parsedData());
  //console.log(cohortArray)

  function alphabeticalOrder(data) {
    return data.sort((a,b) => {
      const nameA = a.names.preferredName.toUpperCase();
      const nameB = b.names.preferredName.toUpperCase();

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  }

  function parsedData() {
    let uniqueCohortArray = [];

    data.forEach((item) => {
      if (uniqueCohortArray.indexOf(item.cohort.cohortCode) === -1) {
        uniqueCohortArray.push(item.cohort.cohortCode);
      }
    });
    //console.log(uniqueCohortArray);

    let parsedCohortArray = [[], []];

    uniqueCohortArray.forEach((item) => {
      //console.log(item);
      let cohortDate = Number(item.slice(item.length - 4));
      //console.log(cohortDate);
      let season = item.slice(0, item.length - 4);
      //console.log(season);

      if (cohortDate === 2025) {
        let dataObj = {
          year: cohortDate,
          season,
        };
        parsedCohortArray[0].push(dataObj);
      }
      if (cohortDate === 2026) {
        let dataObj = {
          year: cohortDate,
          season,
        };
        parsedCohortArray[1].push(dataObj);
      }
    });
    //console.log(parsedCohortArray);
    let sortedNestedArrayData = [];

    function orderByYearAndSeason(data, year) {
      let resultData = [];

      data.forEach((item, index) => {
        if (item.year === year && item.season === "Winter") {
          resultData[0] = item;
        }
        if (item.year === year && item.season === "Fall") {
          resultData[1] = item;
        }
        if (item.year === year && item.season === "Summer") {
          resultData[2] = item;
        }
        if (item.year === year && item.season === "Spring") {
          resultData[3] = item;
        }
      })
      return resultData;
    }
    parsedCohortArray.forEach((item, index) => {
      let year = index === 0 ? 2025 : 2026;
      sortedNestedArrayData.push(orderByYearAndSeason(item, year));
    });
    return sortedNestedArrayData.flat();
  }

  function handleSortClick(season, year) {
     let joinedValue = `${season}${year}`;

     let filterData = data.filter(item => {
      return item.cohort.cohortCode === joinedValue;
     })
     //console.log(filterData);
     let sortedData = alphabeticalOrder(filterData);
     setstudentArray(sortedData);
  }

  function handleShowAllStudents() {
      //console.log("click");
      setstudentArray(data);
  }

  return (
    <div>
      <Header />
      <section className="container-grid">
        <Sidebar 
           cohortArray={cohortArray}
           handleSortClick={handleSortClick}
           handleShowAllStudents={handleShowAllStudents} />
        <Students studentArray={studentArray} />
      </section>
    </div>
  );
}

export default App;
