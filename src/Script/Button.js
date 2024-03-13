import React from 'react';
import Button from '@mui/material/Button';

function CustomButton(props) {
    return (
        <Button variant="contained" color="primary" onClick={props.onClick}>
            {props.label}
        </Button>
    );
}

export default CustomButton;