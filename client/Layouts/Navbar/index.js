import React, { useState } from 'react';
import { Navlogo, Navlinks } from '../../utils/Data';
import { AppBar, Box, Container, Toolbar, IconButton, Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { styled } from '@mui/system';

function Navbar() {
  const [drawer, setDrawer] = useState(false);
  const toggleDrawer = (state) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawer(state);
  };

  const MyAppBar = styled(AppBar)({
    backgroundColor: '#014073',
    position: 'static',
  });

  return (
    <MyAppBar
      sx={{
        boxShadow: 3,
      }}
    >
      <Container>
        <Toolbar
          sx={{
            justifyContent: 'space-between',
          }}
        >
          <img src={Navlogo} alt='navbar logo' width='130px' height='auto' />

          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            onClick={toggleDrawer(true)}
            sx={{
              ml: 'auto',
              display: { sm: 'none', xs: 'block' },
              color: 'white',
            }}
            id='menu_btn'
          >
            <MenuIcon />
          </IconButton>
          <Drawer anchor={'right'} open={drawer} onClose={toggleDrawer(false)}>
            <Box
              role='presentation'
              onKeyDown={toggleDrawer(false)}
              sx={{
                backgroundColor: '#014073',
                height: '100%',
                width: { sm: 0, xs: 200 },
              }}
            >
              <List
                sx={{
                  px: 1,
                }}
              >
                {Navlinks.map((item, index) => (
                  <div onClick={toggleDrawer(false)} key={index}>
                    <ListItem button key={index}>
                      <ListItemText className='customClass'>
                        <Link href={item.link}>
                          <Box sx={{ color: 'white', transition: 'all 0.5s ease', ':hover': { color: '#ff9d34', backgroundColor: 'none' } }}>
                            {item.text}
                          </Box>
                        </Link>
                      </ListItemText>
                    </ListItem>
                  </div>
                ))}
              </List>
            </Box>
          </Drawer>
          <Box sx={{ display: { sm: 'block', xs: 'none' }, mr: 2 }}>
            <ul>
              {Navlinks.map((link, index) => (
                <Button
                  sx={{
                    fontSize: '16px',
                    fontWeight: '500',
                    letterSpacing: '0.5px',
                    fontFamily: 'Poppins',
                    mx: { md: 2, xs: 1 },
                    textAlign: 'center',
                  }}
                  underline='none'
                  key={index}
                >
                  <Link href={link.link}>
                    <Box sx={{ color: 'white', transition: 'all 0.5s ease', ':hover': { color: '#ff9d34', backgroundColor: 'none' } }}>
                      {link.text}
                    </Box>
                  </Link>
                </Button>
              ))}
            </ul>
          </Box>
        </Toolbar>
      </Container>
    </MyAppBar>
  );
}

export default Navbar;
