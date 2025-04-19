import SectionHeading from '@/component/Helper/SectionHeading'
import { aboutInfo } from '@/Data/data'
import Image from 'next/image'
import React from 'react'
import { HiCheck } from 'react-icons/hi2'

const About = () => {
	return (
		<div className='pt-16 pb-16 bg-[#050709]'>
			<SectionHeading>About</SectionHeading>
			<div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20'>
				<div
					data-aos='fade-left'
					data-aos-abchor-placement='top-center'>
					<h1 className='text-bg text-[26px] sm:text-3xl md:text-4xl lg:text-5xl text-gray-200'>
						{aboutInfo.title}
					</h1>
					<p className='mt-6 text-base text-gray-500'>
						{aboutInfo.description}
					</p>
					<div className='mt-8'>
						<div className='flex items-center space-x-2 mb-6'>
							<div className='w-7 h-7 bg-blue-600 flex flex-col items-center justify-center'>
								<HiCheck />
							</div>
							<p className='text-sm sm:text-base md:text-lg font-bold text-gray-300'>
								Front-end Developer
							</p>
						</div>
					</div>
					<div className='mt-8'>
						<div className='flex items-center space-x-2 mb-6'>
							<div className='w-7 h-7 bg-orange-800 flex flex-col items-center justify-center'>
								<HiCheck />
							</div>
							<p className='text-sm sm:text-base md:text-lg font-bold text-gray-300'>
								Back-end Developer
							</p>
						</div>
					</div>
					<div className='mt-8'>
						<div className='flex items-center space-x-2 mb-6'>
							<div className='w-7 h-7 bg-green-800 flex flex-col items-center justify-center'>
								<HiCheck />
							</div>
							<p className='text-sm sm:text-base md:text-lg font-bold text-gray-300'>
								Full-stack Developer
							</p>
						</div>
					</div>
				</div>
				{/** Stats Content */}
				<div
					data-aos='zoom-in'
					data-aos-delay='150'
					data-aos-abchor-placement='top-center'
					className='grid grid-cols-2 items-center gap-16 lg:mx-auto'>
					<div>
						<Image
							src={'./images/customer.png'}
							alt='image'
							width={80}
							height={80}
							className='mx-auto'
						/>
						<p className='mt-3 font-bold text-white text-center text-xl'>
							{aboutInfo.client}
						</p>
						<p className='text-base sm:text-lg text-gray-400 text-center'>
							Satisfied Customers
						</p>
					</div>
					<div>
						<Image
							src={'./images/experience.png'}
							alt='image'
							width={80}
							height={80}
							className='mx-auto'
						/>
						<p className='mt-3 font-bold text-white text-center text-xl'>
							{aboutInfo.experience}
						</p>
						<p className='text-base sm:text-lg text-gray-400 text-center'>
							Years Experience
						</p>
					</div>
					<div>
						<Image
							src={'./images/completed.png'}
							alt='image'
							width={80}
							height={80}
							className='mx-auto'
						/>
						<p className='mt-3 font-bold text-white text-center text-xl'>
							{aboutInfo.project}
						</p>
						<p className='text-base sm:text-lg text-gray-400 text-center'>
							Completed Projects
						</p>
					</div>
					<div>
						<Image
							src={'./images/rocket.png'}
							alt='image'
							width={80}
							height={80}
							className='mx-auto'
						/>
						<p className='mt-3 font-bold text-white text-center text-xl'>
							{aboutInfo.website}
						</p>
						<p className='text-base sm:text-lg text-gray-400 text-center'>
							Website Lanched
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
