import Link from 'next/link'

import { Logo } from '@/components/Logo'
import { type Metadata } from 'next'

import { RegistrationForm } from './registrationForm'

export const metadata: Metadata = {
  title: 'Sign Up',
}

export default function Register() {
  return (
    <div className="relative flex min-h-full shrink-0 justify-center md:px-12 lg:px-0">
      <div className="relative z-10 flex flex-1 flex-col bg-white px-4 py-10 shadow-2xl sm:justify-center md:flex-none md:px-28">
        <main className="mx-auto w-full max-w-5xl sm:px-4 md:px-0">
          <div className="flex">
            <Link href="/" aria-label="Home">
              <Logo className="h-10 w-auto" />
            </Link>
          </div>
          <h2 className="mt-20 text-lg font-semibold text-gray-900">
            Get started for free
          </h2>
          <RegistrationForm />
          <p className="mt-2 text-sm text-gray-700">
            Already registered?{' '}
            <Link
              href="/login"
              className="font-medium text-blue-600 hover:underline"
            >
              Sign in
            </Link>{' '}
            to your account.
          </p>
        </main>
      </div>
    </div>
  )
}
