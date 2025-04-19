import SectionHeading from '@/component/Helper/SectionHeading'
import { projectData } from '@/Data/data'
import React from 'react'
import ProjectData from './ProjectData'

const Projects = () => {
	return (
		<div className='pt-16 pb-16 bg-[#050709]'>
			<SectionHeading>My Projects</SectionHeading>
			<div className='w-[80%] mx-auto pt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-12'>
				{projectData.map((project, i) => {
					return (
						<div
							data-aos='fade-up'
							data-aos-delay={`${i * 150}`}
							data-aos-abchor-placement='top-center'
							key={project.id}>
							<ProjectData project={project} />
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Projects
