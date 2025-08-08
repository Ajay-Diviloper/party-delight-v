"use client";

import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
	{
		text: "Party Delight exceeded my expectations! The cake was stunning and tasted heavenly. My guests couldn't stop talking about it.",
		name: 'Emily R.',
		location: 'London',
		image: '/images/team-1.jpg',
		color: '#ff3131',
	},
	{
		text: "The pastries were fresh, flavorful, and beautifully presented. I highly recommend Party Delight for any special occasion.",
		name: 'Michael S.',
		location: 'Toronto',
		image: '/images/team-2.jpg',
		color: '#ff3131',
	},
	{
		text: "Exceptional service and delicious treats! The team made my birthday unforgettable with their attention to detail.",
		name: 'Sam K.',
		location: 'Sydney',
		image: '/images/team-3.jpg',
		color: '#ff3131',
	},
];

const sliderSettings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 3500,
	arrows: true,
	responsive: [
		{
			breakpoint: 1024,
			settings: { slidesToShow: 2 }
		},
		{
			breakpoint: 768,
			settings: { slidesToShow: 1 }
		}
	]
};

const OurTestimonials = () => {
	return (
		<section className="w-full bg-[#fafafa] pb-16 ">
			<div className="max-w-7xl mx-auto px-4">
				<h2 className="text-4xl md:text-4xl font-heading pb-5 text-center mb-16">
					CUSTOMER REVIEWS
				</h2>
				<Slider {...sliderSettings} className="pb-10">
					{testimonials.map((t, idx) => (
						<div key={idx}>
							<div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center h-full mx-2">
								<span
									className="text-4xl mb-4"
									style={{ color: t.color }}
								>
									&ldquo;
								</span>
								<p className="text-gray-600 text-center mb-8">
									{t.text}
								</p>
								<div className="flex flex-col items-center mt-auto">
									<Image
										src={t.image}
										alt={t.name}
										width={56}
										height={56}
										className="rounded-full mb-2 object-cover"
									/>
									<span className="font-bold text-base text-gray-900">
										{t.name}
									</span>
									<span className="text-sm text-gray-500">
										{t.location}
									</span>
								</div>
							</div>
						</div>
					))}
				</Slider>
			</div>
		</section>
	);
};

export default OurTestimonials;