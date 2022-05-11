import React from "react"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"

const ProfileUpdate = () => {
	const {
		register,
		handleSubmit,

		formState: { errors },
	} = useForm()
	const onSubmit = (data) => console.log(data)
	return (
		<>
			<div className='flex flex-col items-center m-2 w-full max-w-2xl sm:w-4/5 md:w-2/3 p-2 bg-white rounded border border-gray-300 '>
				<div className='w-32 h-32 rounded-full '>
					<img
						className='w-32 h-32 rounded-full object-cover'
						src='https://images.pexels.com/photos/4520283/pexels-photo-4520283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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
					<div className="py-2 px-1">
						<label htmlFor="profile-pic" className="block text-sm">Update Profile Pic</label>
						<input className="w-full border border-gray-200 rounded" type="file" />
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
								type='first_name'
								placeholder='please enter your first name'
								id='first_name'
								name='first_name'
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
								type='last_name'
								placeholder='please enter your last name'
								id='last_name'
								name='last_name'
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
								type='username'
								placeholder='please enter your username'
								id='username'
								name='username'
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
								type='job_title'
								placeholder='please enter your job title'
								id='job_title'
								name='job_title'
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
								type='company'
								placeholder='please enter your company'
								id='company'
								name='company'
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
								type='linkedIn'
								placeholder='please enter your linkedIn username'
								id='linkedIn'
								name='linkedIn'
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
								type='twitter'
								placeholder='please enter your twitter username'
								id='twitter'
								name='twitter'
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
								type='github'
								placeholder='please enter your github username'
								id='github'
								name='github'
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
								type='website'
								placeholder='please enter your website'
								id='website'
								name='website'
								{...register("website", {
									required: "website is required",
									pattern: {
										value:
											/^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/,
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
				<button className='w-full bg-red-500 py-1  mt-2 rounded flex items-center justify-center font-semibold hover:opacity-80'>
					Delete Profile
				</button>
			</div>
		</>
	)
}

export default ProfileUpdate
