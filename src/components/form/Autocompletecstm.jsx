import React from 'react'
import Autocomplete from "@mui/material/Autocomplete";
import { TextField} from '@mui/material';

const Autocompletecstm = (params) => {
  return (
    <Autocomplete
            id="city_id"
            name="city_id"
            options={params.options}
            getOptionLabel={option => option.name}
            style={{ width: 300 }}
            onChange={(e, value) => {
              console.log(value);
              params.setFieldValue(
                "city_id",
                value !== null ? value : params.initialValues.city_id
              );
            }}
            renderInput={paramss => (
              <TextField
                margin="normal"
                // label="Cities"
                fullWidth
                name="city_id"
                {...paramss}
              />
            )}
          />  
  )
}

export default Autocompletecstm