import React, { useState } from "react";

const OneOnOneSection = ({ student, commenter, comment, handleCommenterChange, handleCommentChange, handleSubmit, notes }) => {
    return (
        <div className="one-on-one-section">
            <h3>1-on-1 Notes</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="commenter">Commenter Name:</label>
                <input type="text" id="commenter" value={commenter} onChange={handleCommenterChange} />

                <label htmlFor="comment">Comment:</label>
                <textarea id="comment" value={comment} onChange={handleCommentChange} />
                <button type="submit">Add Note</button>
            </form>
            <ul>
                {student.notes.map((note, index) => (
                    <li key={`new-${index}`}>
                        <strong>{note.commenter} - </strong>
                        "{note.comment}"
                    </li>
                ))}
                {notes.map((note, index) => (
                    <li key={index}>
                        <strong>{note.commenter} - </strong>
                        "{note.comment}"
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default OneOnOneSection