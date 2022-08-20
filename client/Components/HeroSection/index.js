import React, {useState} from 'react';
import { Grid, Button, Typography, Box } from '@mui/material';
import Country from '../Country';
import { styled } from '@mui/system';
import Link from 'next/link';


const MyButton = styled(Button)({
  background: '#4da432',
  borderRadius: '5px 0 0 0',
  color: 'white',
  fontSize: '14px',
  fontWeight: '500',
  transition: 'all 1s ease',
  '&:hover': {
    background: '#014073',
  },
});

const MainHeading = styled(Typography)({
  fontWeight: '900',
  color: 'white',
  marginBottom: '0.5rem',
});

const SubHeading = styled(Typography)({
  fontWeight: '500',
  color: 'white',
  marginBottom: '3rem',
});

const HeaderBox = styled(Box)({
  boxShadow: '0 0 1rem 0 rgba(0, 0, 0, .2)',
  borderRadius: '5px',
  backgroundColor: 'white',
  position: 'relative',
});



const CompleteFormButton = styled(MyButton)({
  margin: '0.55rem 0',
  borderRadius: '3px',
});

const AbsoluteButton = styled(MyButton)({
  top: '0',
  left: '0',
  marginLeft: '0',
  position: 'absolute',
});



function HeroSection() {

  const [travellingFrom, setTravellingFrom] = useState('')
  const [travellingTo, setTravellingTo] = useState('')

  return (
    <Grid height='100vh' width='auto' container direction='column' justifyContent='center' alignItems='center' sx={{ position: 'relative' }}>
      {' '}
      <Box sx={{ padding: { xs: '1rem', md: '0' } }}>
        <MainHeading variant='h3' align='center'>
          GET LOI INSTANTLY
        </MainHeading>
        <SubHeading variant='body1' align='center'>
          Just Fill the Information and We take care of rest
        </SubHeading>
      </Box>
      <HeaderBox className='card' container m={3} pt={4} px={{ sm: '0', md: '5rem' }} pb={6}>
        <Grid width={{ xs: '80%', md: '100%' }} margin='auto'>
          <Grid container>
            <AbsoluteButton sx={{ display: { xs: 'none', md: 'block' } }}>Get LOI</AbsoluteButton>
            <Typography
              variant='h5'
              ml={7.5}
              sx={{ display: { xs: 'inline-block', sm: 'inline-block', md: 'none' }, color: 'white', fontWeight: 900 }}
            >
              Get LOI
            </Typography>
          </Grid>
          <Grid container mt={5} mx='auto' s>
            <Country setCountry={(country) => setTravellingFrom(country)} text='Travelling from?' />
            <Country setCountry={(country) => setTravellingTo(country)} text='Travelling to?' />

            <Link
              href={{
                pathname: '/loiform',
                query: {
                  travellingFrom,
                  travellingTo
                },
              }}
            >
              <CompleteFormButton variant='contained' sx={{ width: { xs: '100%', md: 'auto' } }}>
                Complete Form
              </CompleteFormButton>
            </Link>
          </Grid>
        </Grid>
      </HeaderBox>
    </Grid>
  );
}
export default HeroSection;


