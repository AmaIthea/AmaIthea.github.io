import React, { useContext } from 'react'
import Cookies from 'js-cookie'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';
import {Context} from './../../context'
import Authorization from '../Authorization/Authorization';
import styleComponents from './../../styleComponents.module.css';

const Profile = () => {
    const {entitledCheck, nameCheck} = useContext(Context);

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
        
    };

    const randomImage = () => {
        let rand = Math.round(1 - 0.5 + Math.random() * (3 - 1 + 1)) + 40
        return 'https://place-puppy.com/' + rand + 'x' + rand
        
    }

    if(entitledCheck()) {
        return (
            <div>
            <Button className={styleComponents.name} onClick={handleClick}>
                <Avatar className={styleComponents.avatar}><img src={randomImage()}/></Avatar>
                {nameCheck()}
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem component="a" href="/lessons" onClick={handleClose}>Profile</MenuItem>
                <MenuItem component="a" href="/lessons" onClick={handleClose}>My account</MenuItem>
                <MenuItem component="a" href="/lessons" onClick={handleClose}>Logout</MenuItem>
      </Menu>
            </div>
        )
    } else {
        return (
                <Authorization/>
        )
    }
    
}
export default Profile