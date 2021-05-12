import React, { useState } from 'react'
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
  const [entitled, setEntitled] = useState(false)
 
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
