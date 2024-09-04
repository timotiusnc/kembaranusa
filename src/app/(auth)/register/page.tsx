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
        <main className="mx-auto w-full max-w-4xl sm:px-4 md:px-0">
          <div className="flex justify-center">
            <Link href="/" aria-label="Home">
              <Logo className="h-24 w-auto" />
            </Link>
          </div>
          <div>
            <div className="mt-8">
              <p>
                Location:{' '}
                <strong>
                  Sumba Barat Daya & Sumba Timur, Nusa Tenggara Timur
                </strong>
              </p>
              <p>
                Date: <strong>23 - 27 October 2024 (5D4N)</strong>
              </p>

              <p>
                <strong>Arrival</strong> point:{' '}
                <a
                  href="https://maps.app.goo.gl/iGn3WazRX8XFCHf98"
                  target="_blank"
                  rel="noopener"
                  className="underline"
                >
                  <strong>
                    Bandara Tambolaka, Waikabubak, Sumba Barat Daya
                  </strong>
                </a>
              </p>

              <p>
                <strong>Departure</strong> point:{' '}
                <a
                  href="https://maps.app.goo.gl/9nG6no7p8u2994Fb6"
                  target="_blank"
                  rel="noopener"
                  className="underline"
                >
                  <strong>
                    Bandara Umbu Mehang Kunda, Waingapu, Sumba Timur
                  </strong>
                </a>
              </p>
            </div>

            <div className="mt-8">
              <div>
                Price: <strong>Rp 5.499.000 / pax</strong>
              </div>
              <ul>
                <li>• DP 30% (Rp 1.650.000) upon registration</li>
                <li>• Remaining 70% to be paid 14 days before the trip</li>
                <li>
                  • All pament is non-refundable, but transferrable to another
                  participant
                </li>
                <li>
                  • Payment transfer to BCA Digital (Blu) a.n. Stella Valentina
                  no. 0076-4608-4381
                </li>
              </ul>
            </div>
            <div className="mt-8">
              <strong>CP: 0811-833-0500 / 0812-9805-4631</strong>
            </div>
            <div className="mt-8">
              <a href="/projects" className="font-bold underline">
                Click here for more info
              </a>
            </div>
          </div>
          <RegistrationForm />
        </main>
      </div>
    </div>
  )
}
