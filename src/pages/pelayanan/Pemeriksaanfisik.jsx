import React from 'react'
import { Formik, Form, Field } from 'formik';
import {  Typography,Card,Grid,CardContent,RadioGroup, FormControlLabel, Radio, TextField, TextareaAutosize, Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';

const initialValues = {
    keadaanUmum: '',
    kesadaran: '',
    keluhan: '',
    sistolik: '',
    diatolik: '',
    beratBadan:'',
    nadi:'',
    frekuensiNafas:'',
    suhu:"",
    lingkarkepala:""
  };
const optionsKeadaanUmum = [
{ label: 'Tampak Baik', value: 'baik' },
{ label: 'Tampak Sedang', value: 'sedang' },
{ label: 'Tampak Buruk', value: 'buruk' },
];

const optionsKesadaran = [
{ label: 'Komposmentis', value: 'komposmentis' },
{ label: 'Apatis', value: 'apatis' },
{ label: 'Samnolen', value: 'samnolen' },
{ label: 'Sopor', value: 'sopor' },
{ label: 'Soporocoma', value: 'soporocoma' },
{ label: 'Koma', value: 'koma' },
];
const Pemeriksaanfisik = () => {
    
    return (
        <>
            <Card sx={{ minWidth: 275,marginTop:1 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 24 }} gutterBottom>
                        Pemeriksaan Fisik
                    </Typography>
                    <PemeriksaanfisikBody />
                </CardContent>
            </Card>
            
        </>
    )
}

export default Pemeriksaanfisik

const PemeriksaanfisikBody = ()=>{
    const handleSubmit = (values) => {
        console.log(values);
      };
    return <>
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values, handleChange, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
                <FieldRadio
                    label='Keadaan Umum Pasien'
                    name="keadaanUmum"
                    value={values.keadaanUmum}
                    onChange={handleChange}
                    items={optionsKeadaanUmum}
                />
                <FieldRadio
                    label='Kesadaran Pasien'
                    name="kesadaran"
                    value={values.kesadaran}
                    onChange={handleChange}
                    items={optionsKesadaran}
                />
                Keluhan<br/>
                <TextField
                    sx={{
                        width:'100%'
                    }}
                    id="keluhan"
                    name="keluhan"
                    multiline
                    rows={3}
                    value={values.keluhan}
                    onChange={handleChange}
                />
                Tekanan Darah
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <FieldText
                            label="Sistolik"
                            name="sistolik"
                            value={values.sistolik}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FieldText
                            label="Diatolik"
                            name="diatolik"
                            value={values.diatolik}
                            onChange={handleChange}
                        />
                    </Grid>
                </Grid>
                <FieldText
                    label="Berat Badan"
                    name="beratBadan"
                    value={values.beratBadan}
                    onChange={handleChange}
                />
                <FieldText
                    label="Nadi"
                    name="nadi"
                    value={values.nadi}
                    onChange={handleChange}
                />
                <FieldText
                    label="Frekuensi Nafas"
                    name="frekuensiNafas"
                    value={values.frekuensiNafas}
                    onChange={handleChange}
                />
                <FieldText
                    label="Suhu"
                    name="suhu"
                    value={values.suhu}
                    onChange={handleChange}
                />
                <FieldText
                    label="Lingkar Kepala"
                    name="lingkarKepala"
                    value={values.lingkarKepala}
                    onChange={handleChange}
                />
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