import { Helmet } from 'react-helmet-async';
import {useEffect, useState} from 'react';
import {  Container, TextField, Typography,Grid,Autocomplete } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import { Formik, Form,Field  } from "formik";
import { LoadingButton,DatePicker  } from '@mui/lab';


import axios from 'axios';
import {useParams,useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

import Autocompletecstm from '../../components/form/Autocompletecstm';

import BASE_URL from '../../constants/env';
import Radiobutton from '../../components/form/Radiobutton';

// import { } from 'react-router-dom';

// ----------------------------------------------------------------------

export default function FormdaftarulangPage() {
  const { norm } = useParams();
  const [pasien,setPasien] = useState({});

  const navigate = useNavigate();

  const initialValues = {
    bayar:'',
    poli:'',
    dokter:'',
    tglkunjungan:new Date().toISOString().split('T')[0],
    carakunj:''
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

  const listpoli = [
  {
   label:"Poli Umum",
   value:"UMUM"
  },
  {
   label:"Poli Gigi",
   value:"GIGI"
  }
  ];

  const listdokter = [
    {
     label:"Dokter A",
     value:"A"
    },
    {
     label:"Dokter B",
     value:"B"
    }
    ];

  const submit = async (values) => {
    // alert(`Value for city_id is: ${JSON.stringify(values.city_id)}`);
    values.norm = norm;
    const {data} = await axios.post(`${BASE_URL}daftarulang`,values,{
      headers:{
        Authorization: `Bearer ${token}`
      },
    }
    );
    if (data.noreg){
      Swal.fire({
        title: 'Berhasil!',
        text: 'Data Berhasil Disimpan',
        icon: 'success',
        confirmButtonText: 'Selesai'
      }).then((_)=>{
        navigate(`/daftarulang`);
      });
    }
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
          <Radiobutton name='bayar' onChange={handleChange} label="Cara Bayar" value={[{label:'UMUM',value:'UMUM'},{label:'BPJS',value:'BPJS'},{label:'PERUSAHAAN',value:'PERUSAHAAN'}]} />
          {/* <Radiobutton name='kekhususan' onChange={handleChange} label="Kekhususan" value={[{label:'Kereta Dorong',value:'KERETA DORONG'},{label:'Kursi Dorong',value:'KURSI DORONG'},{label:'Lainnya..',value:'LAINNYA'}]} /> */}

          <Radiobutton name='carakunj' onChange={handleChange} label="Cara Kunjungan" value={[{label:'Datang Sendiri',value:'DATANG SENDIRI'},{label:'Dikirim Dokter',value:'DIKIRIM DOKTER'},{label:'Rujukan Puskesmas',value:'RUJUKAN PUSKEMAS'},{label:'Rujukan RS',value:'RUJUKAN RS'}]} />
          <InputLabel shrink htmlFor="bootstrap-input">
            Tanggal Kunjungan 
          </InputLabel>
          {/* <TextField type='date' onChange={(f)=>setFieldValue(initialValues.tglkunjungan,f)} key={'tgllahir'} sx={{shrink:true}} name={'tglkunjungan'}  /> */}
          <TextField type='date' key={'tglkunjungan'} sx={{shrink:true}} name={'tglkunjungan'} onChange={handleChange} value={values.tglkunjungan} />
            
        
          <InputLabel shrink htmlFor="bootstrap-input">
            Tujuan Poliklinik 
          </InputLabel>
          <Autocompletecstm  name="poli" options={listpoli} setFieldValue={setFieldValue} />
          <InputLabel shrink htmlFor="bootstrap-input">
            Dokter 
          </InputLabel>
          <Autocompletecstm  name="dokter" options={listdokter} setFieldValue={setFieldValue} />
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