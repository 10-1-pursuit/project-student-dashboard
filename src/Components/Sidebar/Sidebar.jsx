import React from 'react'
import "./Sidebar.css"

function Sidebar({ cohortArray, handleSortClick, handleShowAllStudents }) {
  return (
    <div className='sidebar'>
        <h2>Choose a Class by Start Date</h2>
        <div className='sidebar-list' onClick={handleShowAllStudents}>All Students</div>
        {
            cohortArray.map((item, index) => {
              return (
                <div className='sidebar-list' 
                     key={index} 
                     onClick={() => handleSortClick(item.season, item.year)}
                >
                    {item.season} {item.year}
                </div>
              );
            })
        }
    </div>
    
  )
}

export default Sidebar