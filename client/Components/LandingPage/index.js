import React from 'react';
import { Container, Box } from '@mui/material';
import HeroSection from '../HeroSection';
import Whyus from '../Whyus';
import Blog from '../Blog';
import Testimonial from '../Reviews/SimpleSlider';
import {ContactUs} from '../ContactUs';


function LandingPage() {
  return (
    <>
      <Box sx={{ backgroundImage: `url("imgs/banner.png")`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <HeroSection />
      </Box>
      <Container>
        <Whyus />
      </Container>
      <Blog />
      <Testimonial />
      <ContactUs />
    </>
  );
}

export default LandingPage;
