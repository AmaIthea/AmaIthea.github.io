import React, { useState } from 'react'
import { Route } from 'react-router'
import { BrowserRouter} from 'react-router-dom'
import { Container, Slide} from '@material-ui/core'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Start from './pages/Start/Start'
import Info from './pages/Info/Info'
import MyProfile from './pages/MyProfile/MyProfile'
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

  
  



  return (
    <BrowserRouter>
    <Context.Provider value={{
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
          <Route path='/' exact component={Start}/>
          <Route path='/home' component={Home}/>
          <Route path='/info' component={Info}/>
          <Route path='/practice' component={Practice}/>
          <Route path='/lessons' component={Lessons}/>
          <Route path='/myProfile' component={MyProfile}/>
          <CookieAlert/>
      </Container>
     
      
    </SnackbarProvider>
    </ThemeProvider>
    </Context.Provider>
    </BrowserRouter>
  );
}

export default App;
