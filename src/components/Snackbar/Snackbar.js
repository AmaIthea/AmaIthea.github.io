import React, { useState, useContext} from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import {Context} from './../../context'

const SnackBar = (props) => {
  
  const {CookieShow, entitledOn, snackbarShow, snackbarState} = useContext(Context);
  let open
  console.log(snackbarState)
  if (snackbarState()) {
     open = true
  } else {
     open = false
  }
  
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    snackbarShow()
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        open={open}
        autoHideDuration={props.showSeconds ? props.showSeconds : 5000}
        onClose={handleClose}
        message={props.message ? props.message : "Done"}
        action={
          <React.Fragment>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
}








export default SnackBar;