'use client'

import { Pause, Play } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

interface IconItem {
  name: string
  logo?: string
}

interface Icon {
  x: number
  y: number
  z: number
  scale: number
  opacity: number
  id: number
}

interface IconCloudProps {
  items: readonly IconItem[]
  showControl?: boolean
}

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3)
}

function drawFallbackIcon(ctx: CanvasRenderingContext2D, name: string, size: number) {
  const safeName = name.trim().slice(0, 2).toUpperCase() || 'T'
  ctx.clearRect(0, 0, size, size)
  ctx.fillStyle = '#0f172a'
  ctx.beginPath()
  ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2)
  ctx.fill()

  const gradient = ctx.createRadialGradient(size * 0.35, size * 0.3, 3, size / 2, size / 2, size)
  gradient.addColorStop(0, 'rgba(148, 163, 184, 0.95)')
  gradient.addColorStop(1, 'rgba(15, 23, 42, 0.9)')
  ctx.fillStyle = gradient
  ctx.beginPath()
  ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2)
  ctx.fill()

  ctx.fillStyle = '#f8fafc'
  ctx.font = `700 ${Math.max(10, size * 0.34)}px sans-serif`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(safeName, size / 2, size / 2 + 1)
}

export function IconCloud({ items, showControl = true }: IconCloudProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [iconPositions, setIconPositions] = useState<Icon[]>([])
  const [isDragging, setIsDragging] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 })
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [targetRotation, setTargetRotation] = useState<{
    x: number
    y: number
    startX: number
    startY: number
    startTime: number
    duration: number
  } | null>(null)

  const animationFrameRef = useRef<number | null>(null)
  const rotationRef = useRef({ x: 0, y: 0 })
  const iconCanvasesRef = useRef<HTMLCanvasElement[]>([])
  const imagesLoadedRef = useRef<boolean[]>([])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mediaQuery.matches) {
      setIsPaused(true)
    }

    const handleChange = (event: MediaQueryListEvent) => {
      setIsPaused(event.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    const newIconCanvases: HTMLCanvasElement[] = []
    const loadedStates: boolean[] = []

    items.forEach((item, index) => {
      const offscreen = document.createElement('canvas')
      offscreen.width = 40
      offscreen.height = 40
      const ctx = offscreen.getContext('2d')
      if (!ctx) {
        loadedStates[index] = true
        newIconCanvases.push(offscreen)
        return
      }

      if (item.logo) {
        const img = new Image()
        img.crossOrigin = 'anonymous'
        img.onload = () => {
          ctx.clearRect(0, 0, offscreen.width, offscreen.height)
          ctx.beginPath()
          ctx.arc(20, 20, 20, 0, Math.PI * 2)
          ctx.closePath()
          ctx.clip()
          ctx.drawImage(img, 0, 0, 40, 40)
          loadedStates[index] = true
        }
        img.onerror = () => {
          drawFallbackIcon(ctx, item.name, 40)
          loadedStates[index] = true
        }
        img.src = item.logo
      } else {
        drawFallbackIcon(ctx, item.name, 40)
        loadedStates[index] = true
      }

      newIconCanvases.push(offscreen)
    })

    iconCanvasesRef.current = newIconCanvases
    imagesLoadedRef.current = loadedStates
  }, [items])

  useEffect(() => {
    const numIcons = items.length || 20
    const offset = 2 / numIcons
    const increment = Math.PI * (3 - Math.sqrt(5))
    const newIcons: Icon[] = []

    for (let i = 0; i < numIcons; i += 1) {
      const y = i * offset - 1 + offset / 2
      const r = Math.sqrt(1 - y * y)
      const phi = i * increment

      const x = Math.cos(phi) * r
      const z = Math.sin(phi) * r

      newIcons.push({
        x: x * 100,
        y: y * 100,
        z: z * 100,
        scale: 1,
        opacity: 1,
        id: i,
      })
    }

    setIconPositions(newIcons)
  }, [items])

  const handleMouseDown = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect()
    if (!rect || !canvasRef.current) return

    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    iconPositions.forEach((icon) => {
      const cosX = Math.cos(rotationRef.current.x)
      const sinX = Math.sin(rotationRef.current.x)
      const cosY = Math.cos(rotationRef.current.y)
      const sinY = Math.sin(rotationRef.current.y)

      const rotatedX = icon.x * cosY - icon.z * sinY
      const rotatedZ = icon.x * sinY + icon.z * cosY
      const rotatedY = icon.y * cosX + rotatedZ * sinX

      const screenX = canvasRef.current!.width / 2 + rotatedX
      const screenY = canvasRef.current!.height / 2 + rotatedY
      const scale = (rotatedZ + 200) / 300
      const radius = 20 * scale
      const dx = x - screenX
      const dy = y - screenY

      if (dx * dx + dy * dy < radius * radius) {
        const targetX = -Math.atan2(icon.y, Math.sqrt(icon.x * icon.x + icon.z * icon.z))
        const targetY = Math.atan2(icon.x, icon.z)

        const currentX = rotationRef.current.x
        const currentY = rotationRef.current.y
        const distance = Math.sqrt(
          Math.pow(targetX - currentX, 2) + Math.pow(targetY - currentY, 2),
        )

        const duration = Math.min(2000, Math.max(800, distance * 1000))

        setTargetRotation({
          x: targetX,
          y: targetY,
          startX: currentX,
          startY: currentY,
          startTime: performance.now(),
          duration,
        })
      }
    })

    setIsDragging(true)
    setLastMousePos({ x: event.clientX, y: event.clientY })
  }

  const handleMouseMove = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect()
    if (rect) {
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top
      setMousePos({ x, y })
    }

    if (isDragging) {
      const deltaX = event.clientX - lastMousePos.x
      const deltaY = event.clientY - lastMousePos.y

      rotationRef.current = {
        x: rotationRef.current.x + deltaY * 0.002,
        y: rotationRef.current.y + deltaX * 0.002,
      }

      setLastMousePos({ x: event.clientX, y: event.clientY })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    if (!canvas || !context) return

    const animate = () => {
      context.clearRect(0, 0, canvas.width, canvas.height)
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const maxDistance = Math.sqrt(centerX * centerX + centerY * centerY)
      const dx = mousePos.x - centerX
      const dy = mousePos.y - centerY
      const distance = Math.sqrt(dx * dx + dy * dy)
      const speed = 0.003 + (distance / maxDistance) * 0.01

      if (targetRotation) {
        const elapsed = performance.now() - targetRotation.startTime
        const progress = Math.min(1, elapsed / targetRotation.duration)
        const easedProgress = easeOutCubic(progress)

        rotationRef.current = {
          x: targetRotation.startX + (targetRotation.x - targetRotation.startX) * easedProgress,
          y: targetRotation.startY + (targetRotation.y - targetRotation.startY) * easedProgress,
        }

        if (progress >= 1) {
          setTargetRotation(null)
        }
      } else if (!isDragging && !isPaused) {
        rotationRef.current = {
          x: rotationRef.current.x + (dy / canvas.height) * speed,
          y: rotationRef.current.y + (dx / canvas.width) * speed,
        }
      }

      iconPositions.forEach((icon, index) => {
        const cosX = Math.cos(rotationRef.current.x)
        const sinX = Math.sin(rotationRef.current.x)
        const cosY = Math.cos(rotationRef.current.y)
        const sinY = Math.sin(rotationRef.current.y)

        const rotatedX = icon.x * cosY - icon.z * sinY
        const rotatedZ = icon.x * sinY + icon.z * cosY
        const rotatedY = icon.y * cosX + rotatedZ * sinX

        const scale = (rotatedZ + 200) / 300
        const opacity = Math.max(0.2, Math.min(1, (rotatedZ + 150) / 200))

        context.save()
        context.translate(canvas.width / 2 + rotatedX, canvas.height / 2 + rotatedY)
        context.scale(scale, scale)
        context.globalAlpha = opacity

        const canvasIcon = iconCanvasesRef.current[index]
        const isAssetReady = canvasIcon && imagesLoadedRef.current[index]

        if (isAssetReady) {
          context.drawImage(canvasIcon, -20, -20, 40, 40)
        } else {
          drawFallbackIcon(context, items[index]?.name ?? 'T', 40)
        }

        context.restore()
      })

      const hasPendingAssets = !imagesLoadedRef.current.every((loaded) => loaded)
      const shouldContinue = !isPaused || isDragging || targetRotation !== null || hasPendingAssets

      if (shouldContinue) {
        animationFrameRef.current = requestAnimationFrame(animate)
      }
    }

    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current)
    }
  }, [iconPositions, isDragging, isPaused, mousePos, targetRotation, items])

  return (
    <div className="relative inline-block">
      <canvas
        ref={canvasRef}
        width={420}
        height={420}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        className="rounded-[1.5rem]"
        aria-label="Interactive technology cloud"
        role="img"
      />

      {showControl && (
        <button
          type="button"
          onClick={() => setIsPaused((value) => !value)}
          aria-label={isPaused ? 'Play animation' : 'Pause animation'}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-slate-900/80 text-slate-100 shadow-lg backdrop-blur-sm transition hover:bg-slate-800"
        >
          {isPaused ? <Play size={15} /> : <Pause size={15} />}
        </button>
      )}
    </div>
  )
}
