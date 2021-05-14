import React, { useState, useContext } from 'react'
import { Route } from 'react-router'
import { BrowserRouter} from 'react-router-dom'
import { Container, Slide} from '@material-ui/core'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Start from './pages/Start/Start'
import Info from './pages/Info/Info'
import Practice from './pages/Practice/Practice'
import Lessons from './pages/Lessons/Lessons'
import CookieAlert from './components/Cookie/CookieAlert'
import Styles from './app.module.css'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import { SnackbarProvider, useSnackbar } from 'notistack';
import {Context} from './context'


const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ffffff',
      main: '#e8f5e9',
      dark: '#b6c2b7',
      contrastText: '#000000',
    },
    secondary: {
      light: '#39796b',
      main: '#004d40',
      dark: '#00251a',
      contrastText: '#ffffff',
    },
  },
});


function App() {
  const [entitled, setEntitled] = useState(false);
  const [showCookie, setShowCookie] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);

  const CookieShow = () => {
    showCookie ? setShowCookie(false) : setShowCookie(true)
  }
  const entitledOn = () => {
    entitled ? setEntitled(false) : setEntitled(true)
  }
  const snackbarShow = () => {
    showSnackbar ? setShowSnackbar(false) : setShowSnackbar(true)
  }
  const snackbarState = () => {return showSnackbar}
  

  return (
    <BrowserRouter>
    <Context.Provider value={{
       CookieShow, entitledOn, snackbarShow, snackbarState
    }}>
    <ThemeProvider theme={theme}>
    <SnackbarProvider
    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} 
    maxSnack={3}
    TransitionComponent={Slide}
    >
      <Header/>
      <Container className={Styles.container} maxWidth="sm">
          <Route path='/home' component={Home}/>
          <Route path='/info' component={Info}/>
          <Route path='/practice' component={Practice}/>
          <Route path='/lessons' component={Lessons}/>
          <Route path='/' exact component={Start}/>
      </Container>
      
        <CookieAlert/>
      
    </SnackbarProvider>
    </ThemeProvider>
    </Context.Provider>
    </BrowserRouter>
  );
}

export default App;
