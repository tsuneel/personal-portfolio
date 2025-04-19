'use client'
import { clientReviews } from '@/Data/data'
import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import Card from './Card'

const responsive = {
	superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 3000 },
		items: 4,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1324 },
		items: 3,
	},
	tablet: {
		breakpoint: { max: 1324, min: 764 },
		items: 2,
	},
	mobile: {
		breakpoint: { max: 764, min: 0 },
		items: 1,
	},
}

const Slider = () => {
	return (
		<Carousel
			arrows={true}
			autoPlay={true}
			autoPlaySpeed={5000}
			infinite
			responsive={responsive}>
			{clientReviews.map((review) => {
				return (
					<div key={review.image}>
						<Card review={review} />
					</div>
				)
			})}
		</Carousel>
	)
}

export default Slider
