import React, { useState } from "react";

function Comment() {
  const [commentName, setCommentName] = useState("");
  const [comment, setComment] = useState("");

  const [commentArray, setCommentArray] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    let newCommentArray = [...commentArray, { commentName, comment }];

    setCommentArray(newCommentArray);
    setCommentName("");
    setComment("");
  }

  return (
    <div className="comment-container">
      <h3> Notes </h3>
      <div className="comment-form">
        <form onSubmit={handleSubmit}>
          <div className="comment-input">
            <label>Commenter </label>
            <input
              type="text"
              onChange={(event) => setCommentName(event.target.value)}
              value={commentName}
            />
          </div>
          <div className="comment-input">
            <label>Comment</label>
            <input
              type="text"
              onChange={(event) => setComment(event.target.value)}
              value={comment}
            />
          </div>

          <button className="comment-button">Add Notes</button>

          <ul className="comment-ul">
            {commentArray.map((element, index) => {
              return (
                <li key={index}>
                  {element.commentName} {`${element.comment}`}
                </li>
              );
            })}
          </ul>
        </form>
      </div>
    </div>
  );
}

export default Comment;
