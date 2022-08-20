import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { styled } from '@mui/material/styles';
import { countries } from '../../utils/staticData';
import PropTypes from 'prop-types';
import {theme} from '../../utils/theme'


const StyledAutocomplete = styled(Autocomplete)({
  '& .MuiInputLabel-outlined:not(.MuiInputLabel-shrink)': {
    transform: 'translate(34px, 20px) scale(1);',
  },
  '& .MuiAutocomplete-inputRoot': {
    color: 'white',

    '&[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input:first-child': {
      paddingLeft: 26,
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white',
    },
  },
});



export default function Country(props) {

  const handleChange = (event, value) => {
      props.setCountry(value.label);
  }

  return (
    <>
      <StyledAutocomplete
        id='country-select-demo'
        onChange={handleChange}
        sx={{
          width: { xs: '100%', md: 300 },
          marginRight: '15px',
          margin: { md: '0.5rem', xs: 'auto' },
          marginBottom: { md: '0.5rem', xs: '0.5rem' },
          color: 'red',
        }}
        options={countries}
        autoHighlight
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
            color='success'
            label={props.text}
            size='small'
            inputProps={{
              ...params.inputProps,
              autoComplete: 'new-password',
            }}
          />
        )}
      />
    </>
  );
}



Country.propTypes = {
  text: PropTypes.string,
  setCountry: PropTypes.string
};
