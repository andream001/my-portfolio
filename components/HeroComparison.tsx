'use client'

import HeroV1 from './HeroV1-CodeFocused'
import HeroV2 from './HeroV2-Terminal'
import HeroV3 from './HeroV3-CodeAnimation'
import HeroV4 from './HeroV4-MatrixCode'
import HeroV5 from './HeroV5-Impact'
import HeroV6 from './HeroV6-Premium'
import HeroV7 from './HeroV7-DynamicCards'

export default function HeroComparison() {
  const versions = [
    { name: 'V1 - Code Focused', component: HeroV1, description: 'Minimalista, profissional' },
    { name: 'V2 - Terminal', component: HeroV2, description: 'Hacker vibe' },
    { name: 'V3 - Code Animation', component: HeroV3, description: 'Elegante, sequencial' },
    { name: 'V4 - Matrix Code', component: HeroV4, description: 'Futurista, neon' },
    { name: 'V5 - Impact', component: HeroV5, description: 'Dinâmico, glitch' },
    { name: 'V6 - Premium', component: HeroV6, description: 'Ornamentado, muitos efeitos' },
    { name: 'V7 - Dynamic Cards ⭐⭐⭐ BEST', component: HeroV7, description: 'CARDS INTERATIVOS, muito visual' },
  ]

  return (
    <div className="w-full">
      {versions.map((version, index) => {
        const Component = version.component
        return (
          <div key={index} className="w-full border-b-2 border-purple-800/50">
            {/* Label */}
            <div className="bg-purple-950/60 px-6 py-3 border-b border-purple-800/30">
              <h3 className="text-lg font-bold text-purple-300">{version.name}</h3>
              <p className="text-sm text-purple-200/70">{version.description}</p>
            </div>
            
            {/* Hero Component */}
            <Component />
          </div>
        )
      })}

      {/* Comparação Summary */}
      <div className="bg-purple-950/40 px-6 py-12 text-center">
        <h2 className="text-2xl font-bold text-purple-300 mb-6">
          Qual você prefere? 👇
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-7 gap-3 max-w-6xl mx-auto">
          {versions.map((version, index) => (
            <div key={index} className={`p-3 rounded-lg border backdrop-blur-sm text-center ${
              index === 6
                ? 'bg-gradient-to-br from-purple-900/80 to-pink-900/50 border-purple-300 ring-2 ring-purple-400/50' 
                : 'bg-purple-900/30 border-purple-700/50'
            }`}>
              <div className="text-xs font-bold text-purple-300">{version.name.split(' ')[1]}</div>
              <div className="text-xs text-purple-200/60 mt-0.5">{version.description.split(',')[0]}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
