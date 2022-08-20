import React, { useState } from "react";
import { Typography, Button, Grid, TextField, Container } from "@mui/material";
import { theme } from "../../theme";
import { toast } from "react-toastify";

function ContactUs() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");

	const handleForm = (e) => {
		if (!name || !email || !subject || !message) {
			toast.error("Please fill in all fields");
			return;
		}
		if (email.includes("@")) {
			console.log("Passed");
		} else {
			toast.error("Please enter a valid email");
			return;
		}
		let data = {
			name,
			email,
			subject,
			message,
		};
		toast.success("Form Submitted!");
	};

	return (
		<Container id='contact'>
			<Grid container direction='column' alignItems='center' justifyContent='space-around'>
				<Typography
					sx={{
						mt: { md: 15, sm: 6, xs: 4 },
						mb: { md: 5, xs: 4 },
						typography: { md: "h3", xs: "h4" },
					}}
				>
					Contact Us
				</Typography>

				<Grid
					component='div'
					container
					direction='row'
					flexBasis='0'
					textAlign='center'
					justifyContent='space-around'
					sx={{
						px: { md: 6, sm: 4, xs: 0 },
						py: { md: 3, xs: 3 },
						pb: { md: 15, xs: 5 },
					}}
				>
					<Grid item justifyContent='center' alignItems='center' sm={6} xs={12} sx={{ pr: { md: 5 }, mt: 2 }}>
						<img width='100%' height='auto' src='./imgs/contact.png' alt='' />
					</Grid>
					<Grid item sm={6} xs={12} sx={{ p: 2, backgroundColor: "secondary.box" }}>
						<Grid container item direction='row' justifyContent='space-between'>
							<Grid xs={6} container item direction='column' alignItems='start' sx={{ pr: 2 }}>
								<Typography
									sx={{
										typography: {
											md: "subtitle1",
											sm: "body2",
											xs: "caption",
										},
										my: { sm: 1, xs: 0 },
									}}
								>
									Full Name
								</Typography>
								<TextField
									fullWidth
									value={name}
									onChange={(e) => setName(e.target.value)}
									size='small'
									sx={{
										backgroundColor: "ternary.input",
									}}
								/>
							</Grid>
							<Grid xs={6} container item direction='column' alignItems='start'>
								<Typography
									sx={{
										typography: {
											md: "subtitle1",
											sm: "body2",
											xs: "caption",
										},
										my: { sm: 1, xs: 0 },
									}}
								>
									Email
								</Typography>
								<TextField
									fullWidth
									size='small'
									onChange={(e) => setEmail(e.target.value)}
									value={email}
									sx={{
										backgroundColor: "ternary.input",
									}}
								/>
							</Grid>
						</Grid>
						<Grid container item direction='column' alignItems='start'>
							<Typography
								sx={{
									typography: {
										md: "subtitle1",
										sm: "body2",
										xs: "caption",
									},
									my: { sm: 1, xs: 0 },
								}}
							>
								Subject
							</Typography>
							<TextField
								fullWidth
								value={subject}
								size='small'
								onChange={(e) => setSubject(e.target.value)}
								sx={{
									backgroundColor: "ternary.input",
								}}
							/>
						</Grid>
						<Grid container item direction='column' alignItems='start'>
							<Typography
								sx={{
									typography: {
										md: "subtitle1",
										sm: "body2",
										xs: "caption",
									},
									my: { sm: 1, xs: 0 },
								}}
							>
								Comments
							</Typography>
							<TextField
								fullWidth
								multiline
								value={message}
								rows={2}
								onChange={(e) => setMessage(e.target.value)}
								sx={{
									backgroundColor: "ternary.input",
								}}
								size='small'
								type='text'
							/>
						</Grid>

						<Button
							type='button'
							fullWidth
							onClick={handleForm}
							sx={{
								mt: { md: 5, xs: 2 },
								color: "ternary.main",
								border: "2px solid",
								":hover": {
									background: theme.palette.ternary.main,
									color: "primary.main",
								},
							}}
						>
							Submit
						</Button>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
}

export default ContactUs;
