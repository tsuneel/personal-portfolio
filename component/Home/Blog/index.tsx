import SectionHeading from '@/component/Helper/SectionHeading'
import { blogs } from '@/Data/data'
import React from 'react'
import Card from './Card'

const index = () => {
	return (
		<div className='pt-16 pb-16 bg-[#0f0715]'>
			<SectionHeading> Blogs</SectionHeading>
			<div className='w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 items-center'>
				{blogs.map((blog, i) => {
					return (
						<div
							data-aos='zoom-in'
							data-aos-delay={`${i * 150}`}
							data-aos-abchor-placement='top-center'
							key={blog.id}>
							<Card blog={blog} />
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default index
