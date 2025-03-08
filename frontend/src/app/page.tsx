'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    // During development, always redirect to dashboard
    router.push('/dashboard')
  }, [router])

  // Return null since we're redirecting
  return null
} 