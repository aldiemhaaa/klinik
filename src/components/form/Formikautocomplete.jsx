import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
// import { TextField } from '@material-ui/core';
import { fieldToTextField } from 'formik-mui';
import { Field  } from 'formik';
import TextField from '@mui/material/TextField';

const FormikAutocomplete = ({ textFieldProps, ...props }) => {

  const { form: { setTouched, setFieldValue } } = props;
  const { error, helperText, ...field } = fieldToTextField(props);
  const { name } = field;

  return (
    <Autocomplete
      {...props}
      {...field}
      onChange={ (_, value) => setFieldValue(name, value) }
      onBlur={ () => setTouched({ [name]: true }) }
      renderInput={ props => (
        <TextField {...props} {...textFieldProps} helperText={helperText} error={error} />
      )}
    />
  );
}

export default FormikAutocomplete;