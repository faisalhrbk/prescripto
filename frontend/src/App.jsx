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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Admin IMPORTS
import AdminLogin from "./admin/pages/AdminLogin";
import AdminNavbar from "./admin/components/AdminNavbar";
import AdminFooter from "./admin/components/AdminFooter";
import AdminProtectedRoutes from "./admin/components/AdminProtectedRoutes.jsx";

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
		<>
			<ToastContainer />
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

				{/*---- ADMIN LOGIN (No Layout) ---- */}
				<Route path="/admin/login" element={<AdminLogin />} />

				{/*---- ADMIN ROUTES---- */}
				<Route path="/admin" element={<AdminLayout />}>
					<Route element={<AdminProtectedRoutes />}>
						{/* Admin protected routes go here */}
					</Route>
				</Route>
			</Routes>
		</>
	);
};

export default App;
