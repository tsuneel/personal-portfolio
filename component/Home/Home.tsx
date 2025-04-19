'use client'
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Services from './Services'
import Projects from './Projects'
import Skills from './Skills/Skills'
import Reviews from './Reviews'
import Blog from './Blog'
import Contact from './Contact'
import AOS from 'aos'
import 'aos/dist/aos.css'

const HomePage = () => {
	useEffect(() => {
		const initAOS = async () => {
			await import('aos')
			AOS.init({
				duration: 1000,
				easing: 'ease',
				once: true,
				anchorPlacement: 'top-bottom',
			})
		}
		initAOS()
	}, [])

	return (
		<div className='overflow-hidden'>
			<Hero />
			<About />
			<Services />
			{/* <Projects /> */}
			<Skills />
			{/* <Reviews /> */}
			{/* <Blog /> */}
			<Contact />
		</div>
	)
}

export default HomePage
