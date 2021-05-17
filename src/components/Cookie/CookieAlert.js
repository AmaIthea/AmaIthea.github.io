import React, { useContext } from 'react'
import {Context} from './../../context'
import Cookies from 'js-cookie'
import { SnackbarProvider, useSnackbar } from 'notistack';


const CookieAlert = () => {
    
    const {CookieShow, entitledOn, snackbarShow, snackbarState} = useContext(Context);
    const { enqueueSnackbar } = useSnackbar();
    const snackbarShowOn = () => {
        Cookies.set('cookieShow', 'on')
        enqueueSnackbar('We use cookies to ensure the correct operation of our website, personalize content and store authorization data. By staying on the site for more than 10 seconds, you agree to these rules.' , { 
            variant: 'info',
            autoHideDuration: 6000,
        });
      };
    if (Cookies.get('cookieShow') !== 'on'){
        {
            return (
                <SnackbarProvider>
                    {
                        snackbarShowOn()
                    }
                </SnackbarProvider>
            )
        }
        

    } else {
        return (null)    
    }
    
}

export default CookieAlert;