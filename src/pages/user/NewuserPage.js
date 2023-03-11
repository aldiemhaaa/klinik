import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
import {useState} from 'react';
import { Formik } from 'formik';
// @mui
import { useTheme , alpha, styled} from '@mui/material/styles';
import { Grid, Container, Typography, Link, Stack, IconButton, InputAdornment, TextField, Checkbox } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import axios from 'axios';
// import { } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
// import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
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

export default function NewuserPage() {
  const theme = useTheme();
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [nama,setNama] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit =async (e) =>{
    e.preventDefault();
  }

  const token = localStorage.getItem('token');

  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor:'#e7e7e7',
      fontSize: 16,
      width: 'auto',
      padding: '10px 12px',
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
        <title> User Baru | Klinik </title>
      </Helmet>

          <Typography variant="h4" gutterBottom>
            Tambah Pengguna
          </Typography>
           <Formik

              initialValues={{  username: '',nama:'',password:'' }}

              validate={values => {

                const errors = {};

                if (!values.username) {

                  errors.username = 'username wajib diisi';

                } 

                if(!values.nama){
                  errors.nama = 'nama wajib diisi';
                }

                if(!values.password){
                  errors.password = 'password wajib diisi';
                }

                return errors;

              }}

              onSubmit={async (values, { setSubmitting }) => {
                const {data} = await axios.post(`${BASE_URL}auth`,values,{
                  headers:{
                    Authorization: `Bearer ${token}`
                  },
                }
                );

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
                <Stack direction="column">
                  <form onSubmit={handleSubmit}>
                    {/* <TextField
                      error={errors.nama && touched.nama && errors.nama}
                      type='text' name="nama" label="Nama" onChange={handleChange} onBlur={handleBlur} value={values.nama}
                      helperText={errors.nama && touched.nama && errors.nama}
                      /> */}
                      <FormControl variant="standard">
                        <InputLabel shrink htmlFor="bootstrap-input">
                          Nama
                        </InputLabel>
                        <BootstrapInput sx={{width:'100%'}} type='text' name='nama' onChange={handleChange} onBlur={handleBlur} value={values.nama} id="bootstrap-input" />
                      </FormControl>&nbsp;&nbsp;
                      <FormControl variant="standard">
                        <InputLabel shrink htmlFor="bootstrap-input">
                          Username
                        </InputLabel>
                        <BootstrapInput type='text' name='username' onChange={handleChange} onBlur={handleBlur} value={values.username} id="bootstrap-input" />
                      </FormControl>
                    {/* <br/>
                    <br/>
                    <TextField
                    error={errors.username && touched.username && errors.username}
                    type='username' name="username" label="Username" onChange={handleChange} onBlur={handleBlur} value={values.username}
                    helperText={errors.username && touched.username && errors.username}
                    />
                    <br/>
                    <br/> */}
                    <TextField
                     error={errors.password && touched.password && errors.password}
                     helperText={errors.password && touched.password && errors.password}
                      name="password"
                      label="Password"
                      type={showPassword ? 'text' : 'password'}
                      onChange={handleChange}
                      onBlur={handleBlur}

                      value={values.password}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                              <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    /> 
                    <br />
                    <br />
                    <LoadingButton size="medium" type="submit" variant="contained" onClick={handleSubmit}>
                      Simpan
                    </LoadingButton>
                  </form>
                </Stack>
              )}

          </Formik>
       
    </>
  );
}
