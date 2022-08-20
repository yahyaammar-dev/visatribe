import React from 'react';
import { Box, Grid, Button } from '@mui/material';
import { FooterData as Data, Navlinks } from '../../utils/Data';
import SocialIcons from '../../Components/SocialIcons';
import Copyright from '../../Components/Copyright';
import Link from 'next/link';

function Footer() {
  return (
    <Grid
      container
      component='section'
      alignItems='center'
      justifyContent='center'
      direction='column'
      sx={{ px: { md: 6, xs: 1 }, pt: 5, pb: 2, mt: 15 }}
    >
      <Grid item md={6} xs={12} alignItems='center' justifyContent='center'>
        <img src={Data.logo} alt='navbar logo' width='200px' height='auto' />
      </Grid>
      <Grid item md={6} xs={12} sx={{ mt: 3 }}>
        <Box sx={{ display: { sm: 'block', xs: 'none' }, mr: 2 }}>
          <ul>
            {Navlinks.map((link, index) => (
              <Button
                sx={{
                  fontSize: '14px',
                  fontWeight: '600',
                  letterSpacing: '0.5px',
                  fontFamily: 'Poppins',
                  mx: { md: 2, xs: 1 },
                  textAlign: 'center',
                  ':hover': {
                    color: 'secondary.main',
                  },
                }}
                underline='none'
                key={index}
              >
                <Link href={link.link}>{link.text}</Link>
              </Button>
            ))}
          </ul>
        </Box>
      </Grid>
      <Grid item md={6} xs={12} sx={{ mt: 2 }}>
        <SocialIcons />
      </Grid>
      <Grid item md={6} xs={12} sx={{ mt: 3 }}>
        <Copyright />
      </Grid>
    </Grid>
  );
}

export default Footer;
