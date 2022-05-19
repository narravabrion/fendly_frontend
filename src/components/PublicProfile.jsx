import React, { useEffect, useState } from "react"
import axios from "axios"
import { useAuthContext } from "../context/Context"
import { toast } from "react-toastify"

const PublicProfile = () => {
	const [data, setData] = useState(null)
	const { user_id } = useAuthContext()
	// console.log(user_id)
	const fetch_data = async (id) => {
		try {
			const res = await axios.get(`http://localhost:5000/api/v1/get-user/${id}`)
			setData(res.data)
		} catch (error) {
			toast.error("Unable to fetch user data")
		}
	}

	useEffect(() => {
		if (user_id) {
			fetch_data(user_id)
		}
	}, [user_id])

	return (
		<>
			<div className='flex flex-col items-center m-2 w-full max-w-sm shadow sm:w-2/3 md:w-1/2 border border-gray-300 bg-white  p-2 rounded hover:scale-105 transition-all ease-in-out delay-150'>
				<div className='w-32 h-32 rounded-full overflow-hidden'>
					<img
						className='h-full w-full object-cover'
						src={data ? data["profile_pic"] : ""}
						alt='profile'
					/>
				</div>
				<div className='flex flex-col w-full items-center p-2'>
					<h3 className='font-semibold text-lg py-1'>
						{data ? `${data["first_name"]} ${data["last_name"]}` : "J Doe"}
					</h3>
					<p className='text-gray-400'>
						{" "}
						{data
							? `${data["job_title"]} @${data["company"]}`
							: "position @companyX"}
					</p>
				</div>
				<div className='w-full flex items-center justify-center'>
					<div className='w-full max-w-sm flex justify-between p-2'>
						{/* linkedIn */}
						<div className='h-8 w-8 '>
							<a
								href={
									data
										? `https://www.linkedin.com/in/${data["linkedIn_username"]}`
										: "https://www.linkedin.com/"
								}
								target='_blank'
								rel='noreferrer'
							>
								<img
									className='w-full h-full object-cover'
									src='https://img.icons8.com/fluency/344/linkedin-circled.png'
									alt='icon'
								/>
							</a>
						</div>
						{/* twitter */}
						<div className='h-8 w-8 '>
							<a
								href={
									data
										? `https://twitter.com/${data["twitter_username"]}`
										: "https://twitter.com"
								}
								target='_blank'
								rel='noreferrer'
							>
								<img
									className='w-full h-full object-cover'
									src='https://img.icons8.com/color/344/twitter--v1.png'
									alt='icon'
								/>
							</a>
						</div>
						{/* github */}
						<div className='h-8 w-8 '>
							<a
								href={
									data
										? `https://github.com/${data["github_username"]}`
										: "https://github.com/"
								}
								target='_blank'
								rel='noreferrer'
							>
								<img
									className='w-full h-full object-cover'
									src='https://img.icons8.com/glyph-neue/344/github.png'
									alt='icon'
								/>
							</a>
						</div>
						{/* website */}
						<div className='h-8 w-8 '>
							<a
								href={data ? data["website"] : "#"}
								target='_blank'
								rel='noreferrer'
							>
								<img
									className='w-full h-full object-cover'
									src='https://img.icons8.com/dotty/344/domain.png'
									alt='icon'
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default PublicProfile
