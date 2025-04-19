'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
	project: {
		id: number
		image: string
		url: string
	}
}
const ProjectData = ({ project }: Props) => {
	return (
		<div
			key={project.id}
			className='bg-blue-950 rounded-lg hover:scale-105 transition-all duration-300'>
			<Link
				href={project.url}
				target='_blank'>
				<Image
					src={project.image}
					alt='project'
					className='w-full'
					width={300}
					height={200}
				/>
			</Link>
		</div>
	)
}

export default ProjectData
