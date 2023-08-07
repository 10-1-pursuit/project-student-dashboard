import data from "../data/data.json";

const AllStudentsPreview =
    data.map((studentObj) => {
        return (
            <div className="card-container">
                <img src={studentObj.profilePhoto} alt="Student Profile Photo" />
                <h3> {studentObj.names.preferredName + " " + studentObj.names.middleName.at(0) + ". " + studentObj.names.surname}</h3>
                <p>{studentObj.username}</p>
                <p><span className="green-text">Birthday:</span> {studentObj.dob}</p>

                <p className="badge-expander">Show More...</p>
            </div>
        )
    });

export { AllStudentsPreview };