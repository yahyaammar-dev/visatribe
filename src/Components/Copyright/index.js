import React from "react";
import { Typography, Grid } from "@mui/material";
import { theme } from "../../theme";

function Copyright() {
	return (
		<div>
			<Grid container alignItems='center' justifyContent='center' textAlign='center'>
				<Typography
					sx={{
						typography: {
							md: "body1",
						},
						color: theme.palette.ternary.main,
						py: 1,
					}}
				>
					© 2022 VisaTribe
				</Typography>
			</Grid>
		</div>
	);
}

export default Copyright;
