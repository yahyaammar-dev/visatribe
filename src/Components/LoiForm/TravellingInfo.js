import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Box } from "@mui/material";

export class TravellingInfo extends Component {
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
					placeholder='Enter Your arrival date'
					label='Date of Arrival'
					onChange={handleChange("dateofarrival")}
					defaultValue={values.dateofarrival}
					margin='normal'
					fullWidth
				/>
				<br />
				<TextField
					placeholder='Date of Issue'
					label='Date of Leaving'
					onChange={handleChange("dateofleaving")}
					defaultValue={values.dateofleaving}
					margin='normal'
					fullWidth
				/>

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

export default TravellingInfo;
