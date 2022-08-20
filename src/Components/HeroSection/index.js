import React from "react";
import { Grid, Button, Typography } from "@mui/material";
import Country from "../Country";
import { theme } from "../../theme";

function HeroSection() {
	return (
		<Grid mt={6} height='93vh' container direction='column' justifyContent='center' alignItems='center'>
			<Typography sx={{ fontWeight: "900", color: "white", textAlign: "center", typography: { md: "h3", xs: "h5" } }}>
				Simplifying Travel Around
				<br /> The World
			</Typography>
			<Typography my={1} sx={{ color: "white", typography: { md: "h6", xs: "body2" } }}>
				Get you LOI by filling in the form
			</Typography>
			<div>
				<Grid container mt={5} mx='auto'>
					<Country />
					<Country />
				</Grid>
				<Grid container justifyContent='center' sx={{ marginTop: "1rem" }}>
					<Button
						variant='contained'
						sx={{
							fontWeight: "900",
							padding: "10px 40px",
							background: theme.palette.ternary.main,
							color: theme.palette.primary.white,
							letterSpacing: "0.5px",
							":hover": {
								background: theme.palette.primary.white,
								color: theme.palette.primary.black,
							},
						}}
					>
						Get LOI
					</Button>
				</Grid>
			</div>
		</Grid>
	);
}

export default HeroSection;
