import React, { useState } from 'react'
import "./OneOnOne.css"

function OneOnOne() {

    const [commenterName, setCommenterName] = useState("");
    const [comment, setComment] = useState("");
    const [commentArray, setCommentArray] = useState([]);

     function handleSubmit(e) {
        e.preventDefault();
        //console.log("click");

        let newCommentArray = [...commentArray, {commenterName, comment}];

        setCommentArray(newCommentArray);
        setCommenterName("");
        setComment("");
     }
     console.log(commentArray);

  return (
    <div className='one-on-one-container'>
        <h3>1-on-1 Notes</h3>
        <div className='one-on-one_form'>
            <form onSubmit={handleSubmit}>
                <div className='one-on-one_input'>
                    <label>Commenter Name</label>
                    <input 
                        type="text" 
                        onChange={(e) => setCommenterName(e.target.value)} 
                        value={commenterName}
                    />

                </div>
                <div className='one-on-one_input'>
                    <label>Comment</label>
                    <input 
                        type="text" 
                        onChange={(e) => setComment(e.target.value)} 
                        value={comment}
                    />

                </div>
                <button className='one-on-one_button'>Add Note</button>
                <ul className='one-on-one_ul'>
                    {
                        commentArray.map((item, index) => {
                            return (
                            <li key={index}>
                                {item.commenterName} says {`"${item.comment}"`}
                            </li>
                            );
                        })
                    }
                </ul>
            </form>
        </div>
    </div>
  )
}

export default OneOnOne