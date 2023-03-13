import React from 'react'
import { Formik, Form, Field,useField  } from 'formik';
import { Autocomplete ,Typography,Card,Grid,CardContent,RadioGroup, FormControlLabel, Radio, TextField, TextareaAutosize, Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import TabletindakanPage from './TabletindakanPage';

const initialValues = {
    tindakan: {
        label:'',
        value:''
    },
    pelaksana: {
        label:'',
        value:''
    },
    qty: '',
  };

const optionsTindakan = [
{ label:'Tindakan 1',value: "1" },
{ label: "Tindakan 2",value:"2" },
];

const optionsPelaksana = [
{ label:'Pelaksana 1',value: "1" },
{ label: "Pelaksana 2",value:"2" },
];

const TindakanPage = () => {
    
    return (
        <>
            <Card sx={{ minWidth: 275,marginTop:1 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 24 }} gutterBottom>
                        Tindakan
                    </Typography>
                    <Tindakanbody />
                </CardContent>
            </Card>
            
        </>
    )
}

export default TindakanPage

const Tindakanbody = ()=>{
    const handleSubmit = (values) => {
        console.log(values);
      };
    return <>
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values, handleChange, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
                Tindakan<br/>
               <AutocompleteField
                options={optionsTindakan}
                label="Tindakan"
                name="tindakan"
                values={values.tindakan}
               />
               Pelaksana
               <br/>
               <AutocompleteField
                options={optionsPelaksana}
                label="Pelaksana"
                name="pelaksana"
                values={values.pelaksana}
               />
               <FieldText
                    label="Quantity"
                    name="qty"
                    value={values.qty}
                    onChange={handleChange}
                />
                
                <br />
                <LoadingButton size="medium" type="submit" variant="contained" onClick={handleSubmit}>
                    Simpan
                </LoadingButton>
            </Form>
        )}
    </Formik>
    <TabletindakanPage />
    </>;
}


const AutocompleteField = ({ options, label, name,values }) => {
    const [field, meta, helpers] = useField(name);
  
    const handleInputChange = (event, value) => {
      values = helpers.setValue(value); 
    };
  
    return (
      <Autocomplete
        options={options}
        getOptionLabel={(option) => option.label}
        getOptionSelected={(option, value) => option.value === value.value}
        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
            error={meta.touched && Boolean(meta.error)}
            helperText={meta.touched && meta.error}
          />
        )}
        {...field}
        onChange={handleInputChange}
      />
    );
  };

const FieldText = (props)=>{
return <>

    <div>
    {props.label}<br/>
    <TextField
        sx={{
            width:'100%'
        }}
        id={props.name}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
    />
    </div>
</>
}