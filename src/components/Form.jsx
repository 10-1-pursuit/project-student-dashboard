import React from "react";
import { useState } from "react";
import "./form.css";

function Form() {
  const [commentorName, setCommentorName] = useState({
     commentor: "", comment: "",
  });

  const [comment, setComment] = useState("");

  const [commentArr, setCommentArr] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    let newCommentArr = [...commentArr, { commentorName, comment }];

    setCommentArr(newCommentArr);
    setCommentorName("");
    setComment("");
  }

  return (
    <div className="notes">
      <h4>1-on-1 Notes</h4>
      <form onSubmit={handleSubmit}>
        <div className="form">
          <label htmlFor="commentor-name">Commentor Name</label>
          <input
            type="text"
            name="commentor-name"
            id="commentor"
            onChange={(e) => setCommentorName(e.target.value)}
            value={commentorName}
          />
          <label htmlFor="comment">
            Comment
            <input
              type="text"
              name="comment"
              id="comment"
              onChange={(e) => setComment(e.target.value)}
              value={comment}
            />
          </label>
          <button>Add Note</button>
          <ul className="1-on-1 Notes">
            {commentArr.map((id, index) => {
              return (
                <li key={index}>
                  {id.commentorName} says {`"${id.comment}"`}
                </li>
              );
            })}
          </ul>
        </div>
      </form>
    </div>
  );
}
export default Form;
