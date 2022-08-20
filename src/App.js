import { ThemeProvider } from "@mui/system";
import { theme } from "./theme";
import Navbar from "./Components/Navbar";
import LandingPage from "./Components/LandingPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import { Container, Box } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import { UserForm } from "./Components/LoiForm/UserForm";

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<div className='App'>
					<ToastContainer />
					<Navbar />
					<Routes>
						<Route path='/' element={<LandingPage />} />
						<Route path='/contact' element={<ContactUs />} />
						<Route path='/loiform' element={<UserForm />} />
					</Routes>
					<Box sx={{ boxShadow: 3 }}>
						<Container>
							<Footer />
						</Container>
					</Box>
				</div>
			</ThemeProvider>
		</>
	);
}

export default App;
