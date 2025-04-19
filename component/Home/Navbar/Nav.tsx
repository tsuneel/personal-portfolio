'use client'
import { navLinks } from '@/constants/constant'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { HiBars3BottomRight } from 'react-icons/hi2'

type Props = {
	openNav: () => void
}

const Nav = ({ openNav }: Props) => {
	const [navBg, setNavBg] = useState('fixed')

	useEffect(() => {
		const handler = () => {
			if (window.screenY >= 90) {
				setNavBg('fixed')
			}
			if (window.screenY < 90) {
				setNavBg('bg-[#240b39] h-[8vh]')
			}
		}
		window.addEventListener('scroll', handler)

		return () => {
			window.removeEventListener('scroll', handler)
		}
	}, [])

	return (
		<div
			className={`fixed ${navBg} transition-all duration-200 h-[12vh] z-[10] w-full`}>
			<div className='flex text-white items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto'>
				{/*Logo*/}
				<Image
					src='./images/logo1.png'
					alt='LOGO'
					width={250}
					height={45}
					className='ml-[-1.5rem] sm:ml-0 text-white bg-auto'
				/>

				{/* Links */}
				<div className='flex items-center space-x-10 scale-x-100'>
					<div className='hidden lg:flex items-center space-x-8'>
						{navLinks.map((navLink) => {
							return (
								<Link
									key={navLink.id}
									href={navLink.url}>
									<p className='relative text-base font-medium w-fit block after:block after:absolute after:h-[3px] after:content-none after:bg-yellow-400 text-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right'>
										{navLink.label}
									</p>
								</Link>
							)
						})}
					</div>
					<div className='flex items-center space-x-4'>
						<button className='md:px-10 cursor-pointer md:py-3 px-8 py-3 text-blue-800 font-semibold sm:text-base text-sm bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg'>
							Hire Me
						</button>
						<HiBars3BottomRight
							onClick={openNav}
							className='w-8 h-8 cursor-pointer text-white lg:hidden'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Nav
