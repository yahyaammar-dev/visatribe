import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Container, Box, Typography, Avatar } from '@mui/material'
import PropTypes from 'prop-types';
import { styled } from '@mui/system'

const TestimonialWrapper = styled(Box)({
  padding: "3rem",
  display: 'flex',
  backgroundSize: 'cover',
  justifyContent: 'center',
  alignItems: 'center',
  position: "relative",
  backgroundImage: `url("imgs/testimonial.png")`,
  backgroundRepeat: 'no-repeat',
  ':after': {
    backgroundColor: '#01407ccc',
    position: 'absolute',
    top: "0",
    left: "0",
    content: '""',
    height: "100%",
    width: "100%"
  },
  marginTop: "10rem"
})

const FlexCenter = styled(Box)({
  display: 'flex', justifyContent: 'center', alignItems: 'center'
})

const MyCarousel = styled(Carousel)({
  width: "100%",
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})

function Testimonial() {
  var items = [
    {
      name: "This is due to their excellent service, competitive pricing and customer support.Its throughly refresing to get such a personal touch Lorem ipsum dolor sit amet consectetur adipisicing elit Deserunt deleniti!",
      description: "Jame Doe",
      job: "Designation"
    },
    {
      name: "This is due to their excellent service, competitive pricing and customer support.Its throughly refresing to get such a personal touch Lorem ipsum dolor sit amet consectetur adipisicing elit Deserunt deleniti!",
      description: "Jhon Doe",
      job: "Designation"
    }
  ]

  return (
    <TestimonialWrapper>
      <Container>
        <FlexCenter sx={{ height: { sm: "100%", md: "60vh" } }}>
          <MyCarousel
            navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
              style: {
                backgroundColor: 'cornflowerblue',
                borderRadius: 50,
                opacity: 1
              }
            }}

            sx={{ height: { sm: "100%", md: "80vh" } }}>
            {
              items.map((item, i) => <Item key={i} item={item} />)
            }
          </MyCarousel>
        </FlexCenter>
      </Container>
    </TestimonialWrapper>
  )
}
function Item(props) {
  return (
    <FlexCenter sx={{ width: "60%", margin: "auto", flexDirection: "column" }}>
      <Avatar
        alt="Remy Sharp"
        src="person1.png"
        sx={{ width: 80, height: 80, margin: "auto", marginBottom: "2rem" }}
      />
      <Typography variant="body1" align="center" sx={{ color: "white", marginBottom: "1rem" }}>{props.item.name}</Typography>
      <Typography variant="h5" align="center" sx={{ color: "white", fontWeight: "900" }}>{props.item.description}</Typography >
      <Typography variant="body6" align="center" sx={{ fontStyle: "italic", color: "#ff9d34" }}>{props.item.job}</Typography >
    </FlexCenter>
  )
}

Item.propTypes = {
  item: PropTypes.object,
};

export default Testimonial