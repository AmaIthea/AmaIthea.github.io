import React, {useContext, useState} from 'react';
import {Context} from './../../context';
import { useSnackbar } from 'notistack';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import styleComponents from './../../styleComponents.module.css';
import MyProfileStyle from './MyProfileStyle.module.css'
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    avatarMine: {
      width: theme.spacing(18),
      height: theme.spacing(18),
    },
  }));

const MyProfile = () => {
    const { enqueueSnackbar } = useSnackbar();

    const [link, setLink] = useState(false);
    const [name, setName] = useState(false);

    const [userAvatar, setUserAvatar] = useState('');
    const [userName, setUserName] = useState('');

    const { nameSwitch,
            avatarSwitch,
            expSwitch,
            entitledSwitch,

            nameCheck,
            avatarCheck,
            expCheck,
            entitledCheck} = useContext(Context);

    const classes = useStyles();
    
    const linkOpen = () => setLink(true);
    const linkClose = () => setLink(false);
    const nameOpen = () => setName(true)
    const nameClose = () => setName(false)

    const linkChange = (event) => setUserAvatar(event.target.value);
    const nameChange = (event) => setUserName(event.target.value);

    const clearEditAvatar = () => setUserAvatar('')
    const clearEditName = () => setUserName('')

    const editAvatar = () => {
        if(userAvatar !== ' ' && userAvatar !== ''){
          avatarSwitch(userAvatar)
          linkClose()
          let linkAvatar = 'avatar' + nameCheck()
          localStorage.setItem(linkAvatar, userAvatar)
          enqueueSnackbar('Photo change was successful', {
            variant: 'success' 
          })
        } else {
          enqueueSnackbar('The link is incorrect', {
            variant: 'error' 
          })
       }
    }
    const editName = () => {
        let name = 'user' + userName;
        if(localStorage.getItem(name) !== userName){
          enqueueSnackbar('Name change was successful', {
            variant: 'success' 
          }) 
          nameClose()

        } else {
          enqueueSnackbar('This name is taken', {
            variant: 'error' 
          }) 
        }
    }

    const rewritingName = (name) => {
      let newName = 'user' + userName;
      let oldName = 'user' + nameCheck();
      let newPassword = 'password' + userName;
      let oldPassword = 'password' + nameCheck();
      let newAvatar = 'avatar' + userName;
      let oldAvatar = 'avatar' + nameCheck();
      let newExp = 'exp' + userName;
      let oldExp = 'exp' + nameCheck();
      
      localStorage.removeItem(oldName)
      LocalStorage.removeItem(oldPassword)
      LocalStorage.removeItem(oldAvatar)
      LocalStorage.removeItem(oldExp)
    } 
    return (
        <div className={styleComponents.MyProfile}>
            <div className={styleComponents.avatarBox}>
                <Avatar className={classes.avatarMine} alt={nameCheck()} src={avatarCheck()}/>
                <IconButton type='button' color="primary"  className={styleComponents.avatarEdit} onClick={linkOpen} aria-label="delete">
                    <EditIcon />
                </IconButton>
              <Modal
                open={link}
                onClose={linkClose}
              >
                <Paper className={styleComponents.modal}>
                    <h2 id="simple-modal-title">Provide a link to the photo</h2>
                    <TextField className={styleComponents.input} onChange={linkChange} value={userAvatar} label="link" variant="filled"/>
                    <Button onClick={clearEditAvatar}>clear</Button>
                    <Button onClick={editAvatar}>switch</Button>
                </Paper> 
              </Modal>
            </div>
            <div className={MyProfileStyle.nameBox}>
              <h2 className={MyProfileStyle.name} onClick={nameOpen}>{nameCheck()}</h2>
              <IconButton onClick={nameOpen}>
                <EditIcon />
              </IconButton>
            </div>
            

            <Paper className={styleComponents.Paper}>
                
            </Paper>
            <Modal
                open={name}
                onClose={nameClose}
              >
                <Paper className={styleComponents.modal}>
                    <h2 id="simple-modal-title">Enter a new name</h2>
                    <TextField className={styleComponents.input} onChange={nameChange} value={userName} label="name" variant="filled"/>
                    <Button onClick={clearEditName}>clear</Button>
                    <Button onClick={editName}>switch</Button>
                </Paper> 
              </Modal>
        </div>
    )
}
export default MyProfile;