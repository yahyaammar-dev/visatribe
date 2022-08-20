import React from 'react';
import { Grid, Container, Typography, Button, Link } from '@mui/material';
import { MainSection as Data } from '../../Data';
import { theme } from '../../theme';

function MainSec() {
  return (
    <Container id='home'>
      <Grid container direction='row' sx={{ mt: 12 }} spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography
            sx={{
              mt: { md: 7, xs: 2 },
              typography: { md: 'h3', xs: 'h4' },
            }}
          >
            {Data.heading}
          </Typography>
          <Typography
            sx={{
              mt: { md: 3, xs: 2 },
              fontSize: '17px',
              color: 'text.main',
            }}
          >
            {Data.paragraph}
          </Typography>
          <Link href="http://localhost:3000/loi">
            <Button
              sx={{
                mt: { md: 5, xs: 2 },
                color: 'ternary.main',
                border: '2px solid',
                ':hover': {
                  background: theme.palette.ternary.main,
                  color: 'primary.main',
                },
              }}
            >
              {Data.button}
            </Button>
          </Link>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={Data.img} alt='mainsec' width='100%' height='auto' />
        </Grid>
      </Grid>
    </Container>
  );
}

export default MainSec;
