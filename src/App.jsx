import React from "react";
import "./index.css";
import { useState } from "react";
 import data from "./data/data.json";
import Header from "./Components/Header";
import DisplayStudent from "./Components/Students";
import SideBar from "./Components/SideBar";
// import DisplayCohorts from "./Components/ShowMore/studentsDatails";

function App() {

   const [studentList, setstudentList] = useState(SortedInAlphabeticalOrder(data));
    // const [cohortArray, setcohortArray] = useState([])

   function SortedInAlphabeticalOrder(data) {
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
   
  

  return (
    <>
      <Header />
      <section className="section-divider">
        <SideBar />
        <DisplayStudent studentList={studentList} />
      </section>
    </>
  );
}

export default App;
