'use client'

import { navLinks } from '@/constants/constant'
import Link from 'next/link'
import React from 'react'
import { CgClose } from 'react-icons/cg'

type Props = {
	closeNav: () => void
	showNav: boolean
}
const MobileNav = ({ closeNav, showNav }: Props) => {
	const navOpen = showNav ? 'translate-x-0' : 'translate-x-[-100%]'
	return (
		<div>
			{/* OverLay */}
			<div
				className={`fixed ${navOpen} transform transition-all duration-500 inset-0 z-[1000] bg-black opacity-70 w-full h-screen`}>
				{/* Nav Links */}

				<div
					className={`text-white ${navOpen} transform transition-all duration-500 delay-300 fixed justify-center flex flex-col h-full w-[80%] sm:w-[60%] bg-[#080808] space-y-6 z-[1000]`}>
					{navLinks.map((navLink) => {
						return (
							<Link
								key={navLink.id}
								href={navLink.url}>
								<p className='relative text-base font-medium w-fit block after:block after:absolute after:h-[3px] after:content-none after:bg-yellow-400 text-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right text-[20px] ml-12 border-b-[1.5px] pb-2 border-white sm:text-[30px]'>
									{navLink.label}
								</p>
							</Link>
						)
					})}
					<CgClose
						onClick={closeNav}
						className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 text-white'
					/>
				</div>
			</div>
		</div>
	)
}

export default MobileNav
