import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-center px-6">
        <h1 className="text-9xl font-bold text-white mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-white/80 mb-6">
          Página Não Encontrada
        </h2>
        <p className="text-xl text-white/60 mb-8">
          A página que você procura não existe.
        </p>
        <Link
          href="/"
          className="inline-block bg-white text-slate-900 px-8 py-3 rounded-full font-semibold hover:bg-white/90 transition-all"
        >
          Voltar para Home
        </Link>
      </div>
    </div>
  )
}
