import { Navigate, useRoutes } from 'react-router-dom';
import {useState,useEffect} from 'react';
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import BlogPage from './pages/BlogPage';
import UserPage from './pages/user/UserPage';
import LoginPage from './pages/auth/LoginPage';
import Page404 from './pages/Page404';
import ProductsPage from './pages/ProductsPage';
import DashboardAppPage from './pages/DashboardAppPage';
import NewuserPage from './pages/user/NewuserPage';
import MenuPage from './pages/menu/MenuPage';
import RolePage from './pages/role/RolePage';
import ProtectedRoute from './utils/Protectedroute';
import NewmenuPage from './pages/menu/NewmenuPage';
import EditmenuPage from './pages/menu/EditmenuPage';
import PasienbaruPage from './pages/pasien/PasienbaruPage';
import DaftarulangPage from './pages/daftarulang/DaftarulangPage';
import FormdaftarulangPage from './pages/daftarulang/FormdaftarulangPage';
import AntrianpasienPerawatPage from './pages/pelayanan/perawat/AntrianpasienPerawatPage';


// ----------------------------------------------------------------------

export default function Router() {

  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <ProtectedRoute><DashboardLayout /></ProtectedRoute>,
      children: [
        { element: 
          
            <Navigate to="/dashboard/app" />
          
        , index: true },
        { path: 'app', element:<ProtectedRoute><DashboardAppPage /></ProtectedRoute>},
        { path: 'user',
          children:[
            {element: <UserPage/>,index:true},
            {path:'newuser',element:<NewuserPage />}
          ] 
        },
        { path: 'menu',
          children:[
            {element: <MenuPage/>,index:true},
            {path:'new',element:<NewmenuPage />},
            {path:'edit',element:<EditmenuPage />}
          ] 
        },
        { path: 'role',
          children:[
            {element: <RolePage/>,index:true},
            // {path:'new',element:<NewmenuPage />}
          ] 
        },
        
        
        // { path: 'products', element: <ProtectedRoute><ProductsPage /> </ProtectedRoute>},
        // { path: 'blog', element: <ProtectedRoute><BlogPage /></ProtectedRoute> },
        // { path: 'newuser', element:  <ProtectedRoute><BlogPage /></ProtectedRoute> },
        // {path: 'newuser',element : <BlogPage />}
      ],
    },
    { 
      path: 'pasien',
      element:<ProtectedRoute><DashboardLayout /></ProtectedRoute>,
      children:[
        {element: <PasienbaruPage/>,index:true},
      ] 
    },
    { 
      path: 'daftarulang',
      element:<ProtectedRoute><DashboardLayout /></ProtectedRoute>,
      children:[
        {element: <DaftarulangPage/>,index:true},
        {path:'add/:norm',element:<FormdaftarulangPage />}

      ] 
    },
    { 
      path: 'pelayanan',
      element:<ProtectedRoute><DashboardLayout /></ProtectedRoute>,
      children:[
        {element: <AntrianpasienPerawatPage/>,index:true},

      ] 
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      element: <ProtectedRoute><SimpleLayout /></ProtectedRoute>,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
