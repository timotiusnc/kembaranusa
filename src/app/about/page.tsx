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
        <section className="relative overflow-hidden pb-16 pt-6 lg:py-20">
          <Container className="relative">
            <div className="max-w-2xl text-center md:mx-auto xl:max-w-none">
              <h2 className="bg-gradient-to-r from-blue-600 to-red-500 bg-clip-text font-display text-3xl tracking-tight text-transparent sm:text-4xl md:text-5xl">
                Tentang Kembara Nusa
              </h2>
              <h3 className="mt-2 font-display text-lg tracking-tight text-gray-700 sm:text-xl md:text-2xl">
                sejak 2018
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

              <h2>Jenis Kegiatan</h2>
              <div className="not-prose grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm">
                  <div className="mb-4 flex justify-center">
                    <svg
                      className="h-16 w-16"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 008 10.172V5L7 4z"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-lg font-bold">Pengobatan gigi</h3>
                  <p className="text-sm text-gray-600">
                    Tindakan pencabutan, penambalan, dan observasi status
                    kesehatan gigi.
                  </p>
                </div>

                <div className="rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm">
                  <div className="mb-4 flex justify-center">
                    <svg
                      className="h-16 w-16"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-lg font-bold">Tindakan preventif</h3>
                  <p className="text-sm text-gray-600">
                    Pemberian <i>fissure sealant</i> dan <i>fluor</i> untuk
                    anak-anak.
                  </p>
                </div>

                <div className="rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm">
                  <div className="mb-4 flex justify-center">
                    <svg
                      className="h-16 w-16"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-lg font-bold">Penyuluhan</h3>
                  <p className="text-sm text-gray-600">
                    Menanamkan kesadaran pentingnya menjaga kesehatan gigi dan
                    mulut untuk meningkatkan kualitas hidup.
                  </p>
                </div>

                <div className="rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm">
                  <div className="mb-4 flex justify-center">
                    <svg
                      className="h-16 w-16"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-lg font-bold italic">Travelling</h3>
                  <p className="text-sm text-gray-600">
                    Mengenalkan keindahan alam dan budaya daerah setempat kepada
                    para relawan.
                  </p>
                </div>
              </div>

              <p>
                Kegiatan Kembara Nusa mencakup pengobatan gigi dan mulut,
                tindakan preventif untuk anak-anak, penyuluhan kesehatan gigi
                dan mulut, serta travelling. Kegiatan kami berlangsung selama
                5-6 hari di tiap-tiap daerah dan dapat diikuti oleh dokter gigi
                maupun volunteer non-medis.
              </p>

              <p>
                Para relawan non-medis dapat membantu dari segi fotografi,
                videografi, dan panitia bakti sosial untuk pendaftaran,
                pemberian obat, sterilisasi, dan perlengkapan. Kami bekerja sama
                dengan PDGI setempat untuk mendapatkan SKP bagi dokter gigi.
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
