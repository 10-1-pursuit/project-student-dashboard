// import data from "./data/data.json"
// import './index.css'

// console.log(data)
// console.log("data[0] :", data[22].cohort.cohortCode)

// function App() {

//   const studentsToRender = data.map(
//     (eachStudentObj) => {
//       return (<h4>{eachStudentObj.username}</h4>)
//     }
//   )


//   return (
//     <div>
//       <h1 className="header"><br />Student Dashboard<br /></h1>

//       <div class="img">
//         <img src="https://media1.giphy.com/media/L3opU3G1YfiuggUC60/giphy.gif?cid=790b7611ikzy8ugz1uzgum0stxhztqvqbux7ikeoustb1hxm&ep=v1_stickers_search&rid=giphy.gif&ct=s"
//           alt="Moving Ski Mask" />
//       </div>

//       <h3> {data[22].names.preferredName} <br /> {data[22].id}</h3>

//       <h6 className="footer">copyright@2023</h6>

//     </div>
//   );
// }

// export default App;

import React from "react";
import data from "./data/data.json";
import './index.css';
import StudentList from "./StudentList";
import StudentCard from "./StudentCard";

function App() {
  return (
    <div className="grid-container">
      <h1 className="header"><br />Student Dashboard<br /></h1>

      <div className="img">
        <img src="https://media1.giphy.com/media/L3opU3G1YfiuggUC60/giphy.gif?cid=790b7611ikzy8ugz1uzgum0stxhztqvqbux7ikeoustb1hxm&ep=v1_stickers_search&rid=giphy.gif&ct=s"
          alt="Moving Ski Mask" />
      </div >

      <div className="sCardArea">
        {/* Pass the 'data' prop to the StudentList component */}
        {/* <StudentList data={data} /> */}
        <div>
          <StudentCard data={data} />
        </div>
      </div>

      <h3 className="sidebar"> {data[22].names.preferredName} <br /> {data[22].id}</h3>

      <h6 className="footer">copyright@2023</h6>
    </div>
  );
}

export default App;
