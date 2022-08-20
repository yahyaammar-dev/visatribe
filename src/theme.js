import { createTheme } from "@mui/material";

export const theme = createTheme({
	palette: {
		primary: {
			main: "#ffffff",
			footer: "#888a8c",
			copyright: "#4a4b4d",
			black: "#000000",
			white: "#ffffff",
		},
		secondary: {
			main: "#876445",
			box: "#F9F9FF",
		},
		ternary: {
			main: "#2B7A0B",
			input: "#E9EAF3",
			light: "#fcfceb",
		},
		text: {
			main: "#878584",
		},
	},
	typography: {
		fontFamily: "Poppins, sans-serif",
	},
});
