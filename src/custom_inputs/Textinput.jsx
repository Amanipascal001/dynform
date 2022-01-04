import React from 'react'
import { FormControl, Input, InputLabel } from '@mui/material';
import { useField  } from 'formik';


const TextInput = ({ label, ...props }) => {

    const [field, meta] = useField(props);

    return (
        <FormControl fullWidth >
            <InputLabel htmlFor={props.id || props.name}>{label}</InputLabel>
            <Input {...field} {...props} 
             />
            {meta.touched && meta.error ? (<div style={{color: 'red'}}>{meta.error}</div>) : null}
        </FormControl>
    )
}

export default TextInput
