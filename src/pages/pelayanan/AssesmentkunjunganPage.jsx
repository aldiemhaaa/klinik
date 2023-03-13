import React from 'react'
import { Formik, Form, Field } from 'formik';
import {  Typography,Card,Grid,CardContent,RadioGroup, FormControlLabel, Radio, TextField, TextareaAutosize, Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';

const initialValues = {
    subjective: '',
    objective: '',
    assesment: '',
    plan: ''
  };

const AssesmentkunjunganPage = () => {
    
    return (
        <>
            <Card sx={{ minWidth: 275,marginTop:1 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 24 }} gutterBottom>
                        Assesment Kunjungan
                    </Typography>
                    <Assesmentkunjunganbody />
                </CardContent>
            </Card>
            
        </>
    )
}

export default AssesmentkunjunganPage

const Assesmentkunjunganbody = ()=>{
    const handleSubmit = (values) => {
        console.log(values);
      };
    return <>
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values, handleChange, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        Subjective<br/>
                        <TextField
                            sx={{
                                width:'100%'
                            }}
                            id="subjective"
                            name="subjective"
                            multiline
                            rows={3}
                            value={values.subjective}
                            onChange={handleChange}
                        />
                        Assesment<br/>
                        <TextField
                            sx={{
                                width:'100%'
                            }}
                            id="assesment"
                            name="assesment"
                            multiline
                            rows={3}
                            value={values.assesment}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        Objective<br/>
                        <TextField
                            sx={{
                                width:'100%'
                            }}
                            id="objective"
                            name="objective"
                            multiline
                            rows={3}
                            value={values.objective}
                            onChange={handleChange}
                        />
                        Plan<br/>
                        <TextField
                            sx={{
                                width:'100%'
                            }}
                            id="plan"
                            name="plan"
                            multiline
                            rows={3}
                            value={values.plan}
                            onChange={handleChange}
                        />
                    </Grid>
                </Grid>
                
                <br />
                <LoadingButton size="medium" type="submit" variant="contained" onClick={handleSubmit}>
                    Simpan
                </LoadingButton>
            </Form>
        )}
    </Formik>
    </>;
}

const FieldRadio = (props)=>{
    return <>
        <div>
            {props.label}
            <RadioGroup
            name={props.name}
            value={props.value}
            onChange={props.onChange}
            row
            >
            {props.items.map((option) => (
                <FormControlLabel
                key={option.value}
                value={option.value}
                control={<Radio />}
                label={option.label}
                />
            ))}
            </RadioGroup>
        </div>
    </>;
}

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