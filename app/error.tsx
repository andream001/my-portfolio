'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="text-center px-6">
        <h2 className="text-4xl font-bold text-white mb-4">
          Oops! Something went wrong
        </h2>
        <p className="text-gray-400 mb-8">
          {error.message || 'An unexpected error occurred'}
        </p>
        <button
          onClick={reset}
          className="bg-white text-slate-900 px-8 py-3 rounded-full font-semibold hover:bg-white/90 transition-all"
        >
          Try Again
        </button>
      </div>
    </div>
  )
}
