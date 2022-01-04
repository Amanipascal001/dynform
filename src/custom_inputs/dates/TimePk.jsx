import * as React from 'react';
import {TextField, FormControl} from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import { useField, useFormikContext } from 'formik';
import frLocale from 'date-fns/locale/fr';
import enLocale from 'date-fns/locale/en-US';

export default function TimePk({ label, ...props }) {

  const { setFieldValue } = useFormikContext() 

  const [field, meta] = useField(props);

  const [locale] = React.useState("fr");

  const localeMap = {
    en: enLocale,
    fr: frLocale
  };


  return (
    <FormControl variant="standard" fullWidth >
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={localeMap[locale]} >
            <TimePicker
                label={label}
                {...props}
                value={(field.value && new Date(field.value)) || null}
                onChange={val => setFieldValue(field.name, val)}
                renderInput={ (params) => (<TextField {...params} variant="standard" />) }
            />
        </LocalizationProvider>
        {meta.touched && meta.error ? (<div style={{color: 'red'}}>{meta.error}</div>) : null}
    </FormControl>
  );
}
