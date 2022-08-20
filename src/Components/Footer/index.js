import React from "react";
import { Box, Grid, Button } from "@mui/material";
import { FooterData as Data, Navlinks } from "../../Data";
import { theme } from "../../theme";
import SocialIcons from "../SocialIcons";
import Copyright from "../Copyright";
import { Link } from "react-router-dom";

function Footer() {
	return (
		<Grid
			container
			component='section'
			alignItems='center'
			justifyContent='center'
			direction='column'
			sx={{ px: { md: 6, xs: 1 }, pt: 5, pb: 2, mt: 15 }}
		>
			<Grid items md={6} xs={12} alignItem='center' justifyContent='center' container>
				<img src={Data.logo} alt='navbar logo' width='200px' height='auto' />
			</Grid>
			<Grid items md={6} xs={12} sx={{ mt: 3 }}>
				<Box sx={{ display: { sm: "block", xs: "none" }, mr: 2 }}>
					<ul>
						{Navlinks.map((link, index) => (
							<Button
								sx={{
									fontSize: "14px",
									fontWeight: "600",
									letterSpacing: "0.5px",
									fontFamily: "Poppins",
									mx: { md: 2, xs: 1 },
									textAlign: "center",
									":hover": {
										color: "secondary.main",
									},
								}}
								underline='none'
								key={index}
							>
								<Link to={link.link}>{link.text}</Link>
							</Button>
						))}
					</ul>
				</Box>
			</Grid>
			<Grid items md={6} xs={12} sx={{ mt: 2 }}>
				<SocialIcons />
			</Grid>
			<Grid items md={6} xs={12} sx={{ mt: 3 }}>
				<Copyright />
			</Grid>
		</Grid>
	);
}

export default Footer;
