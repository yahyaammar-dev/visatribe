import React, { Component } from "react";
import Slider from "react-slick";
import { Avatar, Grid, Typography, Box } from "@mui/material";

function SimpleSlider() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	const data = [
		{
			label:
				"Loreum Ipsum text is dummy text to fill in the space. Loreum Ipsum text is dummy text to fill in the space. Loreum Ipsum text is dummy text to fill in the space.",
			name: "Yahya Ammar",
			designation: "Software Developer",
			imgPath: "https://i.imgur.com/hZFrbJJ.jpg",
		},
		{
			label:
				"Loreum Ipsum text is dummy text to fill in the space.Loreum Ipsum text is dummy text to fill in the space.Loreum Ipsum text is dummy text to fill in the space.",
			name: "Yahya Ammar",
			designation: "Software Developer",
			imgPath: "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
		},
		{
			label:
				"Loreum Ipsum text is dummy text to fill in the space.Loreum Ipsum text is dummy text to fill in the space.Loreum Ipsum text is dummy text to fill in the space.",
			name: "Yahya Ammar",
			designation: "Software Developer",
			imgPath: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
		},
		{
			label:
				"Loreum Ipsum text is dummy text to fill in the space.Loreum Ipsum text is dummy text to fill in the space.Loreum Ipsum text is dummy text to fill in the space.",
			name: "Yahya Ammar",
			designation: "Software Developer",
			imgPath: "https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60",
		},
	];
	return (
		<Box my={10}>
			<Typography
				variant='h5'
				sx={{
					fontWeight: "bold",
					pt: 10,
					pb: 1,
					mb: 6,
					borderBottom: `5px solid #2B7A0B`,
					display: "inline-block",
					borderRadius: "4px",
				}}
			>
				What Others are Saying?
			</Typography>
			<Slider {...settings}>
				{data.map((step, index) => (
					<Grid key={step.label} container justifyContent='center'>
						<Avatar alt='Remy Sharp' src={step.imgPath} sx={{ width: 100, height: 100, margin: "auto" }} />
						<Typography variant='h5' align='center'>
							{step.name}
						</Typography>
						<Typography align='center'>
							<i>{step.designation}</i>
						</Typography>
						<Typography align='center' sx={{ width: "80%", margin: "auto" }}>
							{step.label}
						</Typography>
					</Grid>
				))}
			</Slider>
		</Box>
	);
}

export default SimpleSlider;
