import { useMemo } from 'react'

export function Meteors({ number = 24 }) {
  const meteors = useMemo(
    () =>
      Array.from({ length: number }, (_, index) => ({
        id: index,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 2 + Math.random() * 2,
        delay: Math.random() * 5,
      })),
    [number],
  )

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <style>{`
        @keyframes meteor {
          0% { opacity: 0; transform: translate3d(0, 0, 0) rotate(45deg); }
          10% { opacity: 1; }
          100% { opacity: 0; transform: translate3d(400px, 400px, 0) rotate(45deg); }
        }
      `}</style>
      {meteors.map((meteor) => (
        <span
          key={meteor.id}
          className="absolute h-px w-24 translate-x-[-50%] translate-y-[-50%] bg-gradient-to-r from-transparent via-white/40 to-white/90 opacity-0"
          style={{
            left: `${meteor.left}%`,
            top: `${meteor.top}%`,
            animation: `meteor ${meteor.duration}s linear infinite`,
            animationDelay: `${meteor.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
