import React from 'react'
import AppBar from 'material-ui/AppBar';
import Header from './Header';
import TeachersList from '../Teachers/TeachersList';
import StudentsList from '../Students/StudentsList';

const MainPage = () => {
  return(
    <div>
      <AppBar title="Node Message App"/>
      <Header/>
      <TeachersList/>
      <StudentsList/>
    </div>
  )
}

export default MainPage