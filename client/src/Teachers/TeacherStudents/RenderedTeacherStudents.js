import React from 'react';
import {connect} from 'react-redux';
import TeacherStudentCard from './TeacherStudentCard'

const RenderedTeacherStudents = (props) => {
  const studentsList = props.teacherStudents.map((student)=>{
    return(
      <TeacherStudentCard key={student.id} studentData={student}/>
    )
  })

  return(
    <div className='RenderedTeacherStudents'>
      <h4>Teacher Students List</h4>
      {studentsList}
    </div>
  )
}

const mapStateToProps = (state) => {
  if(state.teacherReducer.students){
    return({teacherStudents: state.teacherReducer.students})
  } else {
    return({teacherStudents:[]})
  }
}

export default connect(mapStateToProps)(RenderedTeacherStudents)