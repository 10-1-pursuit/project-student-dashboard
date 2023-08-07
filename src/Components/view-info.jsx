import data from "../data/data.json";

const ViewInfo = () => {
    return (
        <>
            <h2 className="view-info">All Students</h2>
            <p className="view-info">Total Students: <span className="green-text"> {data.length}</span></p>
        </>
    )
};

export default ViewInfo;