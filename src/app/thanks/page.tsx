import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terima Kasih',
}

export default function Thank() {
  return (
    <>
      <Header />
      <main>
        <section
          id="register"
          aria-label="Thank you page"
          className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-16 lg:py-20"
        >
          <Container className="relative">
            {/* Main Title - Celebratory */}
            <div className="max-w-2xl text-center md:mx-auto xl:max-w-none">
              <h2 className="bg-gradient-to-r from-blue-600 to-red-500 bg-clip-text font-display text-4xl tracking-tight text-transparent sm:text-5xl md:text-6xl">
                🎉 Terima Kasih! 🎉
              </h2>

              <h3 className="mt-4 font-display text-xl tracking-tight text-gray-700 sm:text-2xl md:text-3xl">
                Pendaftaran Anda berhasil!
              </h3>

              <p className="mt-4 text-lg text-gray-600">
                Kami sangat senang Anda bergabung dalam perjalanan bakti sosial
                dan explore <strong>Alor 2026</strong> bersama kami!
              </p>
            </div>

            {/* Next Steps Card */}
            <div className="mx-auto mt-10 max-w-2xl">
              <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-6 shadow-sm">
                <h4 className="mb-4 text-lg font-bold text-blue-900">
                  📋 Langkah Selanjutnya
                </h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">💰</span>
                    <span>
                      Pelunasan 70% dilakukan{' '}
                      <strong>14 hari sebelum keberangkatan</strong>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">📱</span>
                    <span>
                      Follow Instagram{' '}
                      <a
                        href="https://instagram.com/kembara.nusa"
                        target="_blank"
                        rel="noreferrer"
                        className="font-bold text-blue-600 hover:text-blue-800"
                      >
                        @kembara.nusa
                      </a>{' '}
                      untuk update terbaru
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Closing Message */}
            <div className="mt-10 text-center">
              <p className="text-2xl font-semibold text-gray-800">
                Sampai bertemu di Alor! 🌴✨
              </p>
              <p className="mt-2 text-lg text-gray-600">22-26 Juli 2026</p>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                color="blue"
                href="https://instagram.com/kembara.nusa"
                target="_blank"
                rel="noreferrer"
              >
                Follow Instagram
              </Button>
              <Button variant="outline" href="/projects/alor-2026">
                Lihat Detail Trip
              </Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
