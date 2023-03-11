import { Helmet } from 'react-helmet-async';
import { Formik } from 'formik';

import { Container, Typography, Stack, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import axios from 'axios';
import BASE_URL from '../../constants/env';

export default function NewmenuPage() {

  const token = localStorage.getItem('token');
  const menu  = {
    title:'',
    url:'',
    icon:''
  }

  return (
    <>
      <Helmet>
        <title> Menu Baru | Klinik </title>
      </Helmet>

      <Container maxWidth="xl">
        <Stack spacing={3}>
          <Typography variant="h4" gutterBottom>
            Tambah Menu
          </Typography>
           <Formik

              initialValues={menu}

              validate={values => {

                const errors = {};
                // if (!values.username) {

                //   errors.username = 'username wajib diisi';

                // } 
                Object.keys(menu).forEach((e)=>{
                  // console.log(e);
                  if(!values[e]){
                    errors[e] =  `${e} wajib diisi`
                  }
                });
                console.log(errors);

                return errors;

              }}

              onSubmit={async (values, { setSubmitting }) => {
                const {data} = await axios.post(`${BASE_URL}menu`,values,{
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
                    {Object.keys(menu).map((e)=>
                      <>
                         <TextField
                          error={errors[e] && touched[e] && errors[e]}
                          type='text' name={e} label={e} onChange={handleChange} onBlur={handleBlur} value={values.e}
                          helperText={errors[e] && touched[e] && errors[e]}
                          />
                        <br/>
                        <br/>
                      </>
                      )
                    }
                    
                    <LoadingButton size="medium" type="submit" variant="contained" onClick={handleSubmit}>
                      Simpan
                    </LoadingButton>
                  </form>
                </Stack>
              )}

          </Formik>
        </Stack>

       
      </Container>
    </>
  );
}
