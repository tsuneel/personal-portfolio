import SectionHeading from '@/component/Helper/SectionHeading'
import { skillsData } from '@/Data/data'
import React from 'react'
import Card from './Card'

const Skills = () => {
	return (
		<div className='pt-16 pb-16 bg-[#0f0715]'>
			<SectionHeading>My Skills</SectionHeading>
			<div className='pt-20 w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 text-center gap-4'>
				{skillsData.map((skill, i) => {
					return (
						<div
							data-aos='flip-left'
							data-aos-delay={`${i * 150}`}
							data-aos-abchor-placement='top-center'
							key={skill.id}>
							<Card skill={skill} />
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Skills
