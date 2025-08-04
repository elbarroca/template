'use client'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

export default function AuthErrorPage() {
  const [error, setError] = useState<string | null>(null)
  const searchParams = useSearchParams()
  
  useEffect(() => {
    const errorParam = searchParams.get('error')
    setError(errorParam || 'Unknown authentication error')
  }, [searchParams])
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Authentication Error
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            {error}
          </p>
        </div>
        <div className="mt-5">
          <a
            href="/auth/signin"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Try Again
          </a>
        </div>
      </div>
    </div>
  )
}
