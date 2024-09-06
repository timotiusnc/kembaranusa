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
              <h2 className="font-display text-3xl tracking-tight sm:text-4xl md:text-5xl">
                Registrasi Bakti Sosial + Explore{' '}
                <span className="text-red-400">Sumba</span>
              </h2>
              <h3 className="mt-2 font-display text-lg tracking-tight sm:text-xl md:text-2xl">
                23 - 27 Oktober 2024 (5D4N)
              </h3>
            </div>

            <div className="mt-6">
              <p>
                Location:{' '}
                <strong>
                  Sumba Barat Daya & Sumba Timur, Nusa Tenggara Timur
                </strong>
              </p>
              <p>
                Date: <strong>23 - 27 October 2024 (5D4N)</strong>
              </p>
              <p className="mt-4">
                <strong>Arrival</strong> point:{' '}
                <a
                  href="https://maps.app.goo.gl/iGn3WazRX8XFCHf98"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  <strong>
                    Bandara Lede Kalumbang (TMC) - Tambolaka, Sumba Barat Daya
                    (TMC)
                  </strong>
                </a>
              </p>
              <p>
                <strong>Departure</strong> point:{' '}
                <a
                  href="https://maps.app.goo.gl/9nG6no7p8u2994Fb6"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  <strong>
                    Bandara Umbu Mehang Kunda (WGP) - Waingapu, Sumba Timur
                    (WGP)
                  </strong>
                </a>
              </p>
            </div>

            <div className="mt-8">
              <div>
                Rate: <strong>Rp 5.499.000 / pax</strong>
              </div>
              <ul>
                <li>• DP 30% (Rp 1.650.000) saat pendaftaran</li>
                <li>
                  • Sisa 70% dilunasi paling lambat 14 hari sebelum perjalanan
                </li>
                <li>
                  • Semua pembayaran tidak dapat di-refund, namun dapat
                  dialihkan ke peserta lain
                </li>
                <li>
                  • Transfer ke BCA Digital (Blu) a.n. Stella Valentina no.
                  0076-4608-4381
                </li>
              </ul>
            </div>
            <div className="mt-8">
              <strong>
                CP:{' '}
                <a href="tel:08118330500" className="underline">
                  0811-833-0500
                </a>{' '}
                /{' '}
                <a href="tel:081298054631" className="underline">
                  0812-9805-4631
                </a>
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
              <a href="/projects/sumba-2024" className="font-bold underline">
                Click here for more info
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
