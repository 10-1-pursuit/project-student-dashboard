import { useState } from "react";

import Header from "./components/Header/Header.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Students from "./components/Students/Students.jsx";

import data from "./data/data.json";

import "./App.css";

function App() {
  const [studentArray, setStudentArray] = useState(alphabeticalOrder(data));

  const [cohortArray, setCohortArray] = useState(parsedData());

  function alphabeticalOrder(data) {
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
    // console.log(uniqueCohortArray);

    let parsedCohortArray = [[], []];

    uniqueCohortArray.forEach((item) => {
      let cohortDate = Number(item.slice(item.length - 4));
      let season = item.slice(0, item.length - 4);

      if (cohortDate === 2025) {
        let dataObj = {
          year: cohortDate,
          season
        };

        parsedCohortArray[0].push(dataObj);
      }

      if (cohortDate === 2026) {
        let dataObj = {
          year: cohortDate,
          season
        };

        parsedCohortArray[1].push(dataObj);
      }
    });

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
      });

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

    let filterData = data.filter((item) => {
      return item.cohort.cohortCode === joinedValue;
    });

    let sortedData = alphabeticalOrder(filterData);

    setStudentArray(sortedData);
  }

  function handleShowAllStudents() {
    setStudentArray(data);
  }

  return (
    <>
      <Header />
      <section className="container-grid">
        <Sidebar
          cohortArray={cohortArray}
          handleSortClick={handleSortClick}
          handleShowAllStudents={handleShowAllStudents}
        />
        <Students studentArray={studentArray} />
      </section>
    </>
  );
}

export default App;

//     return uniqueCohortArray;
//   }

// //   )
