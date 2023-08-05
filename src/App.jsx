import data from "./data/data.json";
import { studentPreviewInfo } from "./Components/Student-Info.jsx";


function App() {
  return (
    <div>
      <h1 id="landing-title">Student Dashboard</h1>
      <div> {studentPreviewInfo} </div>
    </div>
  );
}

export default App;
