import { Helmet } from 'react-helmet-async';
// @mui
import {
  Container,
  Typography
} from '@mui/material';
import { Formik, Form } from "formik";

import InputLabel from '@mui/material/InputLabel';
import Autocompletecstm from '../../components/form/Autocompletecstm';
import TableAntrianPasienPage from './TableAntrianPasienPage';


export default function AntrianpasienPerawatPage() {
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

const initialValues = {
  city_id: { name: "", id: null, state: "" }
};

const submit = values => {
  alert(`Value for city_id is: ${JSON.stringify(values.city_id)}`);
};

  return (
    <>
      <Helmet>
        <title> Antrian Pasien | Klinik </title>
      </Helmet>

      <Container>
        <Typography variant="h4" gutterBottom>
          Antrian Pasien
        </Typography>
        <Formik initialValues={initialValues} onSubmit={submit}>
          {({ handleChange, values, setFieldValue }) => (
            <Form>


              <InputLabel shrink htmlFor="bootstrap-input">
                  Pilih Poliklinik 
                </InputLabel>
              <Autocompletecstm options={cities} initialValues={initialValues} setFieldValue={setFieldValue} />
                
          </Form>
          )}
        </Formik>
        <TableAntrianPasienPage />
      </Container>
    </>
  );
}
