import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from "react-router-dom"
import "react-toastify/dist/ReactToastify.css"
import { Navbar } from "./components"
import { useAuthContext } from "./context/Context"
import { LoginPage, ProfilePage, RegistrationPage, UserAccPage } from "./pages"

function App() {
	const { loggedIn } = useAuthContext()
	return (
		<>
			<div className='w-screen h-screen'>
				<Router>
					<Navbar />
					<Routes>
						<Route
							path='/'
							element={
								loggedIn ? <Navigate to='/profile/update' /> : <LoginPage />
							}
						/>
						<Route path='/registration' element={<RegistrationPage />} />
						<Route path='/profile/public' element={<ProfilePage />} />
						<Route
							path='/profile/update'
							element={loggedIn ? <UserAccPage /> : <Navigate to='/' />}
						/>
					</Routes>
				</Router>
			</div>
		</>
	)
}

export default App
