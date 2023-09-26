import React, { useState } from "react";
import data from "./data/data.json";
import "./App.css";
import Header from "./Components/Header"
import DisplayStudent from "./Components/DisplayStudent";
import DisplayCohortCode from "./Components/DisplayCohortCode";


function App() {
  const [studentList, setStudentList] = useState(SortedDataInOrder(data));

  const [cohortList, setCohortList] = useState(parsedData());

  function SortedDataInOrder(data) {
    return data.sort((a, b) => {
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

    let parsedCohortArray = [[], []];

    uniqueCohortArray.forEach((item) => {
      let cohortDate = Number(item.slice(item.length - 4));
      let season = item.slice(0, item.length - 4);

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

    let sortedNestedArrayData = [];

    function orderByYearAndSeason(data, year) {
      let resultData = [];

      data.forEach((item) => {
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
      });

      return resultData;
    }

    parsedCohortArray.forEach((item, index) => {
      let year = index === 0 ? 2025 : 2026;

      sortedNestedArrayData.push(orderByYearAndSeason(item, year));
    });

    return sortedNestedArrayData.flat();
  }

  function handleSortedClick(season, year) {

    let joinedValue = `${season}${year}`;
   
    let filterData = data.filter((element) => {
      return element.cohort.cohortCode === joinedValue;
    });

    let sortedData = SortedDataInOrder(filterData);

    setStudentList(sortedData);
  }

  function showAllStudents() {
    setStudentList(data);
  }


  return (
    <>
      <Header />
      <section className="section-divider .row .col-sm-4 .col-sm-8 ">
        <DisplayCohortCode
          cohortList={cohortList}
          handleSortedClick={handleSortedClick}
          showAllStudents={showAllStudents}
        />
        <DisplayStudent studentList={studentList} />
      </section>
    </>
  );
}

export default App;
