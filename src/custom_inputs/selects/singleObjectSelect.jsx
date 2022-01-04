import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useField  } from 'formik';

function SingleObjectSelect({label, options, ...props}) {

    const [field, meta] = useField(props);

    return (
        <FormControl variant="standard" fullWidth >
            <InputLabel id={props.id || props.name}> {label} </InputLabel>
            <Select  {...field} {...props} >
              <MenuItem value={""}>None</MenuItem>
                {
                  !!options.length && options.map((item, index) => (
                      <MenuItem key={index} value={item.value}>{item.label}</MenuItem>
                  ))
                }
            </Select>
            {meta.touched && meta.error ? ( <div style={{color: 'red'}}>{meta.error}</div>) : null}
      </FormControl>
    )
}

export default SingleObjectSelect
