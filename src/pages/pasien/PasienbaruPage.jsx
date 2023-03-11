import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
import {useState} from 'react';
import { Formik,Field  } from 'formik';

// @mui
import { useTheme , alpha, styled} from '@mui/material/styles';
import { Grid, Container, Typography, Link, Stack, IconButton, InputAdornment, TextField, Checkbox } from '@mui/material';
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
import { Autocomplete } from 'formik-mui';
import FormControl from '@mui/material/FormControl';

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

// ----------------------------------------------------------------------


export default function PasienbaruPage() {
  const theme = useTheme();
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [nama,setNama] = useState('');
  const [showPassword, setShowPassword] = useState(false);

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

  return (
    <>
      <Helmet>
        <title> Pendaftaran Pasien Baru | Klinik </title>
      </Helmet>

          <Typography variant="h4" gutterBottom>
            Formulir Pendaftaran Pasien Baru
          </Typography>
           <Formik

              initialValues={{  nama:'',jk:'',jnsidentitas:'',noidentitas:"",nobpjs:"",tmptlahir:"",agama:"",stskawin:"",goldarah:'',kewarganegaraan:'',tgllahir:'',bahasa:'',sukubangsa:'',alamat:'',kodepos:'',nohp:'',namaayah:'',namaibu:'',pendidikan:'' }}

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

              onSubmit={ (values, { setSubmitting }) => {
                console.log(values);
                setSubmitting(false);
                // const {data} = await axios.post(`${BASE_URL}auth`,values,{
                //   headers:{
                //     Authorization: `Bearer ${token}`
                //   },
                // }
                // );

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
                        Nama Lengkap
                      </InputLabel>
                      <BootstrapInput type='text' key={'nama'} name={'nama'} onChange={handleChange} value={values.nama} />
                      <br />
                      <InputLabel sx={{color:'red'}} shrink htmlFor="bootstrap-input">
                      {errors.nama}
                      </InputLabel>
                      {/* end nama lengkap */}
                      <br/>
                      {/* tgl lahir */}
                      <InputLabel shrink htmlFor="bootstrap-input">
                        Tanggal Lahir 
                      </InputLabel>
                      <BootstrapInput type='date' key={'tgllahir'} sx={{shrink:true}} name={'tgllahir'} onChange={handleChange} value={values.tgllahir} />
                      
                      <InputLabel sx={{color:'red'}} shrink htmlFor="bootstrap-input">
                      {errors.tgllahir}
                      </InputLabel>
                      {/* end tgl lahir */}
                      <br/>
                      {/* tempat lahir */}
                      <InputLabel shrink htmlFor="bootstrap-input">
                        Tempat Lahir
                      </InputLabel>
                      <BootstrapInput type='text' key={'tmptlahir'} name={'tmptlahir'} onChange={handleChange} value={values.tmptlahir} />
                      <br />
                      <InputLabel sx={{color:'red'}} shrink htmlFor="bootstrap-input">
                      {errors.tmptlahir}
                      </InputLabel>
                      {/* tempat lahir */}
                      <br/>
                      {/* pilih identitas */}
                      <InputLabel shrink htmlFor="bootstrap-input">
                        Pilih Identitas 
                      </InputLabel>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                      >
                        <FormControlLabel onChange={handleChange} value="KTP" control={<Radio />} name="jnsidentitas" label="KTP" size="small" />
                        <FormControlLabel onChange={handleChange} value="SIM" control={<Radio />} name="jnsidentitas" label="SIM" size="small" />
                        <FormControlLabel onChange={handleChange} value="PASPOR" control={<Radio />} name="jnsidentitas" label="PASPOR" size="small" />
                        <FormControlLabel onChange={handleChange} value="Lainnya" control={<Radio />} name="jnsidentitas" label="Lainnya" size="small" />
                      </RadioGroup>
                      <InputLabel sx={{color:'red'}} shrink htmlFor="bootstrap-input">
                      {errors.jnsidentitas}
                      {/* end pilih identitas */}
                      {/* no identitas */}
                      </InputLabel>
                      <br/>
                      <InputLabel shrink htmlFor="bootstrap-input">
                        No. Identitas
                      </InputLabel>
                      <BootstrapInput type='text' key={'noidentitas'} name={'noidentitas'} onChange={handleChange} value={values.noidentitas} />
                      <br />
                      <InputLabel sx={{color:'red'}} shrink htmlFor="bootstrap-input">
                      {errors.noidentitas}
                      </InputLabel>
                      {/* end no identitas */}
                      <br />
                      {/* jenis kelamin */}
                      <InputLabel shrink htmlFor="bootstrap-input">
                        Jenis Kelamin
                      </InputLabel>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="jk"
                      >
                        <FormControlLabel value="P" onChange={handleChange} control={<Radio />} name="jk" label="Perempuan" size="small" />
                        <FormControlLabel value="L" onChange={handleChange} control={<Radio />} name="jk" label="Laki-Laki" size="small" />
                      </RadioGroup>
                      <InputLabel sx={{color:'red'}} shrink htmlFor="bootstrap-input">
                      {errors.jk}
                      </InputLabel>
                      {/* end jenis kelamin */}
                      <br/>
                      {/* no kartu bpjs */}
                      <InputLabel shrink htmlFor="bootstrap-input">
                        No. Kartu BPJS
                      </InputLabel>
                      <BootstrapInput type='text' key={'nobpjs'} name={'nobpjs'} onChange={handleChange} value={values.nobpjs} />
                      <br />
                      <InputLabel sx={{color:'red'}} shrink htmlFor="bootstrap-input">
                      {errors.nobpjs}
                      </InputLabel>
                      {/* end no kartu bpjs */}
                      <br />
                      {/* kodepos */}
                      <InputLabel shrink htmlFor="bootstrap-input">
                        Kode POS
                      </InputLabel>
                      <BootstrapInput type='text' key={'kodepos'} name={'kodepos'} onChange={handleChange} value={values.kodepos} />
                      <br />
                      <InputLabel sx={{color:'red'}} shrink htmlFor="bootstrap-input">
                      {errors.kodepos}
                      </InputLabel>
                      {/* end kodepos */}
                      <br />
                      {/* nama ayah */}
                      <InputLabel shrink htmlFor="bootstrap-input">
                        Nama Ayah
                      </InputLabel>
                      <BootstrapInput type='text' key={'namaayah'} name={'namaayah'} onChange={handleChange} value={values.namaayah} />
                      <br />
                      <InputLabel sx={{color:'red'}} shrink htmlFor="bootstrap-input">
                      {errors.namaayah}
                      </InputLabel>
                      {/* end nama ayah */}
                      <br />
                      {/* pendidikan */}
                      <InputLabel shrink htmlFor="bootstrap-input">
                        Pendidikan 
                      </InputLabel>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        sx={{
                          width:'24em'
                        }}
                      >
                        <FormControlLabel onChange={handleChange} value="S1/DIV" control={<Radio />} name="pendidikan" label="S1/DIV" size="small" />
                        <FormControlLabel onChange={handleChange} value="DIII" control={<Radio />} name="pendidikan" label="DIII" size="small" />
                        <FormControlLabel onChange={handleChange} value="SMA" control={<Radio />} name="pendidikan" label="SMA" size="small" />
                        <FormControlLabel onChange={handleChange} value="SLTP/SMP" control={<Radio />} name="pendidikan" label="SLTP/SMP" size="small" />
                        <FormControlLabel onChange={handleChange} value="SD" control={<Radio />} name="pendidikan" label="SD" size="small" />
                        <FormControlLabel onChange={handleChange} value="Belum / Tidak Sekolah" control={<Radio />} name="pendidikan" label="Belum / Tidak Sekolah" size="small" />
                      </RadioGroup>
                      <InputLabel sx={{color:'red'}} shrink htmlFor="bootstrap-input">
                      {errors.pendidikan}
                      </InputLabel>
                      {/* end pendidikan */}
                    </Grid>
                    <Grid item xs={6}>
                      {/* alamat */}
                      <InputLabel shrink htmlFor="bootstrap-input">
                        Alamat
                      </InputLabel>
                      <BootstrapInput type='text' key={'alamat'} name={'alamat'} onChange={handleChange} value={values.alamat} />
                      <br />
                      <InputLabel sx={{color:'red'}} shrink htmlFor="bootstrap-input">
                      {errors.alamat}
                      </InputLabel>
                      <br />

                      <InputLabel shrink htmlFor="bootstrap-input">
                        Agama 
                      </InputLabel>
                      {/* end alamat */}
                      {/* agama */}
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        sx={{
                          width:'26em'
                        }}
                      >
                        <FormControlLabel onChange={handleChange} value="ISLAM" control={<Radio />} name="agama" label="Islam" size="small" />
                        <FormControlLabel onChange={handleChange} value="KATHOLIK" control={<Radio />} name="agama" label="Katholik" size="small" />
                        <FormControlLabel onChange={handleChange} value="KRISTEN" control={<Radio />} name="agama" label="Kristen" size="small" />
                        <FormControlLabel onChange={handleChange} value="BUDHA" control={<Radio />} name="agama" label="Budha" size="small" />
                        <FormControlLabel onChange={handleChange} value="HINDU" control={<Radio />} name="agama" label="Hindu" size="small" />
                      </RadioGroup>
                      <InputLabel sx={{color:'red'}} shrink htmlFor="bootstrap-input">
                      {errors.agama}
                      </InputLabel>
                      {/* end agama */}
                      <br />
                      {/* status perkawinan */}
                      <InputLabel shrink htmlFor="bootstrap-input">
                        Status Perkawinan 
                      </InputLabel>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                      >
                        <FormControlLabel onChange={handleChange} value="BK" control={<Radio />} name="stskawin" label="Belum Kawin" size="small" />
                        <FormControlLabel onChange={handleChange} value="SK" control={<Radio />} name="stskawin" label="Sudah Kawin" size="small" />
                        <FormControlLabel onChange={handleChange} value="C" control={<Radio />} name="stskawin" label="Cerai" size="small" />
                      </RadioGroup>
                      <InputLabel sx={{color:'red'}} shrink htmlFor="bootstrap-input">
                      {errors.stskawin}
                      </InputLabel>
                      {/* end status perkawinan */}
                      <br />
                      {/* golongan darah */}
                      <InputLabel shrink htmlFor="bootstrap-input">
                        Golongan Darah 
                      </InputLabel>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        sx={{
                          width:'26em'
                        }}
                      >
                        <FormControlLabel onChange={handleChange} value="A+" control={<Radio />} name="goldarah" label="A+" size="small" />
                        <FormControlLabel onChange={handleChange} value="A-" control={<Radio />} name="goldarah" label="A-" size="small" />
                        <FormControlLabel onChange={handleChange} value="B+" control={<Radio />} name="goldarah" label="B+" size="small" />
                        <FormControlLabel onChange={handleChange} value="B-" control={<Radio />} name="goldarah" label="B-" size="small" />
                        <FormControlLabel onChange={handleChange} value="AB+" control={<Radio />} name="goldarah" label="AB+" size="small" />
                        <FormControlLabel onChange={handleChange} value="AB-" control={<Radio />} name="goldarah" label="AB-" size="small" />
                        <FormControlLabel onChange={handleChange} value="O+" control={<Radio />} name="goldarah" label="O+" size="small" />
                        <FormControlLabel onChange={handleChange} value="O-" control={<Radio />} name="goldarah" label="O-" size="small" />
                      </RadioGroup>
                      <InputLabel sx={{color:'red'}} shrink htmlFor="bootstrap-input">
                      {errors.goldarah}
                      </InputLabel>
                      {/* end golongan darah */}
                      <br/>
                      {/* kewarganegaraan */}
                      <InputLabel shrink htmlFor="bootstrap-input">
                        Kewarganegaraan 
                      </InputLabel>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                      >
                        <FormControlLabel onChange={handleChange} value="WNI" control={<Radio />} name="kewarganegaraan" label="Warga Negara Indonesia" size="small" />
                        <FormControlLabel onChange={handleChange} value="WNA" control={<Radio />} name="kewarganegaraan" label="Warga Negara Asing" size="small" />
                      </RadioGroup>
                      <InputLabel sx={{color:'red'}} shrink htmlFor="bootstrap-input">
                      {errors.kewarganegaraan}
                      </InputLabel>
                      {/* end */}
                      <br/>
                      {/* bahasa */}
                      <InputLabel shrink htmlFor="bootstrap-input">
                        Bahasa Sehari hari 
                      </InputLabel>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                      >
                        <FormControlLabel onChange={handleChange} value="daerah" control={<Radio />} name="bahasa" label="Bahasa Daerah" size="small" />
                        <FormControlLabel onChange={handleChange} value="indonesia" control={<Radio />} name="bahasa" label="Bahasa Indonesia" size="small" />
                      </RadioGroup>
                      <InputLabel sx={{color:'red'}} shrink htmlFor="bootstrap-input">
                      {errors.bahasa}
                      </InputLabel>
                      {/* end bahasa */}
                      <br />
                      {/* no hp */}
                      <InputLabel shrink htmlFor="bootstrap-input">
                        No. HP
                      </InputLabel>
                      <BootstrapInput type='text' key={'nohp'} name={'nohp'} onChange={handleChange} value={values.nohp} />
                      <br />
                      <InputLabel sx={{color:'red'}} shrink htmlFor="bootstrap-input">
                      {errors.nohp}
                      </InputLabel>
                      
                      {/* end no hp */}
                        <br />
                        {/* nama ibu */}
                        <InputLabel shrink htmlFor="bootstrap-input">
                          Nama Ibu
                        </InputLabel>
                        <BootstrapInput type='text' key={'namaibu'} name={'namaibu'} onChange={handleChange} value={values.namaibu} />
                        <br />
                        <InputLabel sx={{color:'red'}} shrink htmlFor="bootstrap-input">
                        {errors.namaibu}
                        </InputLabel>
                        {/* end nama ibu */}
                        <br/>
                        {/* pekerjaan */}
                        <InputLabel shrink htmlFor="bootstrap-input">
                          Pekerjaan
                        </InputLabel>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                          sx={{
                            width:'24em'
                          }}
                        >
                          <FormControlLabel onChange={handleChange} value="PNS/POL/TNI" control={<Radio />} name="pekerjaan" label="PNS/POL/TNI" size="small" />
                          <FormControlLabel onChange={handleChange} value="Karyawan Swasta" control={<Radio />} name="pekerjaan" label="Karyawan Swasta" size="small" />
                          <FormControlLabel onChange={handleChange} value="Pelajar/Mahasiswa" control={<Radio />} name="pekerjaan" label="Pelajar/Mahasiswa" size="small" />
                          <FormControlLabel onChange={handleChange} value="Dagang" control={<Radio />} name="pekerjaan" label="Dagang" size="small" />
                          <FormControlLabel onChange={handleChange} value="Buruh" control={<Radio />} name="pekerjaan" label="Buruh" size="small" />
                          <FormControlLabel onChange={handleChange} value="Ibu Rumah Tangga" control={<Radio />} name="pekerjaan" label="Ibu Rumah Tangga" size="small" />
                          <FormControlLabel onChange={handleChange} value="Lainnya" control={<Radio />} name="pekerjaan" label="Lainnya" size="small" />
                        </RadioGroup>
                        <InputLabel sx={{color:'red'}} shrink htmlFor="bootstrap-input">
                        {errors.pekerjaan}
                        </InputLabel>
                        {/* end pekerjaan */}
                        <br/>
                    </Grid>
                  </Grid>

                  
                  <br />
                 

                  <LoadingButton size="medium" type="submit" variant="contained" disabled={isSubmitting}>
                    Simpan
                  </LoadingButton>
                </form>
              )}

          </Formik>
       
    </>
  );
}
