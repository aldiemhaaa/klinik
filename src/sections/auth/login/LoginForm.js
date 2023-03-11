import { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import axios from 'axios';

// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import Iconify from '../../../components/iconify';
import BASE_URL from '../../../constants/env';
// import { toast } from "react-toastify";
// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  // const history = useHistory();

  const handleClick = () => {
    navigate('/dashboard', { replace: true });
  };

  const handleSubmit = async (e)=>{
    e.preventDefault();
    try{
      const {data} = await axios.post(`${BASE_URL}auth/login`,{
        username,
        password
      });
      sessionStorage.setItem("token", data.response.token);
      sessionStorage.setItem("menu",JSON.stringify(data.response.menu));
      navigate('/dashboard', { replace: true });

    }catch(err){
      // toast.error(err.response.data.message);
      console.log(err.response.data.message);
    }
  }

  return (
    <>
      <Stack spacing={3}>
        <TextField name="username" label="Username" onChange={(e)=>setUsername(e.target.value)} />

        <TextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          onChange={(e)=>setPassword(e.target.value)}
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
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <Checkbox name="remember" label="Remember me" />
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={handleSubmit}>
        Login
      </LoadingButton>
    </>
  );
}
