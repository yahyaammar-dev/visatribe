import React from 'react';
import { Box, Grid, Typography, Container, List, ListItem } from '@mui/material';
import { Navlogo  } from '../../utils/Data';
import Image from 'next/image'
import { styled } from '@mui/system'

const FooterBox = styled(Box)({
  backgroundColor: '#014073',
});

const SmallBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
});

const InnerBox = styled(Box)({
  display: 'flex', 
  flexWrap: 'nowrap', 
  gap: '20px', 
  marginTop: '1rem' 
})

const CustomListItem = styled(Box)({
  display: 'block',
  color: 'white',
  padding: '0',
  flexDirection: 'column',
});

const FlexBox = styled(Box)({
  display: 'flex',
  marginTop: '1.6rem',
});

function Footer() {
  return (
    <FooterBox sx={{ backgroundColor: '#014073' }}>
      <Container sx={{ p: { sm: '3rem', md: '5rem 0' } }}>
        <Grid container gap={2} sx={{ justifyContent: 'space-between', padding: { xs: '5rem 1rem', md: 0 } }}>
          <Grid item sm={12} md={3}>
            <img src={Navlogo} alt='navbar logo' width='150px' height='auto' />
            <Typography variant='body2' sx={{ color: 'white', textAlign: 'justify', marginTop: '2rem' }}>
              Pellentesque convallis, diam et feugiat volutpat, tellus ligula consequat augue, quis malesuada nisi ante nec metus. Sed id pretium
              nunc. Mauris vitae porttitor tortor. Fusce aliquet ac metus eget egestas.
            </Typography>
          </Grid>
          <Grid item sm={12} md={4}>
            <SmallBox>
              <Box>
                <Typography variant='h5' sx={{ marginTop: '0.5rem' }} color='white'>
                  QUICK LINKS
                </Typography>

                <InnerBox>
                  <List sx={{ marginRight: '2rem' }}>
                    <CustomListItem>
                      <Box sx={{ marginBottom: '1rem' }}>
                        <Typography variant='body1'>Some Text</Typography>
                        <Typography variant='body2' sx={{ color: '#d9d9d9' }}>
                          Some Text
                        </Typography>
                      </Box>
                      <Box sx={{ marginBottom: '1rem' }}>
                        <Typography variant='body1'>Some Text</Typography>
                        <Typography variant='body2' sx={{ color: '#d9d9d9' }}>
                          Some Text
                        </Typography>
                      </Box>
                      <Box sx={{ marginBottom: '1rem' }}>
                        <Typography variant='body1'>Some Text</Typography>
                        <Typography variant='body2' sx={{ color: '#d9d9d9' }}>
                          Some Text
                        </Typography>
                      </Box>
                    </CustomListItem>
                  </List>
                  <List>
                    <CustomListItem>
                      <Box sx={{ marginBottom: '1rem' }}>
                        <Typography variant='body1'>Some Text</Typography>
                        <Typography variant='body2' sx={{ color: '#d9d9d9' }}>
                          Some Text
                        </Typography>
                      </Box>
                      <Box sx={{ marginBottom: '1rem' }}>
                        <Typography variant='body1'>Some Text</Typography>
                        <Typography variant='body2' sx={{ color: '#d9d9d9' }}>
                          Some Text
                        </Typography>
                      </Box>
                      <Box sx={{ marginBottom: '1rem' }}>
                        <Typography variant='body1'>Some Text</Typography>
                        <Typography variant='body2' sx={{ color: '#d9d9d9' }}>
                          Some Text
                        </Typography>
                      </Box>
                    </CustomListItem>
                  </List>
                </InnerBox>
              </Box>
            </SmallBox>
          </Grid>
          <Grid item sm={12} md={3}>
            <Typography variant='h5' sx={{ marginTop: '0.5rem' }} color='white'>
              RECENT POST
            </Typography>

            <FlexBox>
              <Image src='/imgs/footer.png' alt='Picture of the author' width={150} height={70} />
              <Box sx={{ marginLeft: '1rem' }}>
                <Typography color='white' variant='body1'>
                  Pellentesque convallis, diam et feugiat
                </Typography>
                <Typography color='white' variant='body2' sx={{ fontStyle: 'italic' }}>
                  Sep 09, 2019
                </Typography>
              </Box>
            </FlexBox>
            <FlexBox>
              <Image src='/imgs/footer.png' alt='Picture of the author' width={150} height={70} />
              <Box sx={{ marginLeft: '1rem' }}>
                <Typography color='white' variant='body1'>
                  Pellentesque convallis, diam et feugiat
                </Typography>
                <Typography color='white' variant='body2' sx={{ fontStyle: 'italic' }}>
                  Sep 09, 2019
                </Typography>
              </Box>
            </FlexBox>
          </Grid>
        </Grid>
      </Container>
    </FooterBox>
  );
}

export default Footer;