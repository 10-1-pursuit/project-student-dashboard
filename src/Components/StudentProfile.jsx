import { useState } from "react";

const StudentProfile = ({ student }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [oneOnOneNotes, setOneOnOneNotes] = useState(student.notes);
  const [commenterName, setCommenterName] = useState("");
  const [comment, setComment] = useState("");
  const [notesCount, setNotesCount] = useState(student.notes.length);

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };

  const calculatePercentage = (current, goal) => {
    return ((current / goal) * 100).toFixed(2);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      commenter: commenterName,
      comment: comment,
    };
    setOneOnOneNotes([...oneOnOneNotes, newNote]);
    setCommenterName("");
    setComment("");
    setNotesCount(notesCount + 1);
  };

  const calculateOnTrackStatus = (student) => {
    const hasResumeCertification = student.certifications.resume;
    const hasLinkedInCertification = student.certifications.linkedin;
    const hasGitHubCertification = student.certifications.github;
    const hasMockInterviewCertification = student.certifications.mockInterview;
    const currentCodeWarsScore = student.codewars.current.total;

    return (
      hasResumeCertification &&
      hasLinkedInCertification &&
      hasGitHubCertification &&
      hasMockInterviewCertification &&
      currentCodeWarsScore > 600
    );
  };

  const formatCommenterName = (name) => {
    const names = name.split(" ");
    const firstName =
      names[0].charAt(0).toUpperCase() + names[0].slice(1).toLowerCase();
    const lastName = names[names.length - 1].charAt(0).toUpperCase() + ".";

    return firstName + " " + lastName;
  };

  return (
    <li className="student-profile">
      <div className="student-image-container">
        <img
          className="student-image"
          src={student.profilePhoto}
          alt={student.names.preferredName}
        />
      </div>
      <div className="student-details">
        <h3>{student.names.preferredName}</h3>
        <p>Email: {student.username}</p>
        <p>Birthday: {student.dob}</p>
        <p>
          {calculateOnTrackStatus(student) ? "On Track" : "Off Track"} to
          Graduate
        </p>
        <button onClick={toggleDetails} className="show-button">
          {isOpen ? "Show Less..." : "Show More..."}
        </button>
        {isOpen && (
          <div>
            <div className="details-group">
              <div className="details-left">
                <h3>Codewars</h3>
                <p>Current Total: {student.codewars.current.total}</p>
                <p>Last Week: {student.codewars.current.lastWeek}</p>
                <p>Goal: {student.codewars.goal.total}</p>
                <p>
                  Percentage of Goal Achieved:{" "}
                  {calculatePercentage(
                    student.codewars.current.total,
                    student.codewars.goal.total
                  )}
                  %
                </p>
              </div>
              <div className="details-center">
                <h3>Scores</h3>
                <p>
                  Assignments:{" "}
                  {(student.cohort.scores.assignments * 100).toFixed(2)}%
                </p>
                <p>
                  Projects: {(student.cohort.scores.projects * 100).toFixed(2)}%
                </p>
                <p>
                  Current Total:{" "}
                  {(student.cohort.scores.assessments * 100).toFixed(2)}%
                </p>
              </div>
              <div className="details-right">
                <h3>Certifications</h3>
                <p>Resume: {student.certifications.resume ? "✅" : "❌"}</p>
                <p>LinkedIn: {student.certifications.linkedin ? "✅" : "❌"}</p>
                <p>Github: {student.certifications.github ? "✅" : "❌"}</p>
                <p>
                  Mock Interview:{" "}
                  {student.certifications.mockInterview ? "✅" : "❌"}
                </p>
              </div>
            </div>
            <hr />

            <h3>1-on-1 Notes</h3>
            <p>Total Notes: {notesCount}</p>
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label>
                  Commenter Name:
                  <input
                    type="text"
                    value={commenterName}
                    onChange={(e) => setCommenterName(e.target.value)}
                  />
                </label>
              </div>
              <div className="form-group">
                <label>
                  Comment:
                  <input
                    type="text"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                </label>
              </div>
              <button type="submit">Add Note</button>
            </form>

            <hr />

            <h3>Previous Notes</h3>
            <ul>
              {oneOnOneNotes.map((note, index) => {
                return (
                  <li key={index}>
                    <span>{formatCommenterName(note.commenter)} says, </span>
                    <span>"{note.comment}"</span>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </li>
  );
};

export default StudentProfile;
