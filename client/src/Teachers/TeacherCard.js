import React from 'react'
import {Link} from 'react-router-dom'

const TeacherCard = (props) => {
  return(
    <div className='TeacherCard'>
      <h4>{props.teacherData.name}</h4>
      <Link to={`/teachers/${props.teacherData.id}`}>Show Teacher Page</Link>
    </div>
  );
};

export default TeacherCard;
