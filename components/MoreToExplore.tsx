'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiBook, FiAward, FiLink } from 'react-icons/fi'

const exploreCards = [
	{
		icon: FiBook,
		title: 'Blog',
		description: 'Reflexões sobre desenvolvimento web, arquitetura e ferramentas do campo.',
		link: '/blog',
	},
	{
		icon: FiAward,
		title: 'Conquistas',
		description: 'Marcos, certificações e resultados mensuráveis. Documentados.',
		link: '/achievements',
	},
	{
		icon: FiLink,
		title: 'Links',
		description: 'Localizações confirmadas na web. Acesso direto.',
		link: '/links',
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
					<h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif text-white">
						Mais a Explorar
					</h2>
					<p className="text-base text-white/50 max-w-2xl mx-auto">
						Recursos adicionais. Sem enrolâo.
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
									<div className="relative h-full p-8 bg-white/[0.03] border border-white/10 hover:border-white/25 hover:bg-white/[0.06] transition-all overflow-hidden group-hover:shadow-none">
										{/* Content */}
										<div className="relative z-10">
											<div className="inline-flex p-3 border border-white/15 text-red-400 mb-6">
												<Icon size={24} />
											</div>

											<h3 className="text-xl font-bold mb-3 text-white">
												{card.title}
											</h3>

											<p className="text-white/50 text-sm mb-6">
												{card.description}
											</p>

											<span className="inline-flex items-center text-white/40 text-sm font-medium group-hover:text-white/70 group-hover:gap-3 gap-2 transition-all">
												Explorar →
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
