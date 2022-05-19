import React, { useState, useEffect } from "react"
import axios from "axios"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { useAuthContext } from "../context/Context"

const ProfileUpdate = () => {
	const { user, postUser ,user_id,deleteUser } = useAuthContext()
	const [userData, setUserData] = useState(null)
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	// fetch current user data
	const fetch_data = async (id) => {
		try {
			const res = await axios.get(`http://localhost:5000/api/v1/get-user/${id}`)
			setUserData(res.data)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		if (user_id) {
			fetch_data(user_id)
		}
	}, [user_id])

	// delete user
	const handleUserDelete = ()=>{
		deleteUser(user_id,user)
	}

	// submit user
	const onSubmit = (data) => {
		data = { ...data, profile_pic: data.profile_pic[0], user_id: user_id }
		postUser(data, user)
	}
	return (
		<>
			<div className='flex flex-col items-center m-2 w-full max-w-2xl sm:w-4/5 md:w-2/3 p-2 bg-white rounded border border-gray-300 '>
				<div className='w-32 h-32 rounded-full '>
					<img
						className='w-32 h-32 rounded-full object-cover'
						src={userData ? userData["profile_pic"] : ""}
						alt='profile'
					/>
				</div>

				{/* link to public profile */}
				<Link
					className='w-full bg-green-500 py-1 mt-2 rounded flex items-center justify-center font-semibold hover:opacity-80'
					to='/profile/public'
				>
					View public profile
				</Link>
				{/* update details form */}
				<form className='w-full py-2 ' onSubmit={handleSubmit(onSubmit)}>
					{/* profile photo */}
					<div className='py-2 px-1'>
						<label htmlFor='profile_pic' className='block text-sm'>
							Update Profile Pic
						</label>
						<input
							className='w-full border border-gray-200 rounded'
							type='file'
							id='profile_pic'
							name='profile_pic'
							accept='image/*'
							{...register("profile_pic")}
						/>
					</div>
					{/* first and last name */}
					<div className='w-full flex py-2'>
						{/* first name */}
						<div className='w-1/2 px-1'>
							<label htmlFor='first_name' className='block text-sm'>
								First Name
							</label>
							<input
								className='w-full border-b border-b-black  focus:outline-none'
								type='text'
								placeholder='please enter your first name'
								id='first_name'
								name='first_name'
								defaultValue={
									userData ? userData["first_name"] : ""
								}
								{...register("first_name", {
									required: "first name is required",
									pattern: {
										value: /^[ A-Za-z_@./#&+-]*$/,
										message: "first name cannot contain numbers",
									},
								})}
							/>

							<p className='w-full rounded px-1 mt-1 bg-red-400/50 text-xs'>
								{errors.first_name?.message}
							</p>
						</div>
						{/* last name */}
						<div className='w-1/2 px-1'>
							<label htmlFor='last_name' className='block text-sm'>
								Last Name
							</label>
							<input
								className='w-full border-b border-b-black  focus:outline-none'
								type='text'
								placeholder='please enter your last name'
								id='last_name'
								name='last_name'
								defaultValue={
									userData ? userData["last_name"] : ""
								}
								{...register("last_name", {
									required: "last name is required",
									pattern: {
										value: /^[ A-Za-z_@./#&+-]*$/,
										message: "last name cannot contain numbers",
									},
								})}
							/>

							<p className='w-full rounded px-1 mt-1 bg-red-400/50 text-xs'>
								{errors.last_name?.message}
							</p>
						</div>
					</div>
					{/* email and username */}
					<div className='w-fill flex'>
						{/* email */}
						<div className='w-1/2 px-1'>
							<label htmlFor='email' className='block text-sm'>
								Email
							</label>
							<input
								className='w-full border-b border-b-black  focus:outline-none'
								type='email'
								placeholder='please enter your email'
								id='email'
								name='email'
								defaultValue={
									userData ? userData["email"] : ""
								}
								{...register("email", {
									required: "email is required",
									pattern: {
										value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
										message: "enter valid email",
									},
								})}
							/>

							<p className='w-full rounded px-1 mt-1 bg-red-400/50 text-xs'>
								{errors.email?.message}
							</p>
						</div>
						{/* username */}
						<div className='w-1/2 px-1'>
							<label htmlFor='username' className='block text-sm'>
								Username
							</label>
							<input
								className='w-full border-b border-b-black  focus:outline-none'
								type='text'
								placeholder='please enter your username'
								id='username'
								name='username'
								defaultValue={
									userData ? userData["username"] : ""
								}
								{...register("username", {
									required: "username is required",
								})}
							/>

							<p className='w-full rounded px-1 mt-1 bg-red-400/50 text-xs'>
								{errors.username?.message}
							</p>
						</div>
					</div>
					{/* job title and company */}
					<div className='w-full flex'>
						{/* job title */}
						<div className='w-1/2 px-1'>
							<label htmlFor='job_title' className='block text-sm'>
								Job Title
							</label>
							<input
								className='w-full border-b border-b-black  focus:outline-none'
								type='text'
								placeholder='please enter your job title'
								id='job_title'
								name='job_title'
								defaultValue={
									userData ? userData["job_title"] : ""
								}
								{...register("job_title", {
									required: "job title is required",
								})}
							/>

							<p className='w-full rounded px-1 mt-1 bg-red-400/50 text-xs'>
								{errors.job_title?.message}
							</p>
						</div>
						{/* company */}
						<div className='w-1/2 px-1'>
							<label htmlFor='company' className='block text-sm'>
								Company
							</label>
							<input
								className='w-full border-b border-b-black  focus:outline-none'
								type='text'
								placeholder='please enter your company'
								id='company'
								name='company'
								defaultValue={
									userData ? userData["company"] : ""
								}
								{...register("company", {
									required: "company is required",
								})}
							/>

							<p className='w-full rounded px-1 mt-1 bg-red-400/50 text-xs'>
								{errors.company?.message}
							</p>
						</div>
					</div>
					{/* linkedIn and twitter  */}
					<div className='w-full flex'>
						{/* linkedIn */}
						<div className='w-1/2 px-1'>
							<label htmlFor='linkedIn' className='block text-sm'>
								LinkedIn Username
							</label>
							<input
								className='w-full border-b border-b-black  focus:outline-none'
								type='text'
								placeholder='please enter your linkedIn username'
								id='linkedIn'
								name='linkedIn'
								defaultValue={
									userData ? userData["linkedIn_username"] : ""
								}
								{...register("linkedIn", {
									required: "linkedIn username is required",
								})}
							/>

							<p className='w-full rounded px-1 mt-1 bg-red-400/50 text-xs'>
								{errors.linkedIn?.message}
							</p>
						</div>
						{/* twitter */}
						<div className='w-1/2 px-1'>
							<label htmlFor='twitter' className='block text-sm'>
								Twitter Username
							</label>
							<input
								className='w-full border-b border-b-black  focus:outline-none'
								type='text'
								placeholder='please enter your twitter username'
								id='twitter'
								name='twitter'
								defaultValue={
									userData ? userData["twitter_username"] : ""
								}
								{...register("twitter", {
									required: "twitter username is required",
								})}
							/>

							<p className='w-full rounded px-1 mt-1 bg-red-400/50 text-xs'>
								{errors.twitter?.message}
							</p>
						</div>
					</div>
					{/* github and website */}
					<div className='w-full flex'>
						{/* github */}
						<div className='w-1/2 px-1'>
							<label htmlFor='github' className='block text-sm'>
								Github Username
							</label>
							<input
								className='w-full border-b border-b-black  focus:outline-none'
								type='text'
								placeholder='please enter your github username'
								id='github'
								name='github'
								defaultValue={
									userData ? userData["github_username"] : ""
								}
								{...register("github", {
									required: "github username is required",
								})}
							/>

							<p className='w-full rounded px-1 mt-1 bg-red-400/50 text-xs'>
								{errors.github?.message}
							</p>
						</div>
						{/* website */}
						<div className='w-1/2 px-1'>
							<label htmlFor='website' className='block text-sm'>
								Website
							</label>
							<input
								className='w-full border-b border-b-black  focus:outline-none'
								type='text'
								placeholder='please enter your website'
								id='website'
								name='website'
								defaultValue={
									userData ? userData["website"] : ""
								}
								{...register("website", {
									required: "website is required",
									pattern: {
										value:
											/[(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/,
										message: "Enter a valid url",
									},
								})}
							/>

							<p className='w-full rounded px-1 mt-1 bg-red-400/50 text-xs'>
								{errors.website?.message}
							</p>
						</div>
					</div>
					<div>
						<button className='w-full bg-green-500 py-1 mt-2 rounded flex items-center justify-center font-semibold hover:opacity-80'>
							Update Profile
						</button>
					</div>
				</form>
				<button onClick={handleUserDelete} className='w-full bg-red-500 py-1  mt-2 rounded flex items-center justify-center font-semibold hover:opacity-80'>
					Delete Profile
				</button>
			</div>
		</>
	)
}

export default ProfileUpdate
