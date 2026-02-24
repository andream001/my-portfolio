import Link from 'next/link'
import { FiArrowLeft, FiGithub, FiLinkedin, FiInstagram, FiMail, FiGlobe } from 'react-icons/fi'

const links = [
	{
		icon: FiGithub,
		title: 'GitHub',
		description: 'Check out my code and open source contributions',
		url: 'https://github.com/andream001',
		color: 'from-gray-700 to-gray-900',
	},
	{
		icon: FiLinkedin,
		title: 'LinkedIn',
		description: 'Connect with me professionally',
		url: 'https://www.linkedin.com/in/andrebunhak/',
		color: 'from-blue-600 to-blue-800',
	},
	{
		icon: FiInstagram,
		title: 'Instagram',
		description: 'Follow my creative journey',
		url: 'https://www.instagram.com/0an_dream/',
		color: 'from-pink-500 to-purple-600',
	},
	{
		icon: FiMail,
		title: 'Email',
		description: 'Get in touch directly',
		url: 'mailto:andrebunhak14@gmail.com',
		color: 'from-green-500 to-teal-600',
	},
	{
		icon: FiGlobe,
		title: 'Portfolio',
		description: 'Visit my main website',
		url: '/',
		color: 'from-indigo-500 to-purple-600',
	},
]

export default function LinksPage() {
	return (
		<div className="min-h-screen bg-transparent pt-24 pb-20 relative overflow-hidden">
			<div className="container mx-auto px-6 max-w-2xl relative z-10">
				<Link
					href="/"
					className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-8"
				>
					<FiArrowLeft />
					Back to Home
				</Link>

				<div className="text-center mb-12">
					<div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl font-bold text-white shadow-lg shadow-purple-600/50">
						AB
					</div>
					<h1 className="text-4xl font-bold text-white mb-2 font-serif">
						André Bunhak
					</h1>
					<p className="text-purple-400">Web Designer & Content Creator</p>
				</div>

				<div className="space-y-4">
					{links.map((link) => {
						const Icon = link.icon
						return (
							<a
								key={link.title}
								href={link.url}
								target={link.url.startsWith('http') ? '_blank' : '_self'}
								rel={link.url.startsWith('http') ? 'noopener noreferrer' : ''}
								className="block group"
							>
								<div className="p-6 bg-white/5 backdrop-blur-md rounded-2xl hover:bg-white/10 hover:shadow-lg hover:shadow-purple-600/40 transition-all hover:scale-105 border border-purple-500/30 hover:border-purple-400/60">
									<div className="flex items-center gap-4">
										<div
											className={`p-4 rounded-xl bg-gradient-to-br ${link.color} flex-shrink-0 shadow-lg`}
										>
											<Icon size={24} className="text-white" />
										</div>
										<div className="flex-1 text-left">
											<h3 className="text-xl font-bold text-white mb-1">
												{link.title}
											</h3>
											<p className="text-gray-300 text-sm">
												{link.description}
											</p>
										</div>
										<div className="text-purple-400 group-hover:text-purple-300 group-hover:translate-x-2 transition-all">
											→
										</div>
									</div>
								</div>
							</a>
						)
					})}
				</div>
			</div>
		</div>
	)
}
