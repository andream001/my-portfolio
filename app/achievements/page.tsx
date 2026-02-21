import Link from 'next/link'
import { FiArrowLeft, FiAward, FiGift, FiStar } from 'react-icons/fi'

const achievements = [
  {
    icon: FiGift,
    title: 'Web Development Certification',
    description: 'Completed advanced web development course',
    date: '2024',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: FiAward,
    title: 'First Portfolio Launch',
    description: 'Successfully launched personal portfolio website',
    date: '2024',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: FiStar,
    title: 'Open Source Contributor',
    description: 'Contributing to open source projects on GitHub',
    date: '2024',
    color: 'from-purple-500 to-pink-500',
  },
]

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8"
        >
          <FiArrowLeft />
          Back to Home
        </Link>

        <h1 className="text-5xl font-bold mb-6 font-serif">Achievements</h1>
        <p className="text-xl text-gray-600 mb-12">
          Milestones, certifications, and accomplishments
        </p>

        <div className="space-y-6">
          {achievements.map((achievement) => {
            const Icon = achievement.icon
            return (
              <div
                key={achievement.title}
                className="p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`p-4 rounded-xl bg-gradient-to-br ${achievement.color} flex-shrink-0`}
                  >
                    <Icon size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-gray-800">
                        {achievement.title}
                      </h3>
                      <span className="text-sm text-gray-500">
                        {achievement.date}
                      </span>
                    </div>
                    <p className="text-gray-600">{achievement.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
