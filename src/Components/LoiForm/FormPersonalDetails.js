import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Box } from "@mui/material";

export class FormPersonalDetails extends Component {
	continue = (e) => {
		e.preventDefault();
		this.props.nextStep();
	};

	back = (e) => {
		e.preventDefault();
		this.props.prevStep();
	};

	render() {
		const { values, handleChange } = this.props;
		return (
			<Box sx={{ width: "80%", margin: "auto", marginTop: "10rem" }}>
				<AppBar title='Enter Personal Details' />
				<TextField
					placeholder='Enter Your Passport Number'
					label='Passport Number'
					onChange={handleChange("passport")}
					defaultValue={values.passport}
					margin='normal'
					fullWidth
				/>
				<br />
				<TextField
					placeholder='Date of Issue'
					label='Date of Issue'
					onChange={handleChange("dateofissue")}
					defaultValue={values.dateofissue}
					margin='normal'
					fullWidth
				/>
				<br />
				<TextField
					placeholder='Enter Your Expiry'
					label='Date of Expiry'
					onChange={handleChange("dateofexpiry")}
					defaultValue={values.dateofexpiry}
					margin='normal'
					fullWidth
				/>
				<br />
				<TextField
					placeholder='Travelling from'
					label='Travelling From'
					onChange={handleChange("travellingfrom")}
					defaultValue={values.travellingfrom}
					margin='normal'
					fullWidth
				/>
				<br />

				<Button color='secondary' variant='contained' onClick={this.back}>
					Back
				</Button>

				<Button color='primary' variant='contained' onClick={this.continue}>
					Continue
				</Button>
			</Box>
		);
	}
}

export default FormPersonalDetails;
