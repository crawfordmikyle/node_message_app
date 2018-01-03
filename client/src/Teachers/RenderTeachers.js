import React from 'react';
import {connect} from 'react-redux';
import TeacherCard from './TeacherCard';

const RenderTeachers = (props) => {
  
  const renderedTeachers = props.teachers.map((teacher)=>{
    return(
      <TeacherCard teacherData={teacher} key={teacher.id}/>
    );
  });

  return(
    <div className='RenderTeachers'>
      {renderedTeachers}
    </div>
    );
};

const mapStateToProps = (state) => ({
  teachers: state.teachersReducer
});

export default connect(mapStateToProps)(RenderTeachers);