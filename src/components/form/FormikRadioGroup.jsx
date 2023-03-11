import React from "react";

import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';

const FormikRadioGroup = ({
  field,
  form: { touched, errors },
  name,
  options,
  onChange,
  ...props
}) => {
  const fieldName = name || field.name;

  return (
    <>
      <RadioGroup {...field} {...props} name={fieldName}>
        {options.map(option => (
          <Radio
            value={option.value}
            checked={field.value === option.value}
            onChange={field.onChange}
            label={option.label}
            id={fieldName}
          />
        ))}
      </RadioGroup>

      {touched[fieldName] && errors[fieldName] && (
        <>{errors[fieldName]}</>
      )}
    </>
  );
};

export default FormikRadioGroup;
