import React, { useState } from 'react';
import { Formik } from 'formik';
import { styled } from '@mui/system';
import {
  TextField,
  Select,
  MenuItem,
  Typography,
  InputLabel,
  Grid,
  FormControl,
  Button,
  Stack,
  Container,
  Card,
  Autocomplete,
  Box
} from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { countries } from '../../utils/Data.js';
import SimpleSnackbar from '../SnackbarValidation/SimpleSnackbar';
import { useRouter } from 'next/router'

export const ParentForm = () => {


  const router = useRouter();
  const data = router.query;

  const FlexBox = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  });

  const NavButton = styled(Button)({
    background: '#4da432',
    borderRadius: '4px',
    color: 'white',
    fontSize: '14px',
    fontWeight: '500',
    padding: '5px 15px',
    transition: 'all 1s ease',
    '&:hover': {
      background: '#014073',
    },
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

  const [count, setCount] = useState(0);

  const handlePerv = () => {
    setCount((perviousState) => perviousState - 1);
  };

  const handleNext = () => {
    if (count == 2) return
    setCount((perviousState) => perviousState + 1);
  };

  const [msg, setMsg] = useState()
  const [toggle, setToggle] = useState(false)

  const handleSnackbar = () => {
    setToggle(true)
    setTimeout(()=>{
      setToggle(false)
    }, 2500 )
  }

  const values = {
    firstName: '',
    lastName: '',
    gender: '',
    nationality: '',
    dateOfBirth: new Date(),
    passportNumber: '',
    dateOfIssue: new Date(),
    dateOfExpiry: new Date(),
    travellingFrom: data.travellingFrom,
    travellingTo: data.travellingTo,
    dateOfArrival: new Date(),
    dateOfLeaving: new Date(),
  };



  /******************************************************** */
  /******************************************************** */
  /********************** Render Form    ***************** */
  /******************************************************** */
  /******************************************************** */


  return (
    <>


      {/* Section Heading */}
      <FlexBox>
        <SectionHeading variant='h6'>Letter Of Invitation</SectionHeading>
        <Box sx={{ paddingBottom: '1.5rem' }}>
          <SectionSubHeading color='#014073' variant='h4'>
            Get Your
          </SectionSubHeading>
          &nbsp; &nbsp;
          <SectionSubHeading variant='h4' color='#4da432'>
            LOI
          </SectionSubHeading>
        </Box>
        <Paragrapgh variant='body1' align='center' color='#777c87'>
          Fill in the form below and get the below LOI instantly.
        </Paragrapgh>
      </FlexBox>



      {/* Form */}


      <Grid container direction='column'>
        <Container maxWidth='md' sx={{ mt: '1rem', mb: '5rem' }}>
          <Card sx={{ padding: 5 }}>


            <Formik
              initialValues={values}
              // validate={(values) => {
              //   const errors = {};
              //   if (!values.email) {
              //     errors.email = 'Required';
              //   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
              //     errors.email = 'Invalid email address';
              //   }
              //   return errors;
              // }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  if (count == 0) {
                    if (values.firstName == '') {
                      setMsg("Please Enter Your First Name")
                      handleSnackbar();
                      return;
                    }
                    if (values.lastName == '') {
                      setMsg("Please Enter Your Last Name")
                      handleSnackbar();
                      return;
                    }
                    if (values.gender == '') {
                      setMsg("Please Enter Gender")
                      handleSnackbar();
                      return;
                    }
                    if (values.dateOfBirth == new Date()) {
                      setMsg("Please Enter Your Date of Birth")
                      handleSnackbar();
                      return;
                    }
                    if (values.nationality == '') {
                      setMsg("Please Enter Your Nationality")
                      handleSnackbar();
                      return;
                    }
                  }else if(count==1){
                    if(values.passportNumber ==  ''){
                      setMsg("Please Enter Your Passport Number")
                      handleSnackbar();
                      return;
                    }
                  }else {
                    if(values.travellingFrom== ''){
                      setMsg("Please Enter Your Current Country")
                      handleSnackbar();
                      return;
                    }
                  }
                  if(count==2){
                    console.log(values)
                  }
                  handleNext()
                  setSubmitting(false);
                }, 400);
              }}
            >


              {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, getFieldProps, setFieldValue }) => (
                <form onSubmit={handleSubmit}>
                  {toggle && <SimpleSnackbar severity="error" text={msg} />}

                  <Grid container item spacing={2}>
                    {count == 0 && (
                      <>
                        <Grid item xs={12} sm={10} md={6}>
                          <TextField
                            fullWidth
                            autoComplete='firstName'
                            type='text'
                            label='First Name'
                            {...getFieldProps('firstName')}
                            error={Boolean(touched.firstName && errors.firstName)}
                            helperText={touched.firstName && errors.firstName}
                          />
                        </Grid>
                        <Grid item xs={12} sm={10} md={6}>
                          <TextField
                            fullWidth
                            autoComplete='lastName'
                            type='text'
                            label='Last Name'
                            {...getFieldProps('lastName')}
                            error={Boolean(touched.lastName && errors.lastName)}
                            helperText={touched.lastName && errors.lastName}
                          />
                        </Grid>
                        <Grid item xs={12} sm={10} md={6}>
                          <FormControl fullWidth>
                            <InputLabel id='genderSelect'>Gender</InputLabel>
                            <Select
                              labelId='gender'
                              id='gender'
                              label='Gender'
                              {...getFieldProps('gender')}
                              error={Boolean(touched.gender && errors.gender)}
                            >
                              <MenuItem value='Male'>Male</MenuItem>
                              <MenuItem value='Female'>Female</MenuItem>
                              <MenuItem value='Other'>Other</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={10} md={6}>
                          <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <Stack spacing={3}>
                              <MobileDatePicker
                                label='Date of Birth'
                                name='dateOfBirth'
                                value={values.dateOfBirth}
                                onChange={(value) => {
                                  setFieldValue('dateOfBirth', value);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                                error={Boolean(touched.dateOfBirth && errors.dateOfBirth)}
                                helperText={touched.dateOfBirth && errors.dateOfBirth}
                              />
                            </Stack>
                          </LocalizationProvider>
                        </Grid>
                        <Grid item xs={12} sm={10} md={6}>
                          <Autocomplete
                            id='country-select-demo'
                            sx={{
                              color: 'White',
                              border: 'white',
                            }}
                            options={countries}
                            autoHighlight
                            onChange={(event, value) => setFieldValue('nationality', value.label)}
                            getOptionLabel={(option) => option.label}
                            renderOption={(props, option) => (
                              <Box component='li' sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                <img
                                  loading='lazy'
                                  width='20'
                                  src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                                  srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                                  alt=''
                                />
                                {option.label} ({option.code}) +{option.phone}
                              </Box>
                            )}
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                sx={{ color: 'white' }}
                                label='Nationality'
                                inputProps={{
                                  ...params.inputProps,
                                }}
                              />
                            )}
                          />
                        </Grid>
                      </>
                    )}

                    {count == 1 && (
                      <>
                        <Grid item xs={12} sm={10} md={6}>
                          <TextField
                            fullWidth
                            autoComplete='passportNumber'
                            type='text'
                            label='Passport Number'
                            {...getFieldProps('passportNumber')}
                            error={Boolean(touched.passportNumber && errors.passportNumber)}
                            helperText={touched.passportNumber && errors.passportNumber}
                          />
                        </Grid>
                        <Grid item xs={12} sm={10} md={6}>
                          <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <Stack spacing={3}>
                              <MobileDatePicker
                                label='Date of Issue'
                                name='dateOfIssue'
                                value={values.dateOfIssue}
                                onChange={(value) => {
                                  setFieldValue('dateOfIssue', value);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                                error={Boolean(touched.dateOfIssue && errors.dateOfIssue)}
                                helperText={touched.dateOfIssue && errors.dateOfIssue}
                              />
                            </Stack>
                          </LocalizationProvider>
                        </Grid>
                        <Grid item xs={12} sm={10} md={6}>
                          <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <Stack spacing={3}>
                              <MobileDatePicker
                                label='Date of Expiry'
                                name='dateOfExpiry'
                                value={values.dateOfExpiry}
                                onChange={(value) => {
                                  setFieldValue('dateOfExpiry', value);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                                error={Boolean(touched.dateOfExpiry && errors.dateOfExpiry)}
                                helperText={touched.dateOfExpiry && errors.dateOfExpiry}
                              />
                            </Stack>
                          </LocalizationProvider>
                        </Grid>
                      </>
                    )}

                    {count == 2 && (
                      <>
                        <Grid item xs={12} sm={10} md={6}>
                          <TextField
                            fullWidth
                            autoComplete='travellingFrom'
                            type='text'
                            label='Travelling From'
                            {...getFieldProps('travellingFrom')}
                            error={Boolean(touched.travellingFrom && errors.travellingFrom)}
                            helperText={touched.travellingFrom && errors.travellingFrom}
                          />
                        </Grid>
                        <Grid item xs={12} sm={10} md={6}>
                          <TextField
                            fullWidth
                            autoComplete='travellingTo'
                            type='text'
                            label='Travelling To'
                            {...getFieldProps('travellingTo')}
                            error={Boolean(touched.travellingTo && errors.travellingToF)}
                            helperText={touched.travellingTo && errors.travellingTo}
                          />
                        </Grid>
                        <Grid item xs={12} sm={10} md={6}>
                          <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <Stack spacing={3}>
                              <MobileDatePicker
                                label='Date of Arrival'
                                name='dateOfArrival'
                                value={values.dateOfArrival}
                                onChange={(value) => {
                                  setFieldValue('dateOfArrival', value);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                                error={Boolean(touched.dateOfArrival && errors.dateOfArrival)}
                                helperText={touched.dateOfArrival && errors.dateOfArrival}
                              />
                            </Stack>
                          </LocalizationProvider>
                        </Grid>
                        <Grid item xs={12} sm={10} md={6}>
                          <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <Stack spacing={3}>
                              <MobileDatePicker
                                label='Date of Leaving'
                                name='dateOfLeaving'
                                value={values.dateOfLeaving}
                                onChange={(value) => {
                                  setFieldValue('dateOfLeaving', value);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                                error={Boolean(touched.dateOfLeaving && errors.dateOfLeaving)}
                                helperText={touched.dateOfLeaving && errors.dateOfLeaving}
                              />
                            </Stack>
                          </LocalizationProvider>
                        </Grid>
                      </>
                    )}
                  </Grid>


                  <Box sx={{ marginTop: '1rem' }}>
                    <NavButton sx={{ marginRight: '1rem' }} variant='contained' disabled={count == 0} onClick={handlePerv}>
                      Pervious
                    </NavButton>
                    <NavButton variant='contained'  type={count == 2 ? 'submit' : ''}>
                      {count == 2 ? 'Get LOI' : 'Next'}
                    </NavButton>
                  </Box>

                </form>

              )}
            </Formik>
          </Card>
        </Container>
      </Grid>
    </>
  );
};

// import { useState } from 'react';
// import React from 'react';
// import * as yup from 'yup';
// import { useFormik, Form, FormikProvider } from 'formik';
// import {
//   TextField,
//   Select,
//   MenuItem,
//   Typography,
//   InputLabel,
//   Grid,
//   FormControl,
//   Button,
//   Stack,
//   Container,
//   Card,
//   Autocomplete,
//   Box,
// } from '@mui/material';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
// import { styled } from '@mui/system';
// import { countries } from '../../utils/Data.js';

// export const ParentForm = () => {
//   const NavButton = styled(Button)({
//     background: '#4da432',
//     borderRadius: '4px',
//     color: 'white',
//     fontSize: '14px',
//     fontWeight: '500',
//     padding: '5px 15px',
//     transition: 'all 1s ease',
//     '&:hover': {
//       background: '#014073',
//     },
//   });

//   const values = {
//     firstName: '',
//     lastName: '',
//     gender: '',
//     nationality: '',
//     dateOfBirth: new Date(),
//     passportNumber: '',
//     dateOfIssue: new Date(),
//     dateOfExpiry: new Date(),
//     travellingFrom: '',
//     dateOfArrival: new Date(),
//     dateOfLeaving: new Date(),
//   };

//   const [count, setCount] = useState(0);

//   const formik = useFormik({
//     initialValues: values,
//     onSubmit: (values, { setSubmitting }) => {
//       console.log(values);
//     },
//   });

//   const SectionHeading = styled(Typography)({
//     color: '#014073',
//     marginTop: '5rem',
//     fontWeight: '400',
//     pb: '0.5rem',
//   });

//   const SectionSubHeading = styled(Typography)({
//     fontWeight: '900',
//     display: 'inline-block',
//   });

//   const Paragrapgh = styled(Typography)({
//     fontWeight: '300',
//     width: '60%',
//   });

//   const { errors, touched, handleSubmit, getFieldProps } = formik;

//   // eslint-disable-next-line react/jsx-key

//   const handlePerv = () => {
//     setCount((perviousState) => perviousState - 1);
//   };

//   const handleNext = () => {
//     setCount((perviousState) => perviousState + 1);
//   };

//   const FlexBox = styled(Box)({
//     display: 'flex',
//     justifyContent: 'center',
//     flexDirection: 'column',
//     alignItems: 'center',
//   });

//   return (
//     <>
//       {console.log(values)}
//       <FlexBox>
//         <SectionHeading variant='h6'>Letter Of Invitation</SectionHeading>
//         <Box sx={{ paddingBottom: '1.5rem' }}>
//           <SectionSubHeading color='#014073' variant='h4'>
//             Get Your
//           </SectionSubHeading>
//           &nbsp; &nbsp;
//           <SectionSubHeading variant='h4' color='#4da432'>
//             LOI
//           </SectionSubHeading>
//         </Box>
//         <Paragrapgh variant='body1' align='center' color='#777c87'>
//           Fill in the form below and get the below LOI instantly.
//         </Paragrapgh>
//       </FlexBox>

//       <Grid container direction='column'>
//         <Container maxWidth='md' sx={{ mt: '1rem', mb: '5rem' }}>
//           <Card sx={{ padding: 5 }}>
//             <FormikProvider value={formik}>
//               <Form autoComplete='off' noValidate onSubmit={handleSubmit}>
//                 <Grid container item spacing={2}>
//                   {count == 0 && (
//                     <>
//                       <Grid item xs={12} sm={10} md={6}>
//                         <TextField
//                           fullWidth
//                           autoComplete='firstName'
//                           type='text'
//                           label='First Name'
//                           {...getFieldProps('firstName')}
//                           error={Boolean(touched.firstName && errors.firstName)}
//                           helperText={touched.firstName && errors.firstName}
//                         />
//                       </Grid>
//                       <Grid item xs={12} sm={10} md={6}>
//                         <TextField
//                           fullWidth
//                           autoComplete='lastName'
//                           type='text'
//                           label='Last Name'
//                           {...getFieldProps('lastName')}
//                           error={Boolean(touched.lastName && errors.lastName)}
//                           helperText={touched.lastName && errors.lastName}
//                         />
//                       </Grid>
//                       <Grid item xs={12} sm={10} md={6}>
//                         <FormControl fullWidth>
//                           <InputLabel id='genderSelect'>Gender</InputLabel>
//                           <Select
//                             labelId='gender'
//                             id='gender'
//                             label='Gender'
//                             {...getFieldProps('gender')}
//                             error={Boolean(touched.gender && errors.gender)}
//                           >
//                             <MenuItem value='Male'>Male</MenuItem>
//                             <MenuItem value='Female'>Female</MenuItem>
//                             <MenuItem value='Other'>Other</MenuItem>
//                           </Select>
//                         </FormControl>
//                       </Grid>
//                       <Grid item xs={12} sm={10} md={6}>
//                         <LocalizationProvider dateAdapter={AdapterDateFns}>
//                           <Stack spacing={3}>
//                             <MobileDatePicker
//                               label='Date of Birth'
//                               name='dateOfBirth'
//                               value={formik.values.dateOfBirth}
//                               onChange={(value) => {
//                                 formik.setFieldValue('dateOfBirth', value);
//                               }}
//                               renderInput={(params) => <TextField {...params} />}
//                               error={Boolean(touched.dateOfBirth && errors.dateOfBirth)}
//                               helperText={touched.dateOfBirth && errors.dateOfBirth}
//                             />
//                           </Stack>
//                         </LocalizationProvider>
//                       </Grid>
//                       <Grid item xs={12} sm={10} md={6}>
//                         <Autocomplete
//                           id='country-select-demo'
//                           sx={{
//                             color: 'White',
//                             border: 'white',
//                           }}
//                           options={countries}
//                           autoHighlight
//                           getOptionLabel={(option) => option.label}
//                           renderOption={(props, option) => (
//                             <Box component='li' sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
//                               <img
//                                 loading='lazy'
//                                 width='20'
//                                 src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
//                                 srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
//                                 alt=''
//                               />
//                               {option.label} ({option.code}) +{option.phone}
//                             </Box>
//                           )}
//                           renderInput={(params) => (
//                             <TextField
//                               {...params}
//                               sx={{ color: 'white' }}
//                               label='Choose a country'
//                               {...getFieldProps('nationality')}
//                               onChange={(value) => {
//                                 formik.setFieldValue('nationality', value);
//                               }}
//                               inputProps={{
//                                 ...params.inputProps,
//                                 autoComplete: 'new-password',
//                               }}
//                             />
//                           )}
//                         />
//                       </Grid>
//                     </>
//                   )}
//                   {count == 1 && (
//                     <>
//                       <Grid item xs={12} sm={10} md={6}>
//                         <TextField
//                           fullWidth
//                           autoComplete='passportNumber'
//                           type='text'
//                           label='Passport Number'
//                           {...getFieldProps('passportNumber')}
//                           error={Boolean(touched.passportNumber && errors.passportNumber)}
//                           helperText={touched.passportNumber && errors.passportNumber}
//                         />
//                       </Grid>
//                       <Grid item xs={12} sm={10} md={6}>
//                         <LocalizationProvider dateAdapter={AdapterDateFns}>
//                           <Stack spacing={3}>
//                             <MobileDatePicker
//                               label='Date of Issue'
//                               name='dateOfIssue'
//                               value={formik.values.dateOfIssue}
//                               onChange={(value) => {
//                                 formik.setFieldValue('dateOfIssue', value);
//                               }}
//                               renderInput={(params) => <TextField {...params} />}
//                               error={Boolean(touched.dateOfIssue && errors.dateOfIssue)}
//                               helperText={touched.dateOfIssue && errors.dateOfIssue}
//                             />
//                           </Stack>
//                         </LocalizationProvider>
//                       </Grid>
//                       <Grid item xs={12} sm={10} md={6}>
//                         <LocalizationProvider dateAdapter={AdapterDateFns}>
//                           <Stack spacing={3}>
//                             <MobileDatePicker
//                               label='Date of Expiry'
//                               name='dateOfExpiry'
//                               value={formik.values.dateOfExpiry}
//                               onChange={(value) => {
//                                 formik.setFieldValue('dateOfExpiry', value);
//                               }}
//                               renderInput={(params) => <TextField {...params} />}
//                               error={Boolean(touched.dateOfExpiry && errors.dateOfExpiry)}
//                               helperText={touched.dateOfExpiry && errors.dateOfExpiry}
//                             />
//                           </Stack>
//                         </LocalizationProvider>
//                       </Grid>
//                     </>
//                   )}
//                   {count == 2 && (
//                     <>
//                       <Grid item xs={12} sm={10} md={6}>
//                         <TextField
//                           fullWidth
//                           autoComplete='travellingFrom'
//                           type='text'
//                           label='Travelling From'
//                           {...getFieldProps('travellingFrom')}
//                           error={Boolean(touched.travellingFrom && errors.travellingFrom)}
//                           helperText={touched.travellingFrom && errors.travellingFrom}
//                         />
//                       </Grid>
//                       <Grid item xs={12} sm={10} md={6}>
//                         <LocalizationProvider dateAdapter={AdapterDateFns}>
//                           <Stack spacing={3}>
//                             <MobileDatePicker
//                               label='Date of Arrival'
//                               name='dateOfArrival'
//                               value={formik.values.dateOfArrival}
//                               onChange={(value) => {
//                                 formik.setFieldValue('dateOfArrival', value);
//                               }}
//                               renderInput={(params) => <TextField {...params} />}
//                               error={Boolean(touched.dateOfArrival && errors.dateOfArrival)}
//                               helperText={touched.dateOfArrival && errors.dateOfArrival}
//                             />
//                           </Stack>
//                         </LocalizationProvider>
//                       </Grid>
//                       <Grid item xs={12} sm={10} md={6}>
//                         <LocalizationProvider dateAdapter={AdapterDateFns}>
//                           <Stack spacing={3}>
//                             <MobileDatePicker
//                               label='Date of Leaving'
//                               name='dateOfLeaving'
//                               value={formik.values.dateOfLeaving}
//                               onChange={(value) => {
//                                 formik.setFieldValue('dateOfLeaving', value);
//                               }}
//                               renderInput={(params) => <TextField {...params} />}
//                               error={Boolean(touched.dateOfLeaving && errors.dateOfLeaving)}
//                               helperText={touched.dateOfLeaving && errors.dateOfLeaving}
//                             />
//                           </Stack>
//                         </LocalizationProvider>
//                       </Grid>
//                       <Grid item xs={12} sm={10} md={7}>
//                         <NavButton type='submit' variant='contained'>
//                           Get your Loi
//                         </NavButton>
//                       </Grid>
//                     </>
//                   )}
//                 </Grid>
//                 <Box sx={{ marginTop: '1rem' }}>
//                   <NavButton sx={{ marginRight: '1rem' }} variant='contained' disabled={count == 0} onClick={handlePerv}>
//                     Pervious
//                   </NavButton>
//                   <NavButton variant='contained' disabled={count == 2} onClick={handleNext}>
//                     Next
//                   </NavButton>
//                 </Box>
//               </Form>
//             </FormikProvider>
//           </Card>
//         </Container>
//       </Grid>
//     </>
//   );
// };
