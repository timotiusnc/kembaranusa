import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { InstagramSvg } from '@/components/logo/InstagramSvg'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tentang Kami',
}

export default function About() {
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
                Tentang Kembara Nusa
              </h2>
              <h3 className="mt-2 font-display text-lg tracking-tight sm:text-xl md:text-2xl">
                est. 2018
              </h3>
            </div>

            <div className="prose mt-6 max-w-2xl md:mx-auto xl:max-w-none">
              <h2>Latar Belakang</h2>
              <p>
                Yayasan ini berdiri karena keprihatinan kami pada kesehatan gigi
                dan mulut di wilayah pelosok Indonesia khususnya Indonesia Timur
                yang jumlah dokter giginya sangat minim dibandingkan rasio
                penduduk setempat. Ditambah kurangnya pengetahuan tentang
                kesehatan gigi dan mulut, kurangnya akses untuk memperoleh
                pengobatan, sehingga menyebabkan tingginya prevalensi penyakit
                gigi dan mulut yang tidak tertangani dengan baik.
              </p>
              <p>
                Melihat potensi kekayaan alam dan budaya di wilayah Indonesia
                Timur yang tidak berbanding lurus dengan perkembangan sumber
                daya manusianya, maka kami yang memiliki latar belakang profesi
                dokter gigi ingin meningkatkan kualitas hidup masyarakat dari
                segi kesehatan gigi dan mulut sekaligus mengenalkan keindahan
                alam dan budaya daerah setempat kepada para relawan dan dokter
                gigi.
              </p>
              <h2>Visi</h2>
              <p>
                Seluruh masyarakat Indonesia hingga pelosok daerah memiliki
                kesadaran akan pentingnya kesehatan gigi dan mulut, mampu
                menjaga kesehatan giginya secara mandiri, dan mendapat akses
                pengobatan gigi dengan mudah.
              </p>
              <h2>Misi</h2>
              <p>
                Memberikan pengobatan gigi untuk masyarakat yang memiliki
                tingkat kesehatan gigi dan mulutnya rendah, terutama yang
                kesulitan akses terhadap tenaga medis.
              </p>
              <p>
                Memberikan tindakan preventif dan edukasi pentingnya menjaga
                kesehatan gigi dan mulut.
              </p>
              <h2>Contact Us</h2>
              <a
                href="https://www.instagram.com/kembara.nusa/"
                target="_blank"
                rel="noreferrer"
                className="no-underline"
              >
                <InstagramSvg className="inline w-6" /> @kembara.nusa
              </a>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
