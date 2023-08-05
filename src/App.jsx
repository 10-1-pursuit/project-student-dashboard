import TopBar from "./TopBar";
import StudentList from "./StudentList";
import  "./App.css"
// import StudentCard from "./StudentCard";
 import StudentCards from "./StudentCard";
 import StudentCardsAll from "./StudentCardAllStudents";
import data from "../src/data/data.json"
import OneOnOneForm from "./1on1";
import StudentCardsFall25 from "./StudenCardFall2025";
import StudentCardsWinter26 from "./StudentsWinter2026";
import StudentCardsSummer26 from "./StudentsSummer2026";
import StudentCardsSpring26 from "./StudentsSpring2026";
import StudentCardsFall26 from "./StudentCardsFall2026";
import StudentCardsSummer25 from "./StudentCardSummer25";
import StudentCardSpring25 from "./StudentCardSpring2025"
import StudentCardsWinter25 from "./StudentCardsWinter2025";
console.log(data)




  

function App() {
  return (
    <>
      <TopBar/>
      <main className="container">
          <section id="Student-List" ><StudentList/><br></br><section><OneOnOneForm/></section></section>
          
          <section key="card"id="Student-Card"><StudentCardsAll key=""/>
          <section><StudentCards/></section>
          <section><StudentCardsFall26/></section>
          <section><StudentCardsWinter26/></section>
          <section><StudentCardsSummer26/></section>
          <section><StudentCardsSpring26/></section>
          <section><StudentCardsWinter25/></section>
           <section><StudentCardsFall25/></section> 
           <section><StudentCardsSummer25/></section>
           <section><StudentCardSpring25/></section>
          </section>



      </main>
    
    
    
    
    
    </>
  );
}

export default App;
