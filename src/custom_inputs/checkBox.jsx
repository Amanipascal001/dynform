import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import {useField} from 'formik'

const CheckBox = ({label, ...props }) => {

    const [field, meta] = useField({ ...props, type: 'checkbox' });

    return (
        <React.Fragment>
            <FormControlLabel
                control={<Checkbox {...field} {...props}  name={label} />}
                label={label}
            />
            {meta.touched && meta.error ? (<div style={{color: 'red'}}>{meta.error}</div>) : null}
        </React.Fragment>
    )
}

export default CheckBox
