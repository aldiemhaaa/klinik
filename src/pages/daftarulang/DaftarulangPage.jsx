import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
import {useState} from 'react';
import { Formik,Field  } from 'formik';

// @mui
import { useTheme , alpha, styled} from '@mui/material/styles';
import { Grid, Container, Typography, Link, Stack, IconButton, InputAdornment, TextField, Checkbox, Card } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import axios from 'axios';
// import { } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
// import Autocomplete from '@mui/material/Autocomplete';
// import { Autocomplete } from 'formik-mui';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import FormControl from '@mui/material/FormControl';
import FormikAutocomplete from '../../components/form/Formikautocomplete';

import Customtextfield from '../../components/form/Customtextfield';

// import TextField from '@mui/material/TextField';
import TextfieldCstm from '../../components/form/Textfield';
import FormikRadioGroup from '../../components/form/FormikRadioGroup';

// components
import Iconify from '../../components/iconify';
// sections
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../../sections/@dashboard/app';
import BASE_URL from '../../constants/env';
import TablePencarian from './Tablepencarian';

// ----------------------------------------------------------------------


export default function DaftarulangPage() {
  const [isPencarianAktif,setPencarianAktif] = useState(false);

  const countries = [
    { norm: '00000001', nama: 'Janqiras', tgllahir: '03 Juni 2021' },
    { norm: '00000002', nama: 'Febriani', tgllahir: '03 Juni 2021' },
    { norm: '00000003', nama: 'Marets', tgllahir: '03 Juni 2021' },
    { norm: '00000004', nama: 'Aprilia', tgllahir: '03 Juni 2021' },
    { norm: '00000005', nama: 'Meilisa', tgllahir: '03 Juni 2021' },
   
  ];


  const theme = useTheme();
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [nama,setNama] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [hasilPencarian,setHasilPencarian] = useState([]);

  const handleSubmit =async (e) =>{
    e.preventDefault();
  }

  const top100Films = [
    {
      label:"MINANG",
      value:"MINANG"
    },
    {
      label:"JAWA",
      value:"JAWA"
    },
    {
      label:"SUNDA",
      value:"SUNDA"
    },
    {
      label:"BETAWI",
      value:"BETAWI"
    },
  ];

  const token = sessionStorage.getItem('token');
  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(1),
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor:'#e7e7e7',
      fontSize: 16,
      width: '24em',
      padding: '10px 10px',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }));

  // const myData = [{id:2,nama:"Dokter",createdAt:"2023-02-15T06:59:14.671Z",updatedAt:"2023-02-15T06:59:14.671Z"}];

  return (
    <>
      <Helmet>
        <title> Daftar Ulang | Klinik </title>
      </Helmet>
        <Container>
          <Typography variant="h4" gutterBottom>
            Form Pendaftaran Daftar Ulang
          </Typography>
           <Formik

              initialValues={{  pencarian:'' }}

              validate={values => {
                // console.log(values);

                const errors = {};
                // if(!values.nama){
                //   errors.nama = 'nama wajib diisi';no
                // }
                // if(!values.jk){
                //   errors.jk = 'Jenis Kelamin Wajib diisi';
                // }
                // if(!values.jnsidentitas){
                //   errors.jnsidentitas = 'Jenis Identitas Wajib Diisi!';
                // }
                // if(!values.noidentitas){
                //   errors.noidentitas = 'No. Identitas Wajib Diisi!';
                // }

                // if(!values.nobpjs){
                //   errors.nobpjs = 'No. Kartu BPJS Wajib Diisi!';
                // }

                // if(!values.tmptlahir){
                //   errors.tmptlahir = 'Tempat Lahir Wajib Diisi!';
                // }

                // if(!values.agama){
                //   errors.agama = 'Agama Wajib Diisi!';
                // }
                // if(!values.stskawin){
                //   errors.stskawin = 'Status Kawin Wajib Diisi!';
                // }

                // if(!values.goldarah){
                //   errors.goldarah = 'Golongan Darah Wajib Diisi!';
                // }
                // if(!values.kewarganegaraan){
                //   errors.kewarganegaraan = 'Kewarganegaraan Wajib Diisi!';
                // }
                return errors;

              }}

              onSubmit={ async (values, { setSubmitting }) => {
                setSubmitting(false);
                // console.log(values);
                axios
                .get(`${BASE_URL}pasien/pencarianpasien/${values.pencarian}`, {
                  headers:{
                    Authorization: `Bearer ${token}`
                  }
                  })
                  .then((response) => {
                    // console.log(response);
                    setHasilPencarian(response.data);
                  })
                  .catch((error) => {
                    console.log(error);
                  });
                setPencarianAktif(true);
                

              }}

              >

              {({

                values,

                errors,

                touched,

                handleChange,

                handleBlur,

                handleSubmit,

                isSubmitting,

                /* and other goodies */

              }) => (
                
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={6}>
                      {/* nama lengkap */}
                      <InputLabel shrink htmlFor="bootstrap-input">
                        Pencarian Berdasarkan No.MR atau Nama 
                      </InputLabel>
                      <BootstrapInput type='text' key={'pencarian'} name={'pencarian'} onChange={handleChange} value={values.pencarian} />
                      <LoadingButton sx={{marginLeft:'1em',padding:'0.8em'}} size="medium" type="submit" variant="contained" disabled={isSubmitting}>
                        Simpan
                      </LoadingButton>
                    </Grid>
                  </Grid>
                  
                </form>
              )}

          </Formik>
          {isPencarianAktif  && <>
            <hr/>
            <h4>Hasil Pencarian</h4>
            {hasilPencarian.length>0 && <TablePencarian data={hasilPencarian} />}
            {hasilPencarian.length <= 0 && 'Pasien Tidak Ditemukan'}
          </>}
          </Container>
    </>
  );
}
