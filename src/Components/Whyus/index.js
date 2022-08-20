import React from "react";
import Paper from "@mui/material/Paper";
import { Grid, Button, Typography, Box } from "@mui/material";
import { theme } from "../../theme";

const Whyus = () => {
	return (
		<Grid sx={{ marginBottom: "5rem" }}>
			<Box sx={{ display: { md: "block", xs: "flex" }, justifyContent: { md: "", xs: "center" } }}>
				<Typography
					variant='h5'
					sx={{
						fontWeight: "bold",
						pt: 10,
						pb: 1,
						mb: 4,
						borderBottom: `5px solid #2B7A0B`,
						display: "inline-block",
						borderRadius: "4px",
					}}
				>
					Why Us?
				</Typography>
			</Box>
			<Grid container sx={{ justifyContent: { md: "space-between", xs: "center" } }}>
				<Paper elevation={3} sx={{ p: 3, maxWidth: "320px", mt: 2.5 }}>
					<Typography variant='h5' sx={{ pb: 2, color: theme.palette.ternary.main, fontWeight: 900 }}>
						Easy
					</Typography>
					<Typography variant='body1' sx={{ textAlign: "justify" }}>
						Loreum Ipsum is dummy text used to fill in the space.Loreum Ipsum is dummy text used to fill in the space. Loreum Ipsum is dummy text used
						to fill in the space.
					</Typography>
				</Paper>
				<Paper elevation={3} sx={{ p: 3, maxWidth: "320px", mt: 2.5 }}>
					<Typography variant='h5' sx={{ pb: 2, color: theme.palette.ternary.main, fontWeight: 900 }}>
						convenient
					</Typography>
					<Typography variant='body1' sx={{ textAlign: "justify" }}>
						Loreum Ipsum is dummy text used to fill in the space.Loreum Ipsum is dummy text used to fill in the space. Loreum Ipsum is dummy text used
						to fill in the space.
					</Typography>
				</Paper>
				<Paper elevation={3} sx={{ p: 3, maxWidth: "320px", mt: 2.5 }}>
					<Typography variant='h5' sx={{ pb: 2, color: theme.palette.ternary.main, fontWeight: 900 }}>
						Fast
					</Typography>
					<Typography variant='body1' sx={{ textAlign: "justify" }}>
						Loreum Ipsum is dummy text used to fill in the space.Loreum Ipsum is dummy text used to fill in the space. Loreum Ipsum is dummy text used
						to fill in the space.
					</Typography>
				</Paper>
			</Grid>
		</Grid>
	);
};

export default Whyus;
