import React, {useContext} from 'react';
import {Context} from './../../context';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import styleComponents from './../../styleComponents.module.css'

import { makeStyles } from '@material-ui/core/styles';

const MyProfile = () => {

    const { nameSwitch,
            avatarSwitch,
            expSwitch,
            entitledSwitch,

            nameCheck,
            avatarCheck,
            expCheck,
            entitledCheck} = useContext(Context);

    return (
        <div >
            <Avatar className={styleComponents.avatarMine} alt={nameCheck} src={avatarCheck()}/>
            <Paper>
                
            </Paper>
        </div>
    )
}
export default MyProfile;