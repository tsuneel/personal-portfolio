import { BaseInfo } from '@/Data/data'
import Image from 'next/image'
import React from 'react'
import { CgSoftwareDownload } from 'react-icons/cg'

const Hero = () => {
	return (
		<div className='w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0f0715] overflow-hidden relative '>
			<div className='flex justify-center flex-col w-4/5 h-full mx-auto'>
				<div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-12'>
					{/* Text Content */}
					<div>
						<h1
							data-aos='fade-left'
							className='text-2xl md:text-3xl lg:text-4xl text-gray-300 font-semibold'>
							I am {BaseInfo.name}
						</h1>
						<h1
							data-aos='fade-right'
							data-aos-delay='100'
							className='text-bg mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-white'>
							{BaseInfo.position}
						</h1>
						<p
							data-aos='fade-left'
							data-aos-delay='200'
							className='mt-6 text-sm md:text-base text-white text-opacity-60'>
							{BaseInfo.description}
						</p>
						<button
							data-aos='zoom-in'
							data-aos-delay='300'
							className='md:px-8 md:py-2.5 text-white font-semibold text-sm md:text-lg transition-all duration-200 rounded-lg mt-8 bg-blue-700 hover:bg-blue-900 flex items-center space-x-2'>
							<a
								href='/Suneel_Tallapaneni_SDE.docx'
								download='Suneel Tallapaneni.docx'>
								Resume
							</a>
							<CgSoftwareDownload />
						</button>
					</div>
					{/* Image Content */}
					<div
						data-aos='zoom-in'
						data-aos-delay='300'
						className='mx-auto hidden lg:block rounded-[3rem] border-[3.5px] border-blue-500 overflow-x-hidden'>
						<Image
							src={BaseInfo.profilePic}
							alt={BaseInfo.name}
							width={500}
							height={500}
						/>
					</div>
				</div>
			</div>
			Hero
		</div>
	)
}

export default Hero
