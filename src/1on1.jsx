import { useState } from "react";



export default function OneOnOneForm(){
    function handleCommentSection(){
        const Results=document.querySelector('p#result')

        Results.removeAttribute('hidden')
    }

    const[commenter,SetCommenter]=useState("");
    

    const handleChange=(e)=>{SetCommenter(e.target.value)}

    const[comment,SetComment]=useState('');

    const commentChange=(e)=>{SetComment(e.target.value)}
    // const[array,SetArray]=useState([]);

    
 

    return(
        <>
        <div className="notes">
            <h1>1-on-1-notes</h1>

            <form>
                <label >Commenter Name: </label>
                <input id="commenter" type="text" onChange={handleChange}  ></input>
                <label>Comment:</label>
                <input  id="comment" type="text" onChange={commentChange} ></input><br>
                </br>
                
                

                 <button type="button" onClick={handleCommentSection}>Add Note</button> <br></br>
                

                 <p id="result" hidden="hidden">*{commenter}  {comment}</p>
            </form>
            
           
           
            {/* <section><section><p className="comments">{commenter} {comment}</p></section></section>  */}

            {/* <section><p>{SetArray}</p></section> */}
            {/* <div>{commentSection}</div> */}
           

        </div>
       
        
       
         
        </>
    
    
    );

    
}



