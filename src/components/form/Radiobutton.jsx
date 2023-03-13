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
        >
            {params.value.map((e,index)=>{
                return <FormControlLabel key={index.toString() + params.name} onChange={params.onChange} name={params.name} value={e.value} control={<Radio />} label={e.label} />
            })}
        
        </RadioGroup>
    </>
    
  )
}

export default Radiobutton