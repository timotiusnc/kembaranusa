import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { QuotaAlert } from '@/components/QuotaAlert'
import { type Metadata } from 'next'

import { RegistrationForm } from './registrationForm'
import { InstagramSvg } from '@/components/logo/InstagramSvg'

export const metadata: Metadata = {
  title: 'Daftar Volunteer',
}

export default function Register() {
  const isRegistrationOpen =
    process.env.NEXT_PUBLIC_OPEN_REGISTRATION === undefined ||
    process.env.NEXT_PUBLIC_OPEN_REGISTRATION === 'true'

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
                <span className="text-red-500">Alor</span>
              </h2>
              <h3 className="mt-2 font-display text-lg tracking-tight text-gray-700 sm:text-xl md:text-2xl">
                22 - 26 Juli 2026 (5D4N)
              </h3>
              <QuotaAlert className="mt-4" />
            </div>

            <div className="mt-6">
              <p>
                📍 Lokasi: <strong>Alor, Nusa Tenggara Timur</strong>
              </p>
              <p>
                🗓️ Tanggal: <strong>22 - 26 Juli 2026 (5D4N)</strong>
              </p>
              <p className="mt-4">
                <span className="italic">
                  <strong>✈️ Arrival & Departure</strong> point:
                </span>{' '}
                <a
                  href="https://maps.app.goo.gl/14r6jFjKXpffUyF76"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  <strong>Bandara Mali (ARD), Alor, Nusa Tenggara Timur</strong>
                </a>
              </p>
            </div>

            <div className="mt-6">
              <div>
                💰 <span className="italic">Rate</span>:{' '}
                <strong>Rp 5.650.000 / pax</strong>
              </div>
              <ul>
                <li>• DP 30% (Rp 1.695.000) saat pendaftaran</li>
                <li>
                  • Sisa 70% dilunasi paling lambat 14 hari sebelum hari-H
                </li>
                <li>
                  • Semua pembayaran tidak dapat di-refund, namun dapat
                  dialihkan ke peserta lain
                </li>
                <li>
                  • Transfer ke <strong>BCA 6330751132</strong> a.n.{' '}
                  <strong>Safira Khairina</strong>
                </li>
              </ul>
            </div>
            <div className="mt-8">
              <strong>📞 CP:</strong>
              <ul>
                <li>
                  • Safira{' '}
                  <a href="tel:081298054631" className="underline">
                    081298054631
                  </a>
                </li>
                <li>
                  • Stella{' '}
                  <a href="tel:08118330500" className="underline">
                    08118330500
                  </a>
                </li>
              </ul>
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
              <a href="/projects/alor-2026" className="font-bold underline">
                Klik di sini untuk informasi lebih lanjut
              </a>
            </div>
            {isRegistrationOpen ? (
              <RegistrationForm />
            ) : (
              <RegistrationInPreparation />
            )}
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}

const RegistrationClosed = () => {
  return (
    <div className="mt-8 max-w-2xl md:mx-auto xl:max-w-none">
      <h3 className="mt-2 font-display text-lg tracking-tight text-gray-700 sm:text-xl md:text-2xl">
        Pendaftaran telah ditutup .
        <br />
        Terima kasih untuk antusiasme para volunteer ❤️.
        <br />
        Sampai bertemu di Lombok 👋.
      </h3>
    </div>
  )
}

const RegistrationInPreparation = () => {
  return (
    <div className="mt-8 max-w-2xl md:mx-auto xl:max-w-none">
      <h3 className="mt-2 font-display text-lg tracking-tight text-gray-700 sm:text-xl md:text-2xl">
        Pendaftaran untuk trip Alor 2026 sedang dalam persiapan.
        <br />
        Informasi lebih lanjut akan segera diumumkan.
        <br />
        Terima kasih untuk antusiasme para volunteer ❤️
      </h3>
    </div>
  )
}
