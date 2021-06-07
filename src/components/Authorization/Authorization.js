import React, { useState} from 'react'
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import styleComponents from './../../styleComponents.module.css';

const Authorization = () => {

    const [open, setOpen] = useState(false);
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const nameChange = (event) => setUserName(event.target.value);
    const passwordChange = (event) => setUserPassword(event.target.value);
    
    const clearRegistration = () => {
      setUserName('')
      setUserPassword('')
  }

  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    return (
      <div>
          <Button onClick={handleOpen}>
            log in
          </Button>


              <Modal
                open={open}
                onClose={handleClose}
              >
                <Paper className={styleComponents.modal}>
              <h2 id="simple-modal-title">Авторизация</h2>
              <TextField className={styleComponents.input} onChange={passwordChange} value={userPassword} id="filled-basic" label="login" variant="filled"/>
              <TextField className={styleComponents.input} onChange={nameChange} value={userName} id="filled-basic" label="password" variant="filled" type="password"/>
              <Button onClick={clearRegistration}>clear</Button>
              <Button>entry</Button>
                </Paper>
              </Modal>
      </div>
    )
}

export default Authorization;