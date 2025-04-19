import React from 'react'
import Form from './Form'
import Info from './Info'

const Contact = () => {
	return (
		<div className='pt-16 pb-16 bg-[#050709]'>
			<div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 w-[90%] sm:w-[80%] mx-auto items-center gap-10 mt-10 '>
				<div
					data-aos='fade-left'
					//data-aos-delay={`${i * 150}`}
					data-aos-abchor-placement='top-center'>
					<Form />
				</div>
				<div
					data-aos='fade-right'
					data-aos-delay='100'
					data-aos-abchor-placement='top-center'
					className='xl:mx-auto'>
					<Info />
				</div>
			</div>
		</div>
	)
}

export default Contact
