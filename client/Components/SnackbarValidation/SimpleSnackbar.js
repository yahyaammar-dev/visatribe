import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Alert } from '@mui/material';

export default function SimpleSnackbar(props) {
  const [open, setOpen] = React.useState(false);

 

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  useEffect(()=>{
    setOpen(true)
  },[])

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      {/* <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={props.text}
        action={action}
        sx={{backgroundColor: 'red'}}
      /> */}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity='error' >
          {props.text}
        </Alert>
      </Snackbar>
    </div>
  );
}





SimpleSnackbar.propTypes = {
  text: PropTypes.string,
};
