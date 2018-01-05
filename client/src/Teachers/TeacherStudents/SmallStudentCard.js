import React from 'react'

const SmallStudentCard = (props) =>{
  console.log(props)
  return(
    <div>
      <h4>{props.student.name}</h4>
    </div>
  )
}

export default SmallStudentCard