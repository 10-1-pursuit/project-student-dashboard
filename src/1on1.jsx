import { useState } from "react";

// function commentSection(){

//     return(<div><p>*{commenter} {comment}</p></div>);
// }

export default function OneOnOneForm(){

    const[commenter,SetCommenter]=useState("");

    const handleChange=(e)=>{SetCommenter(e.target.value)}

    const[comment,SetComment]=useState('');

    const commentChange=(e)=>{SetComment(e.target.value)}
 

    return(
        <div className="notes">
            <h1>1-on-1-notes</h1>

            <form>
                <label >Commenter Name: </label>
                <input type="text" onChange={handleChange} ></input>
                <label>Comment:</label>
                <input type="text" onChange={commentChange}></input>
                

                {/* <button type="button" onClick={commentSection}>Add Note</button> */}
                


            </form>
            
           
           
            <section><section><p className="comments">{commenter} {comment}</p></section></section> 

        </div>
       
        
       
         
    
    
    
    );

    
}



