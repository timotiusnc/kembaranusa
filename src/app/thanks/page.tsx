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
          aria-label="Features for running your books"
          className="relative overflow-hidden pb-16 pt-6 lg:py-20"
        >
          <Container className="relative">
            <div className="max-w-2xl text-center md:mx-auto xl:max-w-none">
              <h2 className="font-display text-3xl tracking-tight sm:text-4xl md:text-5xl">
                ❤️ Terima Kasih ❤️
              </h2>
              <h3 className="mt-2 font-display text-lg tracking-tight sm:text-xl md:text-2xl">
                telah mendaftar menjadi volunteer
              </h3>
            </div>

            <div className="prose mt-6 max-w-2xl md:mx-auto xl:max-w-none">
              <p>Sampai bertemu di Lombok 👋</p>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
