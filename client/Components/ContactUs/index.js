import { Grid, TextField, Box, Container, Typography, Button, Stack, IconButton } from '@mui/material';
import { useFormik, Form, FormikProvider } from 'formik';
import { styled } from '@mui/system';
import * as yup from 'yup';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const SubmitButton = styled(Button)({
  background: '#4da432',
  borderRadius: '4px',
  color: 'white',
  fontSize: '14px',
  float: 'right',
  fontWeight: '500',
  padding: '5px 15px',
  transition: 'all 1s ease',
  '&:hover': {
    background: '#014073',
  },
});

const FlexBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
});

const SectionHeading = styled(Typography)({
  color: '#014073',
  marginTop: '5rem',
  fontWeight: '400',
  pb: '0.5rem',
});

const SectionSubHeading = styled(Typography)({
  fontWeight: '900',
  display: 'inline-block',
});

const Paragrapgh = styled(Typography)({
  fontWeight: '300',
  width: '60%',
});

const values = {
  name: '',
  email: '',
  subject: '',
  comment: '',
};

const formValidation = yup.object({
  name: yup.string().required('Please enter your Name'),
  email: yup.string().required('Please enter your Email'),
  subject: yup.string().required('Please enter Subject'),
  comment: yup.string().required('Please enter Comment'),
});

export const ContactUs = () => {
  const formik = useFormik({
    initialValues: values,
    validationSchema: formValidation,
    onSubmit: (values, { setSubmitting }) => {
      console.log('hello');
      console.log(values);
    },
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps, handleChange } = formik;

  return (
    <>
      <Container sx={{ padding: '5rem 0' }} id='contact'>
        <Box mb={13}>
          <FlexBox>
            <SectionHeading variant='h6'>Get in touch</SectionHeading>
            <Box sx={{ paddingBottom: '1.5rem' }}>
              <SectionSubHeading color='#014073' variant='h4'>
                Contact
              </SectionSubHeading>
              &nbsp; &nbsp;
              <SectionSubHeading variant='h4' color='#4da432'>
                Us
              </SectionSubHeading>
            </Box>
            <Paragrapgh variant='body1' align='center' color='#777c87'>
              Feel free to drop your queries, we will be more than happy to help you out
            </Paragrapgh>
          </FlexBox>
        </Box>

        <Grid component='div' container direction='row' flexBasis='0' textAlign='center' justifyContent='space-between'>
          <Grid item xs={12} md={5}>
            <img src='./imgs/contact-v.png' className='contactill' />
          </Grid>
          <Grid item xs={12} md={7} my={3}>
            <FormikProvider value={formik}>
              <Form autoComplete='off' noValidate>
                <Grid container item spacing={2}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      size='small'
                      autoComplete='name'
                      type='text'
                      label='Name'
                      {...getFieldProps('name')}
                      error={Boolean(touched.name && errors.name)}
                      helperText={touched.name && errors.name}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      size='small'
                      autoComplete='email'
                      type='text'
                      label='Email'
                      {...getFieldProps('email')}
                      error={Boolean(touched.email && errors.email)}
                      helperText={touched.email && errors.email}
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField
                      fullWidth
                      size='small'
                      autoComplete='subject'
                      type='text'
                      label='Subject'
                      {...getFieldProps('subject')}
                      error={Boolean(touched.subject && errors.subject)}
                      helperText={touched.subject && errors.subject}
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField
                      multiline
                      size='small'
                      fullWidth
                      autoComplete='comment'
                      type='text'
                      label='Message'
                      rows={4}
                      {...getFieldProps('comment')}
                      error={Boolean(touched.comment && errors.comment)}
                      helperText={touched.comment && errors.comment}
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <SubmitButton
                      variant='contained'
                      type='submit'
                    >
                      Submit
                    </SubmitButton>
                  </Grid>
                </Grid>
              </Form>
            </FormikProvider>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}


