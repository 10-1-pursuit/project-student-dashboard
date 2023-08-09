// import data from "./data/data.json";
import { AllStudentsPreview } from "./Components/Student-Info.jsx";
import ViewInfo from "./Components/view-info";
import CohortList from "./Components/cohort-list";

// const[viewTitle, setViewTitle] = useState("All Students");
// const[cohortCount, setCohortCount] = useState(0);
// const cohortSelection = (e) => {
//   viewTitle = e.target.innerText;


function App() {
  return (
    <>
      <h1 className="landing-title">Student Dashboard</h1>

      <section className="main-container">
        <div className="cohort-selection">
          <h2 className="list-title">Choose a Class by Start Date</h2>
          <h3 key={0.5} className="list-item">All Students</h3>
          <CohortList />
        </div>
        
        <section className="student-card-list">
        <ViewInfo />
          {AllStudentsPreview}
          </section>
      </section>
    </>
  );
}

export default App;
