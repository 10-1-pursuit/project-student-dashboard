import { useState } from 'react';

    const StudentProfile = ({ student }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [oneOnOneNotes, setOneOnOneNotes] = useState(student.notes);
    const [commenterName, setCommenterName] = useState('');
    const [comment, setComment] = useState('');

    const toggleDetails = () => {
      setIsOpen(!isOpen);
    }

    const calculatePercentage = (current, goal) => {
        return ((current / goal) * 100).toFixed(2);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const newNote = {
            commenter: commenterName,
            comment: comment
        }
        setOneOnOneNotes([...oneOnOneNotes, newNote]);
        setCommenterName('');
        setComment('');
    }

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
        )
      }

      const formatCommenterName = (name) => {
        const names = name.split(' ');
        const firstName = names[0].charAt(0).toUpperCase() + names[0].slice(1).toLowerCase();
        const lastName = names[names.length - 1].charAt(0).toUpperCase() + '.';

        return firstName + ' ' + lastName;
      }
  
    return (
        <li>
        <h3>{student.names.preferredName}</h3>
        <p>Email: {student.username}</p>
        <p>Birthday: {student.dob}</p>
        <img src={student.profilePhoto} alt={student.names.preferredName} />
        <p>{calculateOnTrackStatus(student) ? "On Track" : "Off Track"} to Graduate</p>
        <button onClick={toggleDetails}>{isOpen ? 'Show Less...' : 'Show More...'}</button>
        {isOpen && (
            <div>
                <h3>Codewars</h3>
                <p>Current Total: {student.codewars.current.total}</p>
                <p>Last Week: {student.codewars.current.lastWeek}</p>
                <p>Goal: {student.codewars.goal.total}</p>
                <p>Percentage of Goal Achieved: {calculatePercentage(student.codewars.current.total, student.codewars.goal.total)}%</p>

                <h3>Scores</h3>
                <p>Assignments: {(student.cohort.scores.assignments * 100).toFixed(2)}%</p>
                <p>Projects: {(student.cohort.scores.projects * 100).toFixed(2)}%</p>
                <p>Current Total: {(student.cohort.scores.assessments * 100).toFixed(2)}%</p>

                <h3>Certifications</h3>
                <p>Resume: {student.certifications.resume ? '✅' : '❌'}</p>
                <p>LinkedIn: {student.certifications.linkedin ? '✅' : '❌'}</p>
                <p>Github: {student.certifications.github ? '✅' : '❌'}</p>
                <p>Mock Interview: {student.certifications.mockInterview ? '✅' : '❌'}</p>

                <h3>1-on-1 Notes</h3>
                <form onSubmit={handleFormSubmit}>
                    <label>
                        Commenter Name:
                        <input
                        type='text'
                        value={commenterName}
                        onChange={(e) => setCommenterName(e.target.value)}
                        />
                    </label>
                    <label>
                        Comment:
                        <input
                        type='text'
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        />
                    </label>
                    <button type="submit">Add Note</button>
                </form>

                <h3>Previous Notes</h3>
                <ul>
                    {oneOnOneNotes.map((note, index) => {
                        return (
                        <li key={index}>
                        <span>{formatCommenterName(note.commenter)} says, </span>
                        <span>"{note.comment}"</span>
                        </li>
                        )
                    })}
                </ul>
            </div>
        )}

        </li>
    )
    }

    export default StudentProfile;