import React, {Component} from 'react';
import {connect} from 'react-redux';
import RenderedTeacherStudents from './RenderedTeacherStudents'
class TeacherStudentList extends Component{
  render(){
    return(
      <div className='TeacherStudentList'>
        <RenderedTeacherStudents/>
      </div>
    )
  };
};

export default connect(null)(TeacherStudentList)