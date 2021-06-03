import React, { useContext } from 'react'
import Cookies from 'js-cookie'
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import {Context} from './../../context'
import Authorization from '../Authorization/Authorization';

const Profile = () => {
    const {entitledCheck} = useContext(Context)


    if(entitledCheck()) {
        let array =  Cookies.get()
        return (
            <Button>
                <Avatar>A</Avatar>
                {Cookies.get('cookieShow')}
            </Button>
        )
    } else {
        return (
                <Authorization/>
        )
    }
    
}
export default Profile