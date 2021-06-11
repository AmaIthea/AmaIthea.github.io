import React, {useContext, useState} from 'react';
import {Context} from './../../context';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import styleComponents from './../../styleComponents.module.css';
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

    const [open, setOpen] = useState(false);

    const [userAvatar, setUserAvatar] = useState('');

    const { nameSwitch,
            avatarSwitch,
            expSwitch,
            entitledSwitch,

            nameCheck,
            avatarCheck,
            expCheck,
            entitledCheck} = useContext(Context);

    const classes = useStyles();

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const linkChange = (event) => setUserAvatar(event.target.value);
    const clearEdit = () => setUserAvatar('')
    const editAvatar = () => {

    }


    return (
        <div className={styleComponents.MyProfile}>
            <div className={styleComponents.avatarBox}>
                <Avatar className={classes.avatarMine} alt={nameCheck()} src={avatarCheck()}/>
                <IconButton type='button' color="primary"  className={styleComponents.avatarEdit} onClick={handleOpen} aria-label="delete">
                    <EditIcon />
                </IconButton>
                <Modal
                open={open}
                onClose={handleClose}
              >
                <Paper className={styleComponents.modal}>
                    <h2 id="simple-modal-title">Укажите ссылку на фото</h2>
                    <TextField className={styleComponents.input} onChange={linkChange} value={userAvatar} label="link" variant="filled"/>
                    <Button onClick={clearEdit}>clear</Button>
                    <Button onClick={editAvatar}>switch</Button>
                </Paper> 
              </Modal>
            </div>

            <Paper className={styleComponents.Paper}>
                
            </Paper>
        </div>
    )
}
export default MyProfile;