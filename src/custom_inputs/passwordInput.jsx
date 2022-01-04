import React, { useState } from 'react'
import {IconButton, FormControl, Input, InputAdornment, InputLabel } from '@mui/material';
import { useField  } from 'formik';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';



const PasswordInput = ({ label, ...props }) => {

    const [showPassword, setShowPassword] = useState(false)

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const [field, meta] = useField(props);

    return (
        <FormControl fullWidth>
            <InputLabel htmlFor={props.id || props.name}>{label}</InputLabel>
            <Input
             {...field} 
             {...props}
             type={showPassword ? 'text' : 'password'}
             endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                  >
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
            }
             />
            {meta.touched && meta.error ? (<div style={{color: 'red'}}>{meta.error}</div>) : null}
        </FormControl>
    )
}

export default PasswordInput
