import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Avatar from '@mui/material/Avatar';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const data = [
  {
    label:
      'Loreum Ipsum text is dummy text to fill in the space. Loreum Ipsum text is dummy text to fill in the space. Loreum Ipsum text is dummy text to fill in the space.',
    name: 'Yahya Ammar',
    designation: 'Software Developer',
    imgPath: 'https://i.imgur.com/hZFrbJJ.jpg',
  },
  {
    label:
      'Loreum Ipsum text is dummy text to fill in the space.Loreum Ipsum text is dummy text to fill in the space.Loreum Ipsum text is dummy text to fill in the space.',
    name: 'Yahya Ammar',
    designation: 'Software Developer',
    imgPath: 'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label:
      'Loreum Ipsum text is dummy text to fill in the space.Loreum Ipsum text is dummy text to fill in the space.Loreum Ipsum text is dummy text to fill in the space.',
    name: 'Yahya Ammar',
    designation: 'Software Developer',
    imgPath: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
  },
  {
    label:
      'Loreum Ipsum text is dummy text to fill in the space.Loreum Ipsum text is dummy text to fill in the space.Loreum Ipsum text is dummy text to fill in the space.',
    name: 'Yahya Ammar',
    designation: 'Software Developer',
    imgPath: 'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
  },
];

const styles = (theme) => ({
  root: {
    maxWidth: '100%',
    flexGrow: 1,
    position: 'relative',
    marginBottom: '3rem',
  },
  mobileStepper: {
    position: 'absolute',
    top: '95%',
    width: '100%',
    background: 'none',
  },
  img: {
    height: 255,
    display: 'block',
    maxWidth: '100%',
    overflow: 'hidden',
    width: '100%',
  },
  testimonialText: {
    width: '50%',
    margin: 'auto',
    textAlign: 'center',
    marginTop: '2vh',
  },
  testimonailName: {
    textAlign: 'center',
    marginTop: '3vh',
  },
  testimonailDesignation: {
    textAlign: 'center',
    marginTop: '0.5vh',
    fontStyle: 'italic',
  },
});

class SwipeableTextMobileStepper extends React.Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState((prevState) => ({
      activeStep: prevState.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState((prevState) => ({
      activeStep: prevState.activeStep - 1,
    }));
  };

  handleStepChange = (activeStep) => {
    this.setState({ activeStep });
  };

  render() {
    const { classes, theme } = this.props;
    const { activeStep } = this.state;
    const maxSteps = data.length;
    return (
      <div className={classes.root}>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={this.handleStepChange}
          enableMouseEvents
        >
          {data.map((step, index) => (
            <div key={step.label}>
              <Avatar alt='Remy Sharp' src={step.imgPath} sx={{ width: '15vh', height: '15vh', margin: 'auto' }} />
              <Typography variant='h5' className={classes.testimonailName}>
                {step.name}
              </Typography>
              <Typography className={classes.testimonailDesignation}>{step.designation}</Typography>
              <Typography className={classes.testimonialText}>{step.label}</Typography>
              {/* {Math.abs(activeStep - index) <= 2 ? <img className={classes.img} src={step.imgPath} alt={step.label} /> : null} */}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position='static'
          activeStep={activeStep}
          className={classes.mobileStepper}
          sx={{ background: 'transparent' }}
          nextButton={
            <Button size='small' onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
              {theme.direction === 'rtl' ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />}
            </Button>
          }
          backButton={
            <Button size='small' onClick={this.handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <ArrowForwardIosIcon /> : <ArrowBackIosIcon />}
            </Button>
          }
        />
      </div>
    );
  }
}
SwipeableTextMobileStepper.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(SwipeableTextMobileStepper);
