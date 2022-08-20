import React from 'react';
import { Container, Box, Typography, Grid, Card, CardHeader, CardMedia, CardContent } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { styled } from '@mui/system';

const FlexBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
});

const MainHeading = styled(Typography)({
  color: '#014073',
  marginTop: '5rem',
  fontWeight: '400',
  pb: '0.5rem',
});
const TitleHeading = styled(Typography)({
  fontWeight: '900',
  display: 'inline-block',
});

const Paragrapgh = styled(Typography)({
  fontWeight: '300',
  width: '60%',
});

const LightParagrapgh = styled(Paragrapgh)({
  color: '#777c87',
  fontWeight: '300',
  width: '60%',
});

const Blog = () => {
  return (
    <>
      <Container id='blog'>
        <FlexBox>
          <MainHeading variant='h6'>Latest Travel Guides, Tips & Advice</MainHeading>
          <Box sx={{ paddingBottom: '1.5rem' }}>
            <TitleHeading variant='h4' color='#014073'>
              Our
            </TitleHeading>
            &nbsp; &nbsp;
            <TitleHeading variant='h4' color='#4da432'>
              Blog
            </TitleHeading>
          </Box>
          <LightParagrapgh variant='body1' align='center'>
            Aliquam erat volutpat. Curabitur tempor nibh quis arcu convallis, sed viverra quam sollicitudin. Proin sed augue sed neque ultricies
            condimentum.
          </LightParagrapgh>
        </FlexBox>
        <Grid container sx={{ justifyContent: 'space-between', marginTop: '5rem' }}> 
          <Grid items sm={11} md={3.5}>
            <Card sx={{boxShadow: '0 0 5px #cccbc8' }}>
              <CardMedia
                component='img'
                height='194'
                image='https://andit.co/projects/html/wend/demo/assets/img/home-03/blog/blog-1.png'
                alt='Paella dish'
              />
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
                    R
                  </Avatar>
                }
                action={
                  <IconButton aria-label='settings'>
                    <MoreVertIcon />
                  </IconButton>
                }
                title='Shrimp Paella'
                subheader='September 14, 2016'
              />
              <CardContent>
                <Typography variant='body2' color='text.secondary'>
                  This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with
                  the mussels, if you like.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid items sm={11} md={3.5}>
            <Card sx={{boxShadow: '0 0 5px #cccbc8' }}>
              <CardMedia
                component='img'
                height='194'
                image='https://andit.co/projects/html/wend/demo/assets/img/home-03/blog/blog-1.png'
                alt='Paella dish'
              />
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
                    R
                  </Avatar>
                }
                action={
                  <IconButton aria-label='settings'>
                    <MoreVertIcon />
                  </IconButton>
                }
                title='Shrimp Paella'
                subheader='September 14, 2016'
              />
              <CardContent>
                <Typography variant='body2' color='text.secondary'>
                  This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with
                  the mussels, if you like.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid items sm={11} md={3.5}>
            <Card sx={{boxShadow: '0 0 5px #cccbc8' }}>
              <CardMedia
                component='img'
                height='194'
                image='https://andit.co/projects/html/wend/demo/assets/img/home-03/blog/blog-1.png'
                alt='Paella dish'
              />
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
                    R
                  </Avatar>
                }
                action={
                  <IconButton aria-label='settings'>
                    <MoreVertIcon />
                  </IconButton>
                }
                title='Shrimp Paella'
                subheader='September 14, 2016'
              />
              <CardContent>
                <Typography variant='body2' color='text.secondary'>
                  This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with
                  the mussels, if you like.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default Blog;
