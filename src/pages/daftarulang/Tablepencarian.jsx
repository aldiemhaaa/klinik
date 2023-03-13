import { useNavigate  } from 'react-router-dom';
import axios from 'axios';
// @mui
import {
  Card,
  Avatar,
  CardHeader,
} from '@mui/material';

export default function TablePencarian({data}) {
  const navigate = useNavigate();

  const pindahHalaman = (norm)=>{
    navigate(`/daftarulang/add/${norm}`)
  }

    return data.map(item => (
        <Card onClick={()=>pindahHalaman(item.norm)}>
          <CardHeader 
            sx={{
              marginBottom:3
            }}
            avatar={
              <Avatar sx={{bgcolor:'red'}}>
                {item.nama.charAt(0)}
              </Avatar>
            }
            title={item.nama}
            subheader={item.tgllahir}
          />
        </Card>
    ));
}
