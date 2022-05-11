import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Navbar } from "./components"
import { LoginPage, ProfilePage, RegistrationPage, UserAccPage } from "./pages"

function App() {
	return (
		<>
			<div className="w-screen h-screen">
				<Router>
					<Navbar />
					<Routes>
						<Route path='/' element={<LoginPage />} />
						<Route path='/registration' element={<RegistrationPage />} />
						<Route path='/profile/public' element={<ProfilePage />} />
						<Route path='/profile/update' element={<UserAccPage />} />
					</Routes>
				</Router>
			</div>
		</>
	)
}

export default App
