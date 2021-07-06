import React, { useState } from 'react'

import { BrowserRouter } from 'react-router-dom'
import { Container, Slide} from '@material-ui/core'
import Header from './components/Header/Header'


import CookieAlert from './components/Cookie/CookieAlert'
import Styles from './app.module.css'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { SnackbarProvider, useSnackbar } from 'notistack';
import {Context} from './context'
import Router from './components/Router/Router'

import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'


const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#c1d5e0',
      main: '#90a4ae',
      dark: '#62757f',
      contrastText: '#000000',
    },
    secondary: {
      light: '#fbfffc',
      main: '#c8e6c9',
      dark: '#97b498',
      contrastText: '#000000',
    },
  },
});



function App() {
  const [entitled, setEntitled] = useState(false);
  
  const [userName, setUserName] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [userExp, setUserExp] = useState(0);
  
  const entitledSwitch = () => entitled ? setEntitled(false) : setEntitled(true)
  const nameSwitch = name => setUserName(name)
  const avatarSwitch = link => setUserAvatar(link)
  const expSwitch = exp => setUserExp(exp) 
  
  const nameCheck = () => userName
  const avatarCheck = () => userAvatar
  const expCheck = () => userExp
  const entitledCheck = () => entitled

  
  const auth = firebase.auth()
  const firestore = firebase.firestore()
  


  return (
    <BrowserRouter>
    <Context.Provider value={{
    firestore,
    firebase,
    auth,

    nameSwitch,
    avatarSwitch,
    expSwitch,
    entitledSwitch,

    nameCheck,
    avatarCheck,
    expCheck,
    entitledCheck
    }}>
    <ThemeProvider theme={theme}>
    <SnackbarProvider
    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} 
    maxSnack={3}
    TransitionComponent={Slide}
    >
      <Header/>
      <Container className={Styles.container} maxWidth="lg">
          <Router/>
          <CookieAlert/>
      </Container>
     
      
    </SnackbarProvider>
    </ThemeProvider>
    </Context.Provider>
    </BrowserRouter>
  );
}

export default App;
