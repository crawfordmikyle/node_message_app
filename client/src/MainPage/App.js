import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Header from './Header'
import './App.css';

const App = () => (
  <MuiThemeProvider>
    <AppBar
      title="Node Message App"
    />
    <Header/>
  </MuiThemeProvider>
)

export default App;
