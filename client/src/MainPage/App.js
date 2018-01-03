import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Header from './Header';
import TeachersList from '../Teachers/TeachersList';
import StudentsList from '../Students/StudentsList';
import './App.css';

const App = () => (
  <MuiThemeProvider>
    <AppBar
      title="Node Message App"
    />
    <Header/>
    <TeachersList/>
    <StudentsList/>
  </MuiThemeProvider>
)

export default App;
