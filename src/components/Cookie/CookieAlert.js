import React, { useContext } from 'react'
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
            <div>
                
            </div>
        )

    } 
    
}

export default CookieAlert;