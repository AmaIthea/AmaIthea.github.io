import React, {useState, useContext} from 'react';
import {Context} from './../../context';
import { useSnackbar } from 'notistack';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import styleComponents from './../../styleComponents.module.css';

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
    
    const clearAuthorization = () => {
      setUserName('')
      setUserPassword('')
  }

  

    const handleClose = () => setOpen(false)

    const decryptionPassword = pass => {
      let arr = pass.split('')
      arr.reverse()
      arr.join('')
     
      if (userPassword ==  arr.join('')) {return true} else {return false}
    } 

    const login = () => {
      let name = 'user' + userName;
      let avatar = 'avatar' + userName;
      let exp = 'exp' + userName;
      let password = 'password' + userName;
      let arr = []
      for(let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        arr.push(key)
      }

      let loginPassword = localStorage.getItem(password)
      if ((arr.indexOf(name) !== -1) && decryptionPassword(loginPassword)) {
              entitledSwitch()
              expSwitch(localStorage.getItem(exp))
              nameSwitch(userName)
              avatarSwitch(localStorage.getItem(avatar))
              handleClose()
        enqueueSnackbar('Successful autorization', {
          variant: 'success' 
        })
        
        
      } else {
        enqueueSnackbar('Invalid username or password', {
          variant: 'error' 
      })
      }
      // for(let i = 0; i < localStorage.length; i++) {
      //   let key = localStorage.key(i);
      //   console.log(`${key}: ${localStorage.getItem(key)}`);
      // }
    }

    const loginGoogle =  async () => {
      const provider = new firebase.auth.GoogleAuthProvider()
      const {user} = await auth.signInWithPopup(provider)
      console.log(user)
  }
    return (
      <Paper className={styleComponents.modal}>
        <h2 id="simple-modal-title">Авторизация</h2>
        <TextField className={styleComponents.input} onChange={nameChange} value={userName} label="login" variant="filled"/>
        <TextField className={styleComponents.input} onChange={passwordChange} value={userPassword} label="password" variant="filled" type="password"/>
        <Button onClick={clearAuthorization}>clear</Button>
        <Button onClick={login}>entry</Button>
      </Paper> 
    )
}

export default Authorization;