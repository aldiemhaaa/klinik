// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
    isParent:false,
    children:[]
  },
  {
    title: 'Pendaftaran Pasien',
    path: '/pasien',
    icon: icon('ic_user'),
    isParent:false,
    children:[]
  },
  {
    title: 'Daftar Ulang',
    path: '/daftarulang',
    icon: icon('ic_user'),
    isParent:false,
    children:[]
  },
  {
    title: 'Pelayanan Pasien',
    path: '/pelayanan',
    icon: icon('ic_user'),
    isParent:false,
    children:[]
  },
  {
    title: 'Master Data',
    path: '#',
    icon: icon('ic_lock'),
    isParent:true,
    children:[
      {
        title: 'user',
        path: '/dashboard/user',
        icon: icon('ic_user'),
        isParent:false,
        children:[]
      },
      {
        title: 'role',
        path: '/dashboard/role',
        icon: icon('ic_user'),
        isParent:false,
        children:[]
      },
      {
        title: 'menu',
        path: '/dashboard/menu',
        icon: icon('ic_user'),
        isParent:false,
        children:[]
      },
    ]
  },
];

export default navConfig;
