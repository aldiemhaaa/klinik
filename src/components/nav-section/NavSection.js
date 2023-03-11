import PropTypes from 'prop-types';
import { NavLink as RouterLink } from 'react-router-dom';
// @mui
import { Box, List, ListItemText } from '@mui/material';
import {useState} from 'react';
//
import SvgColor from '../svg-color';
import { StyledNavItem, StyledNavItemIcon } from './styles';
// ----------------------------------------------------------------------

NavSection.propTypes = {
  data: PropTypes.array,
};

export default function NavSection({ data = [], ...other }) {
  return (
    <Box {...other}>
      <List key={data.length} disablePadding sx={{ p: 1 }}>
        {data.map((item,i) => (
          <div key={i}>
          {!item.isParent && <NavItem item={item} />}
          {item.isParent && <NavItemNew  item = {item} />}
          </div>
          
        ))}
      </List>
    </Box>
  );
}

// ----------------------------------------------------------------------

NavItem.propTypes = {
  item: PropTypes.object,
};

function NavItem({ item }) {
  const { title, path, icon, info } = item;

  return (
    <StyledNavItem
      component={RouterLink}
      to={path}
      sx={{
        '&.active': {
          color: 'text.primary',
          bgcolor: 'action.selected',
          fontWeight: 'fontWeightBold',
        },
      }}
    >
      <StyledNavItemIcon>{icon && icon}</StyledNavItemIcon>

      <ListItemText disableTypography primary={title} />

      {info && info}
    </StyledNavItem>
  );
}

NavItemNew.propTypes = {
  item: PropTypes.object,
};

function NavItemNew({item}){
  const { title,path,info, icon,isParent,children } = item;
  const [show,setShow] = useState(false);
  const [icons,setIcons] = useState('arrow_2');
  const handleClick = () =>{
    setShow(!show);
    if(icons === 'arrow_1'){
      setIcons('arrow_2');
    }else{
      setIcons('arrow_1');
    }
  }

  return (
    <>
    <StyledNavItem
      component={RouterLink}
      to={path}
      onClick={()=>handleClick()}
      
    >
      <StyledNavItemIcon>{icon && icon}</StyledNavItemIcon>
      <ListItemText disableTypography primary={title} />
      <SvgColor src={`/assets/icons/navbar/${icons}.svg`} sx={{  }} />
       {info && info}
    </StyledNavItem>
    {show && <>{
      children.map((e)=>{
        return (

        <StyledNavItem
        component={RouterLink}
        to={e.path}
        sx={{
          '&.active': {
            color: 'text.primary',
            bgcolor: 'action.selected',
            fontWeight: 'fontWeightBold',
            
          },
        }}
      >
        <>
              <StyledNavItemIcon style={{
                marginLeft:30
              }}>{e.icon && e.icon}</StyledNavItemIcon>
              <ListItemText disableTypography primary={e.title} />
              
              </>
       
      </StyledNavItem> 
        )
      })
      
    }</>
    }
    </>
   
  );
}