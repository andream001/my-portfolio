'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const shotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    const shot = shotRef.current
    if (!dot || !ring || !shot) return

    let rafId: number
    let recoilTimeout: ReturnType<typeof setTimeout> | undefined
    let ringX = -100
    let ringY = -100

    const onMove = (e: MouseEvent) => {
      const x = e.clientX
      const y = e.clientY

      dot.style.transform = `translate(${x}px, ${y}px)`

      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        ringX += (x - ringX) * 0.18
        ringY += (y - ringY) * 0.18
        ring.style.transform = `translate(${ringX}px, ${ringY}px)`
      })
    }

    const onShoot = (e: MouseEvent) => {
      shot.style.left = `${e.clientX}px`
      shot.style.top = `${e.clientY}px`
      shot.classList.remove('shot-active')
      void shot.offsetWidth
      shot.classList.add('shot-active')

      ring.classList.add('cursor-fire')
      if (recoilTimeout) clearTimeout(recoilTimeout)
      recoilTimeout = setTimeout(() => ring.classList.remove('cursor-fire'), 90)
    }

    const onEnterLink = () => ring.classList.add('cursor-expanded')
    const onLeaveLink = () => ring.classList.remove('cursor-expanded')

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mousedown', onShoot)

    const interactiveElements = document.querySelectorAll('a, button, [role="button"]')
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', onEnterLink)
      el.addEventListener('mouseleave', onLeaveLink)
    })

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onShoot)
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', onEnterLink)
        el.removeEventListener('mouseleave', onLeaveLink)
      })
      if (recoilTimeout) clearTimeout(recoilTimeout)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{ transform: 'translate(-100px, -100px)' }}
      >
        <div className="relative -translate-x-1/2 -translate-y-1/2 w-[5px] h-[5px] bg-red-400 rounded-full" />
      </div>

      <div
        ref={shotRef}
        className="cursor-shot fixed z-[9997] pointer-events-none"
        style={{ left: '-100px', top: '-100px' }}
      />

      <div
        ref={ringRef}
        className="cursor-ring fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{ transform: 'translate(-100px, -100px)' }}
      >
        <div className="relative -translate-x-1/2 -translate-y-1/2 w-[32px] h-[32px]">
          <span className="absolute top-1/2 left-0 w-[10px] h-px bg-red-400/70 -translate-y-1/2" />
          <span className="absolute top-1/2 right-0 w-[10px] h-px bg-red-400/70 -translate-y-1/2" />
          <span className="absolute left-1/2 top-0 w-px h-[10px] bg-red-400/70 -translate-x-1/2" />
          <span className="absolute left-1/2 bottom-0 w-px h-[10px] bg-red-400/70 -translate-x-1/2" />
          <span className="absolute inset-[8px] border border-red-400/40" />
        </div>
      </div>

      <style jsx global>{`
        * { cursor: none !important; }
        .cursor-ring.cursor-expanded .relative { transform: translate(-50%, -50%) scale(1.8); transition: transform 0.2s ease; }
        .cursor-ring.cursor-fire .relative { transform: translate(-50%, -50%) scale(0.82) !important; transition: transform 0.08s ease; }

        .cursor-shot {
          width: 8px;
          height: 8px;
          border-radius: 9999px;
          background: rgba(248, 113, 113, 0.95);
          box-shadow: 0 0 0 0 rgba(248, 113, 113, 0.45);
          transform: translate(-50%, -50%) scale(0.2);
          opacity: 0;
        }

        .cursor-shot.shot-active { animation: cursor-shot-pulse 220ms ease-out; }

        @keyframes cursor-shot-pulse {
          0% { opacity: 1; box-shadow: 0 0 0 0 rgba(248, 113, 113, 0.45); transform: translate(-50%, -50%) scale(0.2); }
          100% { opacity: 0; box-shadow: 0 0 0 16px rgba(248, 113, 113, 0); transform: translate(-50%, -50%) scale(1.8); }
        }
      `}</style>
    </>
  )
}
