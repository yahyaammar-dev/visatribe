import React from "react";
import { Container, Box } from "@mui/material";
import { LandingPageStyles } from "./LandingPageStyles";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import Whyus from "../Whyus";
import Reviews from "../Reviews";
import SimpleSlider from "../Reviews/SimpleSlider";

function LandingPage() {
	const classes = LandingPageStyles();
	const { light } = classes;
	return (
		<>
			<Box sx={{ backgroundImage: `url("imgs/nature.jpg")`, backgroundSize: "cover", backgroundPosition: "center" }}>
				<HeroSection />
			</Box>
			<Container>
				<Whyus />
			</Container>
			<Container>
				<SimpleSlider />
			</Container>
		</>
	);
}

export default LandingPage;
