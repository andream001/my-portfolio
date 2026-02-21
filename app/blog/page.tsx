import Link from 'next/link'
import { FiArrowLeft } from 'react-icons/fi'

export default function BlogPage() {
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

        <h1 className="text-5xl font-bold mb-6 font-serif">Blog</h1>
        <p className="text-xl text-gray-600 mb-12">
          Coming soon! Check back later for articles and tutorials.
        </p>

        <div className="grid gap-8">
          {/* Placeholder para posts futuros */}
          <div className="p-8 border-2 border-dashed border-gray-300 rounded-2xl text-center text-gray-500">
            No posts yet. Stay tuned!
          </div>
        </div>
      </div>
    </div>
  )
}
