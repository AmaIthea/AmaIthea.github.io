import React, {useState, useContext} from 'react';
import {Context} from './../../context';
import { useSnackbar } from 'notistack';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TextField from '@material-ui/core/TextField';
import styleComponents from './../../styleComponents.module.css';

import User from './../../utils/createUser'

const Authorization = () => {
    const { enqueueSnackbar } = useSnackbar();

 
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const nameChange = (event) => setUserName(event.target.value);
    const passwordChange = (event) => setUserPassword(event.target.value);

    const { 
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
            entitledCheck} = useContext(Context);
    
    const login = () => {

    }







    const clearAuthorization = () => {
      setUserName('')
      setUserPassword('')
    }
    




      

    const loginGoogle =  async () => {
      const provider = new firebase.auth.GoogleAuthProvider()
      const {user} = await auth.signInWithPopup(provider)
      const newUser = new User(user.displayName, 'Google', user.photoURL)
      newUser.sendFirebase()

    }
    const loginGithub =  async () => {
      const provider = new firebase.auth.GithubAuthProvider()
      const {user} = await auth.signInWithPopup(provider)
      console.log(user)
    }
    const loginFacebook =  async () => {
      const provider = new firebase.auth.FacebookAuthProvider()
      const {user} = await auth.signInWithPopup(provider)
      console.log(user) 
    }


    return (
      <Paper className={styleComponents.modal}>
        <h2 id="simple-modal-title">Авторизация</h2>
        <TextField className={styleComponents.input} onChange={nameChange} value={userName} label="login" variant="filled"/>
        <TextField className={styleComponents.input} onChange={passwordChange} value={userPassword} label="password" variant="filled" type="password"/>
        <div>
          <Fab onClick={loginGithub} color="primary" aria-label="add">
            <GitHubIcon />
          </Fab>
          <Fab onClick={loginFacebook} color="primary" aria-label="add">
            <FacebookIcon />
          </Fab>
          <Fab onClick={loginGoogle} color="primary" aria-label="add">
            G
          </Fab>
        </div>
        <Button onClick={clearAuthorization}>clear</Button>
        <Button onClick={login}>entry</Button>
      </Paper> 
    )
}

export default Authorization;