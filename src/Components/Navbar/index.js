import React, { useState } from "react";
import { Navlogo, Navlinks } from "../../Data";
import { AppBar, Box, Container, Toolbar, IconButton, Button, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { theme } from "../../theme";
import { Link } from "react-router-dom";

function Navbar() {
	const [drawer, setDrawer] = useState(false);
	const toggleDrawer = (state) => (event) => {
		if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
			return;
		}
		setDrawer(state);
	};

	return (
		<AppBar
			sx={{
				boxShadow: 3,
			}}
		>
			<Container>
				<Toolbar
					sx={{
						justifyContent: "space-between",
					}}
				>
					<img src={Navlogo} alt='navbar logo' width='130px' height='auto' />
					<IconButton
						size='large'
						edge='start'
						color='inherit'
						aria-label='menu'
						onClick={toggleDrawer(true)}
						sx={{
							ml: "auto",
							display: { sm: "none", xs: "block" },
						}}
						id='menu_btn'
					>
						<MenuIcon />
					</IconButton>
					<Drawer anchor={"right"} open={drawer} onClose={toggleDrawer(false)}>
						<Box
							role='presentation'
							onKeyDown={toggleDrawer(false)}
							sx={{
								color: "ternary.main",
								height: "100%",
								width: { sm: 0, xs: 200 },
							}}
						>
							<List
								sx={{
									px: 1,
								}}
							>
								{Navlinks.map((item, index) => (
									<div onClick={toggleDrawer(false)} key={index}>
										<ListItem
											button
											key={index}
											sx={{
												":hover": {
													color: "secondary.main",
												},
											}}
										>
											<ListItemText className='customClass'>
												<Link to={item.link}>{item.text}</Link>
											</ListItemText>
										</ListItem>
									</div>
								))}
								{/* <Divider sx={{ borderColor: "secondary.main" }} />
								<ListItem
									button
									sx={{
										":hover": {
											color: "secondary.main",
										},
									}}
								>
									<ListItemText>Login</ListItemText>
								</ListItem> */}
							</List>
						</Box>
					</Drawer>
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
				</Toolbar>
			</Container>
		</AppBar>
	);
}

export default Navbar;
