import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { theme } from "../../theme";

export default function SocialIcons() {
	return (
		<List sx={{ display: "flex" }} component='nav'>
			<ListItemButton
				sx={{
					p: 0,
					":hover": {
						color: "red",
					},
				}}
			>
				<ListItemIcon
					sx={{
						display: "flex",
						justifyContent: "center",
						":hover": {
							color: "red",
						},
					}}
				>
					<FacebookIcon sx={{ color: theme.palette.ternary.main }} />
				</ListItemIcon>
			</ListItemButton>
			<ListItemButton sx={{ p: 0 }}>
				<ListItemIcon sx={{ display: "flex", justifyContent: "center" }}>
					<TwitterIcon sx={{ color: theme.palette.ternary.main }} />
				</ListItemIcon>
			</ListItemButton>
			<ListItemButton sx={{ p: 0 }}>
				<ListItemIcon sx={{ display: "flex", justifyContent: "center" }}>
					<InstagramIcon sx={{ color: theme.palette.ternary.main }} />
				</ListItemIcon>
			</ListItemButton>
		</List>
	);
}
