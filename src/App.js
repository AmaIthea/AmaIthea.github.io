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
  
  const nameCheck = () => userName

  const nameSwitch = (name) => {
    setUserName(name)
  }

  const entitledSwitch = () => {
    entitled ? setEntitled(false) : setEntitled(true)
  }
  const entitledCheck = () => entitled


  return (
    <BrowserRouter>
    <Context.Provider value={{
        entitledSwitch, entitledCheck, nameSwitch, nameCheck
    }}>
    <ThemeProvider theme={theme}>
    <SnackbarProvider
    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} 
    maxSnack={3}
    TransitionComponent={Slide}
    >
      <Header/>
      <Container className={Styles.container} maxWidth="sm">
          <Route path='/' exact component={Start}/>
          <Route path='/home' component={Home}/>
          <Route path='/info' component={Info}/>
          <Route path='/practice' component={Practice}/>
          <Route path='/lessons' component={Lessons}/>
          <CookieAlert/>
      </Container>
     
      
    </SnackbarProvider>
    </ThemeProvider>
    </Context.Provider>
    </BrowserRouter>
  );
}

export default App;
