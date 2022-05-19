import React, { useEffect } from "react"
import { ProfileUpdate } from "../components"
import { useAuthContext } from "../context/Context"


const UserAccPage = () => {
	const {user} = useAuthContext()
	useEffect(() => {
	//   console.log(user)
	}, [user])
	return (
		<>
			<div className='w-full h-full flex items-center justify-center'>
				<ProfileUpdate />
			</div>
		</>
	)
}

export default UserAccPage
