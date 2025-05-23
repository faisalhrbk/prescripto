import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AppContextProvider from "./context/AppContext.jsx";

//ADMIN RELATED MODULES
import AdminContextProvider from "./admin/context/AdminContext.jsx";
import DoctorContextProvider from "./admin/context/DoctorContext.jsx";

createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<AdminContextProvider>
			<DoctorContextProvider>
				<AppContextProvider>
					<App />
				</AppContextProvider>
			</DoctorContextProvider>
		</AdminContextProvider>
	</BrowserRouter>
);
