import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center relative bg-transparent">
      <div className="text-center px-6 relative z-10">
        <h1 className="text-9xl font-bold text-white mb-4 drop-shadow-lg">404</h1>
        <h2 className="text-3xl font-semibold text-purple-200 mb-6">
          Página Não Encontrada
        </h2>
        <p className="text-xl text-purple-300 mb-8">
          A página que você procura não existe.
        </p>
        <Link
          href="/"
          className="inline-block bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-all shadow-lg hover:shadow-purple-500/50"
        >
          Voltar para Home
        </Link>
      </div>
    </div>
  )
}
