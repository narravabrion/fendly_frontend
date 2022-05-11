import React from "react"

const PublicProfile = () => {
	return (
		<>
			<div className='flex flex-col items-center m-2 w-full max-w-sm shadow sm:w-2/3 md:w-1/2 border border-gray-300 bg-white  p-2 rounded hover:scale-105 transition-all ease-in-out delay-150'>
				<div className='w-32 h-32 rounded-full overflow-hidden'>
					<img
						className='h-full w-full object-cover'
						src='https://images.pexels.com/photos/4520283/pexels-photo-4520283.jpeg?auto=compress&cs=tinysrgb&w=860&h=750&dpr=1'
						alt='profile'
					/>
				</div>
				<div className='flex flex-col w-full items-center p-2'>
					<h3 className='font-semibold text-lg py-1'>John Doe</h3>
					<p className='text-gray-400'>software Eng @PandaX</p>
				</div>
				<div className='w-full flex items-center justify-center'>
					<div className='w-full max-w-sm flex justify-between p-2'>
						{socials.map((item, idx) => {
							return (
								<div key={idx} className='h-8 w-8 '>
									<a href={item.url}>
										<img
											className='w-full h-full object-cover'
											src={item.icon}
											alt='icon'
										/>
									</a>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</>
	)
}

export default PublicProfile

let socials = [
	{
		name: "linkedIn",
		icon: "https://img.icons8.com/fluency/344/linkedin-circled.png",
		url: "",
	},
	{
		name: "twitter",
		icon: "https://img.icons8.com/color/344/twitter--v1.png",
		url: "",
	},
	{
		name: "github",
		icon: "https://img.icons8.com/glyph-neue/344/github.png",
		url: "",
	},
	{
		name: "website",
		icon: "https://img.icons8.com/dotty/344/domain.png",
		url: "",
	},
]
