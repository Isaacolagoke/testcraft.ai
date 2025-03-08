'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Logo } from '@/components/ui/logo/Logo'
import { Input } from '@/components/ui/input/Input'
import { Button } from '@/components/ui/button/Button'
import { SocialButton } from '@/components/ui/button/SocialButton'
import { FcGoogle } from 'react-icons/fc'
import { FaApple } from 'react-icons/fa'
import { BaseLayout } from '@/components/layout/BaseLayout'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSocialLoading, setIsSocialLoading] = useState<'google' | 'apple' | null>(null)

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    if (error) setError('')
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
    if (error) setError('')
  }

  const handleLogin = async () => {
    if (!email || !password) {
      setError('Email and password are required')
      return
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address')
      return
    }

    try {
      setIsLoading(true)
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      console.log('Login clicked with:', { email, password })
      // Here you would typically make an API call to your backend
    } catch (err) {
      setError('Invalid email or password')
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleLogin = async () => {
    try {
      setIsSocialLoading('google')
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      console.log('Continue with Google clicked')
      // Here you would typically integrate with Google OAuth
    } catch (err) {
      console.error('Google login failed:', err)
    } finally {
      setIsSocialLoading(null)
    }
  }

  const handleAppleLogin = async () => {
    try {
      setIsSocialLoading('apple')
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      console.log('Continue with Apple clicked')
      // Here you would typically integrate with Apple OAuth
    } catch (err) {
      console.error('Apple login failed:', err)
    } finally {
      setIsSocialLoading(null)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleLogin()
    }
  }

  return (
    <BaseLayout showNavigation={false}>
      <div className="min-h-screen flex flex-col items-center justify-center bg-shades-white p-4">
        {/* Logo */}
        <Logo className="mb-8" />

        {/* Heading and Subheading */}
        <div className="text-center mb-8">
          <h1 className="text-heading-2 text-neutral-900 font-semibold mb-2">
            Welcome back
          </h1>
          <p className="text-paragraph-md text-neutral-400">
            Log in to your account to continue
          </p>
        </div>

        {/* Form */}
        <div className="space-y-4 w-full max-w-md mb-6">
          <Input
            value={email}
            onChange={handleEmailChange}
            onKeyDown={handleKeyDown}
            placeholder="Email Address"
            type="email"
            size="md"
            error={error}
          />
          <Input
            value={password}
            onChange={handlePasswordChange}
            onKeyDown={handleKeyDown}
            placeholder="Password"
            type="password"
            size="md"
            error={error}
          />
        </div>

        {/* Forgot Password */}
        <div className="w-full max-w-md text-right mb-6">
          <Link 
            href="/auth/forgot-password" 
            className="text-paragraph-sm text-primary-500 hover:text-primary-600"
          >
            Forgot password?
          </Link>
        </div>

        {/* Login Button */}
        <div className="w-full max-w-md mb-6">
          <Button
            onClick={handleLogin}
            disabled={isLoading}
            className="w-full"
            variant="primary"
            size="md"
          >
            {isLoading ? 'Logging in...' : 'Log in'}
          </Button>
        </div>

        {/* Don't have an account? Sign up */}
        <p className="text-paragraph-sm text-primary-500 mb-6">
          Don't have an account?{' '}
          <Link href="/auth/signup" className="underline hover:text-primary-600">
            Sign up
          </Link>
        </p>

        {/* OR Text */}
        <p className="text-paragraph-sm text-neutral-500 mb-6">OR</p>

        {/* Social Buttons */}
        <div className="space-y-4 w-full max-w-md">
          <SocialButton
            icon={<FcGoogle className="w-5 h-5" />}
            provider="Google"
            onClick={handleGoogleLogin}
            disabled={isSocialLoading !== null}
          />
          <SocialButton
            icon={<FaApple className="w-5 h-5" />}
            provider="Apple"
            onClick={handleAppleLogin}
            disabled={isSocialLoading !== null}
          />
        </div>
      </div>
    </BaseLayout>
  )
} 