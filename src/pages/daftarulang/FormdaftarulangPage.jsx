import { Helmet } from 'react-helmet-async';
import {useEffect, useState} from 'react';
import {  Container, TextField, Typography,Grid} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import { Formik, Form } from "formik";
import { LoadingButton } from '@mui/lab';


import axios from 'axios';
import {useParams} from 'react-router-dom';
import Autocompletecstm from '../../components/form/Autocompletecstm';

import BASE_URL from '../../constants/env';
import Radiobutton from '../../components/form/Radiobutton';
// ----------------------------------------------------------------------

export default function FormdaftarulangPage() {
  const { norm } = useParams();
  const [pasien,setPasien] = useState({});

  const initialValues = {
    city_id: { name: "", id: null, state: "" }
  };
  
  
  const token = sessionStorage.getItem('token');
  
  const pencarianPasien = async()=>{
    axios
      .get(`${BASE_URL}pasien/${norm}`, {
        headers:{
          Authorization: `Bearer ${token}`
        }
        })
        .then((response) => {
          console.log(response.data);
          setPasien(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
  }
  
  useEffect(()=>{
    pencarianPasien();
  },[])

  const dataRadio = [
    {
      label:'Lama',
      value:'lama'
    },
    {
      label:'Baru',
      value:'baru'
    }
  ];

  const cities = [{
    state: "Illinois",
    name: "Chicago",
    id: 3,
}, {
    state: "Texas",
    name: "Houston",
    id: 2
}, {
    state: "California",
    name: "Los Angeles",
    id: 1
}, {
    state: "New York",
    name: "New York City",
    id: 4
}];

  const submit = values => {
    alert(`Value for city_id is: ${JSON.stringify(values.city_id)}`);
  };


  return (
    <>
      <Helmet>
        <title> Form Pendaftaran Ulang | Klinik </title>
      </Helmet>
        <Container>
          <Typography variant="h4" gutterBottom>
            Form Pendaftaran Ulang
          </Typography>
          <Formik initialValues={initialValues} onSubmit={submit}>
          {({ handleChange, values, setFieldValue }) => (
            <Form>
          <Radiobutton name='jeniskunjungan' label="Jenis Kunjungan" value={dataRadio} />
          <Radiobutton name='carabayar' label="Cara Bayar" value={[{label:'UMUM',value:'UMUM'},{label:'BPJS',value:'BPJS'},{label:'PERUSAHAAN',value:'PERUSAHAAN'}]} />
          <Radiobutton name='kekhususan' label="Kekhususan" value={[{label:'Kereta Dorong',value:'KERETA DORONG'},{label:'Kursi Dorong',value:'KURSI DORONG'},{label:'Lainnya..',value:'LAINNYA'}]} />

          <InputLabel shrink htmlFor="bootstrap-input">
            Tanggal Kunjungan 
          </InputLabel>
          <TextField type='date' key={'tgllahir'} sx={{shrink:true}} name={'tgllahir'}  />
          <Radiobutton name='carakunjungan' label="Cara Kunjungan" value={[{label:'Datang Sendiri',value:'DATANG SENDIRI'},{label:'Dikirim Dokter',value:'DIKIRIM DOKTER'},{label:'Rujukan Puskesmas',value:'RUJUKAN PUSKEMAS'},{label:'Rujukan RS',value:'RUJUKAN RS'}]} />
          <InputLabel shrink htmlFor="bootstrap-input">
            Tujuan Poliklinik 
          </InputLabel>
          <Autocompletecstm options={cities} initialValues={initialValues} setFieldValue={setFieldValue} />
          <InputLabel shrink htmlFor="bootstrap-input">
            Dokter 
          </InputLabel>
          <Autocompletecstm options={cities} initialValues={initialValues} setFieldValue={setFieldValue} />
          <LoadingButton size="medium" type="submit" variant="contained">
            Simpan
          </LoadingButton>
          </Form>
      )}
    </Formik>
         
          </Container>
    </>
  );
}
