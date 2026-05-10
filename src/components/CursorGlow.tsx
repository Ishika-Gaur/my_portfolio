'use client'

import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const trailRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let mouseX = 0, mouseY = 0
    let trailX = 0, trailY = 0

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY

      if (cursorRef.current) {
        cursorRef.current.style.left = `${mouseX}px`
        cursorRef.current.style.top = `${mouseY}px`
      }
    }

    const animate = () => {
      trailX += (mouseX - trailX) * 0.1
      trailY += (mouseY - trailY) * 0.1

      if (trailRef.current) {
        trailRef.current.style.left = `${trailX}px`
        trailRef.current.style.top = `${trailY}px`
      }

      requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove)
    animate()
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      {/* Cursor dot */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed z-[9999] w-3 h-3 rounded-full -translate-x-1/2 -translate-y-1/2 transition-transform duration-100"
        style={{ background: 'var(--violet)', mixBlendMode: 'screen' }}
      />
      {/* Trailing glow */}
      <div
        ref={trailRef}
        className="pointer-events-none fixed z-[9998] w-40 h-40 rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{
          background: 'radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 70%)',
        }}
      />
    </>
  )
}
