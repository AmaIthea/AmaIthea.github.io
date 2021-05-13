import React, { useContext } from 'react'
import SnackBar from './../SnackBar/SnackBar'
import {Context} from './../../context'
import Cookies from 'js.cookie.mjs'

const CookieAlert = () => {
    const {CookieShow, entitledOn, snackbarShow, snackbarState} = useContext(Context);
    console.log()
    return (
     <SnackBar showSeconds={Infinity} message='We use cookies to ensure the correct operation of our website, to personalize content and to store authorization data.'/>
    )
}

export default CookieAlert;