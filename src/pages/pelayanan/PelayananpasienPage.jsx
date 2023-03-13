import { useState } from "react";

import { Helmet } from 'react-helmet-async';
// @mui
import {
  Container,
  Typography,
  Card,
  CardHeader,
  Avatar,
  CardContent,
  Grid,
  Stepper, Step, StepLabel 
} from '@mui/material';
import Pemeriksaanfisik from './Pemeriksaanfisik';
import AssesmentkunjunganPage from './AssesmentkunjunganPage';
import TindakanPage from './TindakanPage';


export default function PelayananpasienPage() {
 

  return (
    <>
      <Helmet>
        <title> Pelayanan Pasien | Klinik </title>
      </Helmet>

      <Container>
        <Typography variant="h4" gutterBottom>
          Pelayanan Pasien
        </Typography>
        <Identitaspasien/>
        <br />
        <Progress />
        <br/>
        <Pemeriksaanfisik />
        <AssesmentkunjunganPage />
        <TindakanPage />
      </Container>
    </>
  );
}

const Identitaspasien = () => {
  return (
  <>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 24 }} gutterBottom>
          Data Pasien
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2" sx={{ mb: 1.5 }}>
              Nama: John Doe
            </Typography>
            <Typography variant="body2" sx={{ mb: 1.5 }}>
              Alamat: Jl. Merdeka No. 10, Jakarta Selatan
            </Typography>
            <Typography variant="body2" sx={{ mb: 1.5 }}>
              Tgl Lahir: 1 Januari 2000
            </Typography>
            <Typography variant="body2" sx={{ mb: 1.5 }}>
              Tgl Kunjungan: 12 Maret 2023
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2" sx={{ mb: 1.5 }}>
              No. RM: 1234567890
            </Typography>
            <Typography variant="body2" sx={{ mb: 1.5 }}>
              No. Register: 20220312001
            </Typography>
            <Typography variant="body2">
              Dokter: Dr. Jane Smith
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
    
  </>
  );
}

const steps = [
  { label: "Pemeriksaan Fisik", description: "Do something" },
  { label: "Assesment Kunjungan", description: "Do something else" },
  { label: "Tindakan", description: "Do something more" },
  { label: "Resep", description: "Do the final thing" },
  { label: "Laboratorium", description: "Do the final thing" },
];
const Progress = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Stepper activeStep={activeStep}>
      {steps.map((step, index) => (
        <Step key={step.label}>
          <StepLabel onClick={()=>console.log('hel')}>{step.label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};