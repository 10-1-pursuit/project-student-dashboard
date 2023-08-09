import { useState } from "react";
import { useRef } from 'react';



export default function OneOnOneForm(){
//     function handleCommentSection(){
//         const Results=document.querySelector('p#result')

//         Results.removeAttribute('hidden')
//     }

//     function hCommentSection(e){
//         e.preventDefault();




//         return(<div><p>{SetCommenter} Comment:{SetComment}</p></div>);
//     }

//     const[commenter,SetCommenter]=useState("commenter");
    

//     const handleChange=(e)=>{SetCommenter(e.target.value)}

//     const[comment,SetComment]=useState('comment');

//     const commentChange=(e)=>{SetComment(e.target.value)}
//     // const[array,SetArray]=useState([]);

    
 

//     return(
//         <>
//         <div className="notes">
//             <h1>1-on-1-notes</h1>

//             <form>
//                 <label >Commenter Name: </label>
//                 <input id="commenter" type="text" value={commenter} onChange={handleChange}  ></input>
//                 <label>Comment:</label>
//                 <input  id="comment" value={comment} type="text" onChange={commentChange} ></input><br>
//                 </br>
                
                

//                  <button type="button" onClick={handleCommentSection}>Add Note</button> <br></br>
                

//                  {/* <p id="result" hidden="hidden">*{commenter}  {comment}</p> */}
//             </form>
//             <section>
// <div id="recieving">

//     <p>{SetCommenter}  {SetComment}</p>


// </div>

//             </section>
           
           
//             {/* <section><section><p className="comments">{commenter} {comment}</p></section></section>  */}

//             {/* <section><p>{SetArray}</p></section> */}
//             {/* <div>{commentSection}</div> */}
           

//         </div>
       
        
       
         
//         </>
    
    
//     );

const [value, setValue] = useState("");
const[commenter,SetCommenter]=useState('')
const[empty,SetEmpty]=useState('')
const[blank,SetBlank]=useState('')

const inputReset =useRef(null);

const [arr, setArr] = useState([]);

const submitValue = () => {
  const todoItem = {
    todo: value,
    todo1:commenter
  };
  setArr((prevArr) => [...prevArr, todoItem]);
  inputReset.current.value = ""; // resets input field
};
const deleteValue = () => {
  const todoItem = {
    todo: empty,
    todo1:blank
  };
  setArr(() => [todoItem]);
  
};
return (
  <div className="App">
    <h1>1 ON 1 SECTION</h1><br></br>
    <label>Commenter:</label><br></br>
    <input ref={inputReset} onChange={(e) => setValue(e.target.value)} /><br></br>
    <label>Comment</label><br></br>
    <input ref={inputReset} onChange={(e) => SetCommenter(e.target.value)} />
    <button onClick={submitValue}>Add New NOTE</button>
    <button onClick={deleteValue}>Clear Notes</button>
    
    {arr.map(({ todo ,todo1}) => (
      <div key={Math.random()*1000}>{todo} {todo1}</div>
    ))}
  </div>
);
}

    




