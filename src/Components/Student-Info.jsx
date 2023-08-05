import data from "../data/data.json";

const studentPreviewInfo = data.map((studentObj) => {
    return (
        <>
            <img src={studentObj.profilePhoto} alt="Student Profile Photo" />
            <h3> {studentObj.names.preferredName + " " + studentObj.names.middleName.at(0) + ". " + studentObj.names.surname}</h3>
            <p>{studentObj.username}</p>
            <p> Birthday: {studentObj.dob}</p>

            <p>Show More...</p>
        </>
    )
});
export { studentPreviewInfo }