import React from "react";
import { Grid, Container, Typography } from "@mui/material";
import { ServicesData as Data, ServiceSection } from "../../Data";
import ServicesCard from "./ServicesCard";

function Services() {
	return (
		<div id='services'>
			<Container sx={{ py: 5 }}>
				<Grid container direction='column' textAlign='center' alignItems='center' sx={{ pb: 10 }}>
					<Grid item>
						<Typography sx={{ typography: { md: "h3", xs: "h4" }, mb: 2 }}>{ServiceSection.heading}</Typography>
						<Typography
							sx={{
								typography: { md: "body1", xs: "body2" },
								color: "text.main",
							}}
						>
							{ServiceSection.paragraph}
						</Typography>
					</Grid>
				</Grid>
				<Grid container>
					{Data.map((item, index) => (
						<Grid item xs={12} sm={6} md={4}>
							<ServicesCard data={item} />
						</Grid>
					))}
				</Grid>
			</Container>
		</div>
	);
}

export default Services;
