import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';
import {Context} from './../../context'
import Authorization from '../Authorization/Authorization';
import styleComponents from './../../styleComponents.module.css';
import Modal from '@material-ui/core/Modal';

const Profile = () => {
    const { nameSwitch,
            avatarSwitch,
            expSwitch,
            entitledSwitch,
    
            nameCheck,
            avatarCheck,
            expCheck,
            entitledCheck} = useContext(Context);

    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
        
    };
   
    const handleOpen = () => setOpen(true)
   

    if(entitledCheck()) {
        return (
            <div>
            <Button className={styleComponents.name} onClick={handleClick}>
                <Avatar className={styleComponents.avatar}><img src={avatarCheck()}/></Avatar>
                {nameCheck()}
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <NavLink className={styleComponents.link} to='/MyProfile'><MenuItem onClick={handleClose}>Profile</MenuItem></NavLink>
                <NavLink className={styleComponents.link} to='/'><MenuItem onClick={handleClose}>My account</MenuItem></NavLink>
                <NavLink className={styleComponents.link} to='/'><MenuItem onClick={handleClose}>Logout</MenuItem></NavLink>
            </Menu>
            </div>
        )
    } else {
        return (
            <div>
                <Button onClick={handleOpen}>
                log in
                </Button>
                <Modal
                  open={open}
                  onClose={handleClose}
                >
                  <Authorization/>
                </Modal>
            </div>
        )
    }
    
}
export default Profile