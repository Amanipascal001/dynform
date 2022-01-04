import * as React from 'react';
import {TextField, FormControl} from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { useField, useFormikContext } from 'formik';
import frLocale from 'date-fns/locale/fr';
import enLocale from 'date-fns/locale/en-US';

export default function DatePk({ label, ...props }) {

  const { setFieldValue } = useFormikContext() 

  const [field, meta] = useField(props);

  const [locale] = React.useState("fr");

  const localeMap = {
    en: enLocale,
    fr: frLocale
  };

const localeFormatMap = {
    en: "MM/dd/yyyy",
    fr: "dd/MM/yyyy"
  };

  
const maskMap = {
  fr: '__/__/____',
  en: '__/__/____',
};

  return (
    <FormControl variant="standard" fullWidth >
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={localeMap[locale]} >
            <DatePicker
                label={label}
                {...props}
                inputFormat={localeFormatMap[locale]}
                mask={maskMap[locale]}
                value={(field.value && new Date(field.value)) || null}
                onChange={val => setFieldValue(field.name, val)}
                renderInput={ (params) => (<TextField {...params} variant="standard" />) }
            />
        </LocalizationProvider>
        {meta.touched && meta.error ? (<div style={{color: 'red'}}>{meta.error}</div>) : null}
    </FormControl>
  );
}
