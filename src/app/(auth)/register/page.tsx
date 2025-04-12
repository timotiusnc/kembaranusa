import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { type Metadata } from 'next'

import { RegistrationForm } from './registrationForm'
import { InstagramSvg } from '@/components/logo/InstagramSvg'

export const metadata: Metadata = {
  title: 'Daftar Volunteer',
}

export default function Register() {
  return (
    <>
      <Header />
      <main>
        <section
          id="register"
          aria-label="Features for running your books"
          className="relative overflow-hidden pb-16 pt-6 lg:py-20"
        >
          <Container className="relative">
            <div className="max-w-2xl text-center md:mx-auto xl:max-w-none">
              <h2 className="bg-gradient-to-r from-blue-600 to-red-500 bg-clip-text font-display text-3xl tracking-tight text-transparent sm:text-4xl md:text-5xl">
                Registrasi Bakti Sosial + Explore{' '}
                <span className="text-red-500">Lombok</span>
              </h2>
              <h3 className="mt-2 font-display text-lg tracking-tight text-gray-700 sm:text-xl md:text-2xl">
                16 - 20 Juli 2025 (5D4N)
              </h3>
            </div>

            <div className="mt-6">
              <p>
                📍 Lokasi: <strong>Lombok, Nusa Tenggara Barat</strong>
              </p>
              <p>
                🗓️ Tanggal: <strong>16 - 20 Juli 2025 (5D4N)</strong>
              </p>
              <p className="mt-4">
                <span className="italic">
                  <strong>✈️ Arrival & Departure</strong> point:
                </span>{' '}
                <a
                  href="https://maps.app.goo.gl/iGn3WazRX8XFCHf98"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  <strong>
                    Lombok Intl Airport (Lombok) - Lombok Tengah, Nusa Tenggara
                    Barat
                  </strong>
                </a>
              </p>
            </div>

            <div className="mt-6">
              <div>
                💰 <span className="italic">Rate</span>:{' '}
                <strong>Rp 4.950.000 / pax</strong>
              </div>
              <ul>
                <li>• DP 30% (Rp 1.485.000) saat pendaftaran</li>
                <li>
                  • Sisa 70% dilunasi paling lambat 14 hari sebelum hari-H
                </li>
                <li>
                  • Semua pembayaran tidak dapat di-refund, namun dapat
                  dialihkan ke peserta lain
                </li>
                <li>
                  • Transfer ke BCA Digital (Blu) 0076-4608-4381 a.n. Stella
                  Valentina
                </li>
              </ul>
            </div>
            <div className="mt-8">
              <strong>
                📞 CP:{' '}
                <a href="tel:081298054631" className="underline">
                  0812-9805-4631
                </a>
                /{' '}
                <a href="tel:081917081112" className="underline">
                  0819-1708-1112
                </a>{' '}
              </strong>
            </div>
            <div className="mt-4">
              <a
                href="https://www.instagram.com/kembara.nusa/"
                target="_blank"
                rel="noreferrer"
                className="no-underline"
              >
                <InstagramSvg className="inline-block w-6" /> @kembara.nusa
              </a>
            </div>
            <div className="mt-8">
              <a href="/projects/lombok-2025" className="font-bold underline">
                Klik di sini untuk informasi lebih lanjut
              </a>
            </div>
            <RegistrationForm />
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
