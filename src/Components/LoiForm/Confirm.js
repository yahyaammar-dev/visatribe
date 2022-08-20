import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import { List, ListItem, ListItemText } from "@material-ui/core/";
import Button from "@material-ui/core/Button";
import { Box } from "@mui/material";

export class Confirm extends Component {
	continue = (e) => {
		e.preventDefault();
		// PROCESS FORM //
		this.props.nextStep();
	};

	back = (e) => {
		e.preventDefault();
		this.props.prevStep();
	};

	render() {
		const {
			values: { fullName, gender, nationality, dateofbirth, passport, dateofissue, dateofexpiry, travellingfrom, dateofarrival, dateofleaving },
		} = this.props;

		return (
			<Box sx={{ width: "80%", margin: "auto", marginTop: "10rem" }}>
				<AppBar title='Confirm User Data' />
				<List>
					<ListItem>
						<ListItemText primary='Full Name' secondary={fullName} />
					</ListItem>
					<ListItem>
						<ListItemText primary='Gender' secondary={gender} />
					</ListItem>
					<ListItem>
						<ListItemText primary='Nationality' secondary={nationality} />
					</ListItem>
					<ListItem>
						<ListItemText primary='Date of Birth' secondary={dateofbirth} />
					</ListItem>
					<ListItem>
						<ListItemText primary='Passport' secondary={passport} />
					</ListItem>
					<ListItem>
						<ListItemText primary='Date of Issue' secondary={dateofissue} />
					</ListItem>
					<ListItem>
						<ListItemText primary='Date of Expiry' secondary={dateofexpiry} />
					</ListItem>
					<ListItem>
						<ListItemText primary='Travelling from' secondary={travellingfrom} />
					</ListItem>
					<ListItem>
						<ListItemText primary='Date of Arrival' secondary={dateofarrival} />
					</ListItem>
					<ListItem>
						<ListItemText primary='Date of Leaving' secondary={dateofleaving} />
					</ListItem>
				</List>
				<br />

				<Button color='secondary' variant='contained' onClick={this.back}>
					Back
				</Button>

				<Button color='primary' variant='contained' onClick={this.continue}>
					Confirm & Continue
				</Button>
			</Box>
		);
	}
}

export default Confirm;
