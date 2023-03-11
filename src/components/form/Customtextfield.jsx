import React from 'react'
import { useTheme , alpha, styled} from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import InputBase from '@mui/material/InputBase';

const Customtextfield = (props) => {
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
        <InputLabel shrink htmlFor="bootstrap-input">
        {props.label}
        </InputLabel>
        <BootstrapInput type='text' key={props.name} name={props.name} onChange={props.handleChange} value={props.value} />
        <br />
        <InputLabel sx={{color:'red'}} shrink htmlFor="bootstrap-input">
        {props.error}
        </InputLabel>
    </>
  )
}

export default Customtextfield