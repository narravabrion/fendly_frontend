import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useAuthContext } from "../context/Context"

const Navbar = () => {
	// const [loggedIn, setLoggedIn] = useState(true)
	// const token = JSON.parse(localStorage.getItem("token"))
	// if (token && token !== "" && token !== undefined && token !== null) {
	// 	setLoggedIn(true)
	// }
	const {loggedIn,logout} =useAuthContext()
	return (
		<>
			<nav className='w-full flex items-center justify-center sticky top-0 shadow z-50'>
				<div className='w-full max-w-7xl h-12 flex items-center justify-between p-2  '>
					<div>
						<Link to='/'>
							<h3 className='text-xl font-bold'>Fendly</h3>
						</Link>
					</div>
					<ul className='flex items-center'>
						{loggedIn ? (
							<li className='px-2  hover:text-green-600'>
								<button className="font-semibold" onClick={logout}>Logout</button>
							</li>
						) : (
							<li className='px-2 font-semibold hover:text-green-600'>
								<Link to='/'>Login</Link>
							</li>
						)}
						<li className='px-2 font-semibold hover:text-green-600'>
							<Link to='/registration'>Register</Link>
						</li>
						<li className='px-2 font-semibold hover:text-green-600'>
							<Link to='/profile/public'>Profile</Link>
						</li>
						<li className='px-2 font-semibold hover:text-green-600'>
							<Link to='/profile/update'>Edit</Link>
						</li>
					</ul>
				</div>
			</nav>
		</>
	)
}

export default Navbar
