import React, { Component } from "react";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Box } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Autocomplete from "@mui/material/Autocomplete";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";

export class FormUserDetails extends Component {
	continue = (e) => {
		e.preventDefault();
		this.props.nextStep();
	};

	render() {
		const { values, handleChange } = this.props;
		return (
			<Box sx={{ width: "80%", margin: "auto", marginTop: "10rem" }}>
				<TextField
					placeholder='Enter Your First Name'
					label='Full Name'
					onChange={handleChange("fullName")}
					defaultValue={values.fullName}
					margin='normal'
					fullWidth
				/>
				<br />
				{/* <TextField placeholder='Gender' label='Gender' onChange={handleChange("gender")} defaultValue={values.gender} margin='normal' fullWidth />
				<br /> */}

				{/*Dummy */}
				<FormControl fullWidth>
					<InputLabel id='demo-simple-select-label'>Gender</InputLabel>
					<Select
						labelId='demo-simple-select-label'
						id='demo-simple-select'
						variant='standard'
						value={this.props.gender}
						label='Gender'
						onChange={handleChange("gender")}
					>
						<MenuItem value='Male'>Male</MenuItem>
						<MenuItem value='Female'>Female</MenuItem>
						<MenuItem value='Other'>Other</MenuItem>
					</Select>
				</FormControl>

				<FormControl fullWidth>
					<InputLabel id='demo-simple-select-label'>Nationality</InputLabel>
					<Select
						labelId='demo-simple-select-label'
						id='demo-simple-select'
						variant='standard'
						value={this.props.nationality}
						label='Nationality'
						onChange={handleChange("nationality")}
					>
						{country_list.map((item) => (
							<MenuItem value={item}>{item}</MenuItem>
						))}
					</Select>
				</FormControl>

				<br />


<LocalizationProvider dateAdapter={AdapterDateFns}>
      
        <DesktopDatePicker
          label="Date desktop"
          inputFormat="MM/dd/yyyy"
          onChange={handleChange("dateofbirth")}
          renderInput={(params) => <TextField {...params} />}
        />
</LocalizationProvider>
<br/>
				<TextField
					placeholder='Enter Your Date of Birth'
					label='Date of Birth'
					onChange={handleChange("dateofbirth")}
					defaultValue={values.dateofbirth}
					margin='normal'
					fullWidth
				/>
				<br />
				<Button color='primary' variant='contained' onClick={this.continue}>
					Continue
				</Button>
			</Box>
		);
	}
}

export default FormUserDetails;


const country_list = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];