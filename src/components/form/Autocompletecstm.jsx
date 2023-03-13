import React from 'react'
import Autocomplete from "@mui/material/Autocomplete";
import { TextField} from '@mui/material';

const Autocompletecstm = (params) => {
  const names = params.name;
  return (
    <Autocomplete
            name={params.name}
            options={params.options}
            getOptionLabel={option => option.label}
            style={{ width: 300 }}
            // onChange={onChange}
            onChange={(e, value) => params.setFieldValue(params.name,value.value)}
            renderInput={paramss => (
              <TextField
                margin="normal"
                // label="Cities"
                fullWidth
                name={params.name}
                {...paramss}
              />
            )}
          />  
  )
}

export default Autocompletecstm