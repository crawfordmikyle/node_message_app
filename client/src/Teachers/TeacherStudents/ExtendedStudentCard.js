import React from 'react'

const ExtendedStudentCard = (props) =>{
  return(
    <div>
      <h1>ExtendedStudentCard</h1>
      <h4>{props.student.name}</h4>
    </div>
  )
}

export default ExtendedStudentCard