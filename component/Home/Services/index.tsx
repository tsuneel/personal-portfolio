import SectionHeading from '@/component/Helper/SectionHeading'
import { servicesData } from '@/Data/data'
import React from 'react'
import ServiceCard from './ServiceCard'

function Services() {
	return (
		<div className='pt-16 pb-16 bg-[#0f0715]'>
			<SectionHeading> Services</SectionHeading>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mx-auto w-[80%] mt-20 items-center'>
				{servicesData.map((service, i) => {
					return (
						<div
							data-aos='fade-left'
							data-aos-delay={`${i * 150}`}
							data-aos-abchor-placement='top-center'
							key={service.id}>
							<ServiceCard service={service} />
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Services
