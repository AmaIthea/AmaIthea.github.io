import React from 'react'
import { Route } from 'react-router'
import { BrowserRouter} from 'react-router-dom'
import {Container} from '@material-ui/core'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Info from './pages/Info/Info'
import Practice from './pages/Practice/Practice'
import Lessons from './pages/Lessons/Lessons'
import Styles from './app.module.css'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#4c8c4a',
      main: '#1b5e20',
      dark: '#003300',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#ffffff',
      main: '#f1f8e9',
      dark: '#bec5b7',
      contrastText: '#000000',
    },
  },
});






function App() {
  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Header/>
      <Container className={Styles.container} maxWidth="sm">
          <Route path='/home' component={Home}/>
          <Route path='/info' component={Info}/>
          <Route path='/practice' component={Practice}/>
          <Route path='/lessons' component={Lessons}/>
      </Container>
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
