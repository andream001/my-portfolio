'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiBook, FiAward, FiLink } from 'react-icons/fi'

const exploreCards = [
	{
		icon: FiBook,
		title: 'Blog',
		description: 'Read my thoughts on web development and design',
		link: '/blog',
		gradient: 'from-blue-500 to-cyan-500',
	},
	{
		icon: FiAward,
		title: 'Achievements',
		description: 'Milestones, certifications, and accomplishments',
		link: '/achievements',
		gradient: 'from-purple-500 to-pink-500',
	},
	{
		icon: FiLink,
		title: 'My Links',
		description: 'Find me across the web and social platforms',
		link: '/links',
		gradient: 'from-orange-500 to-red-500',
	},
]

export default function MoreToExplore() {
	return (
		<section className="py-20 bg-transparent">
			<div className="container mx-auto px-6">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
						More to Explore
					</h2>
					<p className="text-xl text-purple-300 max-w-2xl mx-auto">
						Check out these additional resources and connect with me
					</p>
				</motion.div>

				<div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
					{exploreCards.map((card, index) => {
						const Icon = card.icon
						return (
							<motion.div
								key={card.title}
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								whileHover={{ y: -10 }}
							>
								<Link href={card.link} className="block group h-full">
									<div className="relative h-full p-8 bg-purple-900/40 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-purple-600/50 transition-all overflow-hidden border border-purple-700/50">
										{/* Gradient background on hover */}
										<div
											className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-20 transition-opacity`}
										></div>

										{/* Content */}
										<div className="relative z-10">
											<div
												className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${card.gradient} mb-6`}
											>
												<Icon size={32} className="text-white" />
											</div>

											<h3 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-100">
												{card.title}
											</h3>

											<p className="text-purple-300 mb-6">
												{card.description}
											</p>

											<span className="inline-flex items-center text-purple-400 font-semibold group-hover:gap-3 gap-2 transition-all">
												Explore →
											</span>
										</div>
									</div>
								</Link>
							</motion.div>
						)
					})}
				</div>
			</div>
		</section>
	)
}
