import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MyProfile from "./pages/MyProfile";
import MyAppointments from "./pages/MyAppointments";
import Appointment from "./pages/Appointment";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Admin IMPORTS
import AdminLogin from "./admin/pages/AdminLogin";
import AdminNavbar from "./admin/components/AdminNavbar";
import AdminFooter from "./admin/components/AdminFooter";

// User Layout
const MainUserLayout = () => (
	<div className="mx-4 sm:mx-[10%]">
		<Navbar />
		<Outlet />
		<Footer />
	</div>
);

// Admin Layout
const AdminLayout = () => (
	<div className="mx-4 sm:mx-[10%]">
		<AdminNavbar />
		<Outlet />
		<AdminFooter />
	</div>
);

const App = () => {
	return (
		<Routes>
			{/* ----MAIN USER LAYOUT----- */}
			<Route path="/" element={<MainUserLayout />}>
				<Route index element={<Home />} />
				<Route path="doctors" element={<Doctors />} />
				<Route path="doctors/:speciality" element={<Doctors />} />
				<Route path="login" element={<Login />} />
				<Route path="about" element={<About />} />
				<Route path="contact" element={<Contact />} />
				<Route path="my-profile" element={<MyProfile />} />
				<Route path="my-appointments" element={<MyAppointments />} />
				<Route path="appointment/:docId" element={<Appointment />} />
			</Route>
{/*---- ADMIN ROUTES---- */}
			<Route path="/admin" element={<AdminLayout />}>
				<Route path="login" element={<AdminLogin />} />
			</Route>
		</Routes>
	);
};

export default App;
