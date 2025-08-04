import Image from 'next/image';
import React from 'react';

const teamMembers = [
	{
		name: 'Sophia Bennett',
		role: 'Head Pastry Chef',
		image: '/images/team-1.jpg',
		socials: [
			{ icon: 'fab fa-facebook-f', url: '#' },
			{ icon: 'fab fa-twitter', url: '#' },
			{ icon: 'fab fa-pinterest-p', url: '#' },
			{ icon: 'fab fa-instagram', url: '#' },
		],
	},
	{
		name: 'Liam Carter',
		role: 'Creative Cake Designer',
		image: '/images/team-2.jpg',
		socials: [
			{ icon: 'fab fa-facebook-f', url: '#' },
			{ icon: 'fab fa-twitter', url: '#' },
			{ icon: 'fab fa-pinterest-p', url: '#' },
			{ icon: 'fab fa-instagram', url: '#' },
		],
	},
	{
		name: 'Ava Patel',
		role: 'Customer Experience Lead',
		image: '/images/team-3.jpg',
		socials: [
			{ icon: 'fab fa-facebook-f', url: '#' },
			{ icon: 'fab fa-twitter', url: '#' },
			{ icon: 'fab fa-pinterest-p', url: '#' },
			{ icon: 'fab fa-instagram', url: '#' },
		],
	},
];

const OurTeam = () => {
	return (
		<section className="py-16 bg-white">
			<div className="max-w-full mx-auto px-4">
				<h2
					className="text-5xl  font-heading md:text-5xl pb-12 text-center mb-12"
				>
					MEET OUR TEAM
				</h2>
				<div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-8">
					{teamMembers.map((member, idx) => (
						<div key={idx} className="flex flex-col items-center w-full max-w-xs">
							<div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden mb-6 shadow-lg border-4 border-white">
								<Image
									src={member.image}
									alt={member.name}
									width={256}
									height={256}
									className="w-full h-full object-cover"
								/>
							</div>
							<h3 className="text-xl font-serif text-center mb-1 text-black">
								{member.name}
							</h3>
							<p
								className="text-sm italic text-center mb-3"
								style={{ color: '#BC8157' }}
							>
								{member.role}
							</p>
							<div className="flex gap-4 justify-center">
								{member.socials.map((social, i) => (
									<a
										key={i}
										href={social.url}
										className="text-black hover:text-[#BC8157] text-xl transition-colors"
										aria-label="Social link"
									>
										<i className={social.icon}></i>
									</a>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default OurTeam;