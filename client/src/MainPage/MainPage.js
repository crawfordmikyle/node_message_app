import React from 'react'
import Header from './Header';
import TeachersList from '../Teachers/TeachersList';
import StudentsList from '../Students/StudentsList';

const MainPage = () => {
  return(
    <div>
      <Header/>
      <TeachersList/>
      <StudentsList/>
    </div>
  )
}

export default MainPage