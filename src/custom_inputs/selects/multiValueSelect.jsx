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


function MultiValueSelect(props) {
   const {name, label, selectedItems, options} = props;
   const [personName, setPersonName] = React.useState([]);

   const [field, meta] = useField(props);

   const { setFieldValue } = useFormikContext() 

  const handleChange = (event) => {
    const { target: { value } } = event;
    setFieldValue(field.name, [].slice.call(value) );
  };


   return (
    <div style={{marginTop: '15px'}}>
      <FormControl variant="standard" fullWidth>
        <InputLabel id="demo-multiple-checkbox-label">{label} </InputLabel>
        <Select
          labelId={name}
          id={name}
          multiple
          value={ [...field.value] }
          onChange={handleChange}
          input={<Input variant='standard' label={label} />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {options.map((item) => (
            <MenuItem key={item} value={item}>
              <Checkbox checked={selectedItems.indexOf(item) > -1} />
              <ListItemText primary={item} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
    )
}

export default MultiValueSelect
