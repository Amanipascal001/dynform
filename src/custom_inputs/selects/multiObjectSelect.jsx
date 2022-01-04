import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { FormControl, Input, InputLabel } from '@mui/material';
import { useField, useFormikContext } from 'formik';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


function MultiObjectSelect(props) {
   const {name, label, selectedItems, options} = props;

   const [field, meta] = useField(props);

   const { setFieldValue } = useFormikContext() 

  const handleChange = (event) => {
    const { target: { value } } = event;
    setFieldValue(field.name, [].slice.call(value) );
  };


   return (
    <div style={{marginTop: '15px'}}>
      <FormControl variant="standard" fullWidth>
        <InputLabel id={name}> {label} </InputLabel>
        <Select
          labelId={name}
          id={name}
          multiple
          value={ [...field?.value] }
          onChange={handleChange}
          input={<Input variant='standard' label={label} />}
          renderValue={
            (selected) => {
              // const selectedLabels = selected.map(code => options.find(item => item.value === code)?.label )
              return selected.map(code => options.find(item => item.value === code)?.label ).join(', ')
            }
          }
          MenuProps={MenuProps}
        >
          {options.map((item, index) => (
            <MenuItem key={index} value={item.value}>
              <Checkbox checked={selectedItems.indexOf(item.value) > -1} />
              <ListItemText primary={item.label} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
    )
}

export default MultiObjectSelect
