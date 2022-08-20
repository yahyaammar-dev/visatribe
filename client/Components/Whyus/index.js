import React from 'react';
import { Grid, Typography, Box, Container, Avatar } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { styled } from '@mui/system'
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import AnalyticsIcon from '@mui/icons-material/Analytics';

const FlexBox = styled(Box)({
  display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: "center"
})

const SectionHeading = styled(Typography)({
  color: '#014073', marginTop: '5rem', fontWeight: '400', pb: '0.5rem'
})

const SectionSubHeading = styled(Typography)({
  fontWeight: '900', display: 'inline-block'
})

const Paragrapgh = styled(Typography)({
  fontWeight: '300', width: '60%'
})

const BiggerAvatar = styled(Avatar)({
  background: 'white', margin: 'auto', boxShadow: '0 4px 10px #e3e3e3', padding: '1.5rem', marginBottom: '1.5rem'
})

const SmallHeading = styled(Typography)({
  lineHeight: "1.5rem", marginBottom: "1rem", fontWeight: 'bold'
})

const Whyus = () => {
  return (
    <Container id='whyus' sx={{ height: { sm: '100%', md: '100vh' } }}>
      <Grid>
        <FlexBox>
          <SectionHeading variant='h6'>Why People Choose Us</SectionHeading>
          <Box sx={{ paddingBottom: '1.5rem' }}>
            <SectionSubHeading color='#014073' variant='h4'>
              Our
            </SectionSubHeading>
            &nbsp; &nbsp;
            <SectionSubHeading variant='h4' color='#4da432'>
              Advantages
            </SectionSubHeading>
          </Box>
          <Paragrapgh variant='body1' align='center' color='#777c87'>
            Aliquam erat volutpat. Curabitur tempor nibh quis arcu convallis, sed viverra quam sollicitudin. Proin sed augue sed neque ultricies
            condimentum.
          </Paragrapgh>
        </FlexBox>

        <Grid container gap={2} sx={{ justifyContent: { md: 'space-between', xs: 'center' }, marginTop: '4rem' }}>
          <Box sx={{ maxWidth: { sm: '100%', md: '200px' }, marginBottom: { sm: '1rem', md: '0' } }}>
            <Card sx={{ boxShadow: 'none' }}>
              <CardContent>
                <BiggerAvatar>
                  <AirplanemodeActiveIcon sx={{ color: '#4da432', fontSize: '50px' }} />
                </BiggerAvatar>
                <SmallHeading variant='h6' color='#014073' align='center'>
                  The Most Reliable Airlines
                </SmallHeading>
                <Typography sx={{ mb: 1.5 }} align='center' variant='body2'>
                  Proin nec efficitur. Curabitur el puere aliquam arcu, et euismod sed.
                </Typography>
              </CardContent>
            </Card>
          </Box>

          <Box sx={{ maxWidth: { sm: '100%', md: '200px' }, marginBottom: { sm: '1rem', md: '0' } }}>
            <Card sx={{ boxShadow: 'none' }}>
              <CardContent>
                <BiggerAvatar>
                  <CalendarMonthIcon sx={{ color: '#4da432', fontSize: '50px' }} />
                </BiggerAvatar>
                <SmallHeading variant='h6' color='#014073' component='div' align='center'>
                  The Most Reliable Airlines
                </SmallHeading>
                <Typography sx={{ mb: 1.5 }} align='center' variant='body2'>
                  Proin nec efficitur. Curabitur el puere aliquam arcu, et euismod sed.
                </Typography>
              </CardContent>
            </Card>
          </Box>

          <Box sx={{ maxWidth: { sm: '100%', md: '200px' }, marginBottom: { sm: '1rem', md: '0' } }}>
            <Card sx={{ boxShadow: 'none' }}>
              <CardContent>
                <BiggerAvatar>
                  <AccessibilityIcon sx={{ color: '#4da432', fontSize: '50px' }} />
                </BiggerAvatar>
                <SmallHeading variant='h6' color='#014073' component='div' align='center'>
                  The Most Reliable Airlines
                </SmallHeading>
                <Typography sx={{ mb: 1.5 }} align='center' variant='body2'>
                  Proin nec efficitur. Curabitur el puere aliquam arcu, et euismod sed.
                </Typography>
              </CardContent>
            </Card>
          </Box>

          <Box sx={{ maxWidth: { sm: '100%', md: '200px' }, marginBottom: { sm: '1rem', md: '0' } }}>
            <Card sx={{ boxShadow: 'none' }}>
              <CardContent>
                <BiggerAvatar>
                  <AnalyticsIcon sx={{ color: '#4da432', fontSize: '50px' }} />
                </BiggerAvatar>
                <SmallHeading variant='h6' color='#014073' component='div' align='center'>
                  The Most Reliable Airlines
                </SmallHeading>
                <Typography sx={{ mb: 1.5 }} align='center' variant='body2'>
                  Proin nec efficitur. Curabitur el puere aliquam arcu, et euismod sed.
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};


export default Whyus;
