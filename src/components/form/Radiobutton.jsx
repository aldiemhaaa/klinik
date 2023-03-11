import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';

import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const Radiobutton = (params) => {
  return (
    <>
        <InputLabel shrink htmlFor="bootstrap-input">
            {params.label}
        </InputLabel>
        <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        
        >
            {params.value.map((e)=>{
                return <FormControlLabel name={params.name} value={e.value} control={<Radio />} label={e.label} />
            })}
        
        </RadioGroup>
    </>
    
  )
}

export default Radiobutton