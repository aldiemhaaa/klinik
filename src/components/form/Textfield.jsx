import React from 'react'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { useTheme , alpha, styled} from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

const TextfieldCstm = ({label,nama,onChange,onBlur,value,}) => {
    
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
      <InputLabel shrink htmlFor="bootstrap-input">
          {label}
      </InputLabel>
      <BootstrapInput type='text' key={nama} name={nama} onChange={onChange} value={value} id="bootstrap-input" />
    </>
  )
}

export default TextfieldCstm