import React from 'react'
import { useSelector } from 'react-redux'
import './ResSidebar.css'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const ResSidebar = ({setCategory}) =>{
    const categories = useSelector(state=>state.categories.categories)

    const [state, setState] = React.useState({
        categorias: false
      });
    
      const toggleDrawer =
        (anchor, open) =>
        (event) => {
          if (
            event.type === 'keydown' &&
            ((event ).key === 'Tab' ||
              (event ).key === 'Shift')
          ) {
            return;
          }
    
          setState({ ...state, [anchor]: open });
        };
    
      const list = (anchor) => (
        <Box
          sx={{ width:  'auto'  }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            {categories.map((item, index) => (
              <ListItem  key={item.nombre} disablePadding>
                <ListItemButton onClick={()=>{setCategory(item.shortening)}} >
                  
                  <ListItemText primary={item.nombre} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
         
        </Box>
      );
    
      return (
        <div className='res-sidebar-container'>
          {(['categorias'] ).map((anchor) => (
            <React.Fragment key={anchor}>
              <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </div>
      );
    
}

export default ResSidebar