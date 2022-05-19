import React from "react"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { useAuthContext } from "../context/Context"

const LoginForm = () => {
	const {login} = useAuthContext()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()


	const onSubmit = (data) => {
		// handleLogin(data)
		login(data)
	}

	return (
		<>
			<div className='rounded shadow overflow-hidden max-w-sm bg-white w-full sm:w-2/3 md:w1/2'>
				<div className='w-full bg-green-500 p-3 flex items-center justify-center'>
					<h3 className=' font-bold text-xl'>login</h3>
				</div>
				{/* login form */}

				<form className='w-full py-2 px-4' onSubmit={handleSubmit(onSubmit)}>
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
									message:
										"Password should be 8-20 characters and include at least 1 uppercase letter, 1 number and 1 special character!",
								},
							})}
						/>
						<p className='w-full rounded px-1 mt-1 bg-red-400/50 text-xs'>
							{errors.password?.message}
						</p>
					</div>
					<div className='w-full flex justify-center items-center'>
						<button
							type='submit'
							className=' bg-green-500 w-1/2 py-1 my-1 font-semibold rounded-full hover:opacity-80'
						>
							login
						</button>
					</div>
					<p className='w-full flex items-center justify-center text-sm'>
						Don't have an account?{" "}
						<span className='text-red-700 cursor-pointer'>
							<Link to='/registration'>Register</Link>
						</span>
					</p>
				</form>
			</div>
		</>
	)
}

export default LoginForm
