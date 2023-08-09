import TopBar from "./TopBar";
import StudentList from "./StudentList";
import  "./App.css"

//  import StudentCards from "./StudentCard";
 import StudentCardsAll from "./StudentCardAllStudents";
import data from "../src/data/data.json"

import StudentCardsFall25 from "./StudenCardFall2025";

import StudentCardsSummer26 from "./StudentsSummer2026";
import StudentCardsSpring26 from "./StudentsSpring2026";
import StudentCardsFall26 from "./StudentCardsFall2026";
import StudentCardsSummer25 from "./StudentCardSummer25";
import StudentCardSpring25 from "./StudentCardSpring2025"
import StudentCardsWinter25 from "./StudentCardsWinter2025";
import WinterClone from "./Winter2026Clone";

console.log(data)




  

function App() {

  function Comments(){


    return (<>

    <div>



{/* <div>{CommentUpdater}</div> */}




    </div>
    
    
    
    
    
    
    
    </>);




  }
const CommenterUpdater= document.querySelector('input#commenter')
 const CommentUpdater= document.querySelector('input#comment')
  return (
    <>
      <TopBar/>
      <main className="container">
          <section id="Student-List" ><StudentList/><br></br>
          
          </section>
        
       
          
          <section key="card"id="Student-Card">
         <section> <StudentCardsAll /></section>
         <section><WinterClone/></section>
      <section><StudentCardsFall26/></section>
         
          
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
