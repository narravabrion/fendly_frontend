import React from "react"
import axios from "axios"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

const RegistrationForm = () => {
	const navigate = useNavigate()
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm()
	const onSubmit = async (data) => {
		try {
			 await axios.post(
				"https://fendly.herokuapp.com/api/v1/auth/registration",
				data
			)
			toast.success("Successfully registered!")
			navigate("/", { replace: true })
		} catch (error) {
			toast.error("Registration failed!")
		}
	}

	return (
		<>
			<div className='rounded overflow-hidden shadow bg-white w-full max-w-2xl sm:w-2/3 md:w1/2'>
				<div className='w-full  bg-green-500 p-3 flex items-center justify-center'>
					<h3 className='font-bold text-xl'>fendly Registration</h3>
				</div>
				{/* registration form */}
				<form className='w-full py-2 px-4' onSubmit={handleSubmit(onSubmit)}>
					{/* first name */}
					<div className='py-2'>
						<label htmlFor='first_name' className='block text-sm'>
							First Name
						</label>
						<input
							className='w-full border-b border-b-black py-1 focus:outline-none'
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
					<div className='py-2'>
						<label htmlFor='last_name' className='block text-sm'>
							Last Name
						</label>
						<input
							className='w-full border-b border-b-black py-1 focus:outline-none'
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
					{/* username */}
					<div className='py-2'>
						<label htmlFor='username' className='block text-sm'>
							Username
						</label>
						<input
							className='w-full border-b border-b-black py-1 focus:outline-none'
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
					{/* email */}
					<div className='py-2'>
						<label htmlFor='email' className='block text-sm'>
							Email
						</label>
						<input
							className='w-full border-b border-b-black py-1 focus:outline-none'
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
					{/* password */}
					<div className='py-2'>
						<label htmlFor='password' className='block text-sm'>
							Password
						</label>
						<input
							className='w-full border-b border-b-black py-1 focus:outline-none'
							type='password'
							id='password'
							name='password'
							placeholder='enter your password'
							{...register("password", {
								required: "password is required",
								pattern: {
									value:
										/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
									message:
										"Password should be 8-20 characters and include at least 1 uppercase letter, 1 number and 1 special character!",
								},
							})}
						/>
						<p className='w-full rounded px-1 mt-1 bg-red-400/50 text-xs'>
							{errors.password?.message}
						</p>
					</div>
					{/* confirm password */}
					<div className='py-2'>
						<label htmlFor='password_confirmation' className='block text-sm'>
							Confirm Password
						</label>
						<input
							className='w-full border-b border-b-black py-1 focus:outline-none'
							type='password'
							id='password_confirmation'
							name='password_confirmation'
							placeholder='enter your password'
							{...register("password_confirmation", {
								required: "password confirmation is required",
								validate: (value) =>
									value === watch("password") || "Passwords do not match!",
							})}
						/>
						<p className='w-full rounded px-1 mt-1 bg-red-400/50 text-xs'>
							{errors.password_confirmation?.message}
						</p>
					</div>
					<div className='w-full flex justify-center items-center'>
						<button
							type='submit'
							className=' bg-green-500 w-1/2 py-1 my-1 font-semibold rounded-full hover:opacity-80'
						>
							register
						</button>
					</div>
					<p className='w-full flex items-center justify-center text-sm'>
						Have an account?{" "}
						<span className='text-red-700 cursor-pointer'>
							<Link to='/'>Login</Link>
						</span>
					</p>
				</form>
			</div>
		</>
	)
}

export default RegistrationForm
