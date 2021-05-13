import React, { useContext } from 'react'
import Snackbar from './../Snackbar/Snackbar'
import {Context} from './../../context'
import Cookies from 'js-cookie'

const CookieAlert = () => {
    const {CookieShow, entitledOn, snackbarShow, snackbarState} = useContext(Context);
    console.log(Cookies.get())
    Cookies.set('entitledTI', 'true')
    console.log(Cookies.get())
    if (Cookies.get('cookieShow') !== 'on'){
        {
            
        }
        return (
            <Snackbar showSeconds={Infinity} message='We use cookies to ensure the correct operation of our website, to personalize content and to store authorization data.'/>
        )

    } 
    
}

export default CookieAlert;