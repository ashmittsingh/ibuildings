"use client"

import { useState } from 'react'
import dynamic from 'next/dynamic'

interface EmergencyImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  fallbackColor?: string
}

export default function EmergencyImage({
  src,
  alt,
  width = 300,
  height = 200,
  className = '',
  fallbackColor = 'bg-gray-200'
}: EmergencyImageProps) {
  const [error, setError] = useState(false)
  
  // Check if it's an external URL
  const isExternal = src.startsWith('http')
  
  // For development or when error occurs, use regular img tag
  if (process.env.NODE_ENV === 'development' || error) {
    return (
      <div 
        className={`${fallbackColor} ${className} flex items-center justify-center`}
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        {error ? (
          <span className="text-gray-500 text-sm">Image failed to load</span>
        ) : (
          <img
            src={isExternal ? src : src}
            alt={alt}
            width={width}
            height={height}
            className={className}
            onError={() => setError(true)}
          />
        )}
      </div>
    )
  }
  
  // For production, try Next Image
  const NextImage = dynamic(() => import('next/image'), { ssr: false })
  
  return (
    <NextImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={() => setError(true)}
    />
  )
}