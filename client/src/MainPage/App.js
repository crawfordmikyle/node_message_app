import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MainPage from './MainPage'

const App = () => (
  <MuiThemeProvider>
    <MainPage/>
  </MuiThemeProvider>
)

export default App;
