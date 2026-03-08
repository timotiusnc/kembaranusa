import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { InstagramSvg } from '@/components/logo/InstagramSvg'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bakti Sosial & Explore Alor 2026',
  description:
    'Kembara Nusa (bekerja sama dengan Gigi ID dan Melangkiki Committee) mengadakan bakti sosial pengobatan dan penyuluhan kesehatan gigi dan mulut di Alor, NTT.',
}

export default function Projects() {
  return (
    <>
      <Header />
      <main>
        <section
          id="project"
          className="relative overflow-hidden bg-gradient-to-b from-white to-blue-50 py-16"
        >
          <Container className="relative">
            <div className="max-w-2xl text-center md:mx-auto xl:max-w-none">
              <h2 className="bg-gradient-to-r from-blue-600 to-red-500 bg-clip-text font-display text-3xl tracking-tight text-transparent sm:text-4xl md:text-5xl">
                Bakti Sosial + Explore{' '}
                <span className="font-bold text-red-500">Alor</span>
              </h2>

              <h3 className="mt-2 font-display text-lg tracking-tight text-gray-700 sm:text-xl md:text-2xl">
                Juli 2026 (5D4N)
              </h3>

              <div className="prose mt-6 max-w-2xl md:mx-auto xl:max-w-none">
                <p className="lead text-lg text-gray-800">
                  Bakti sosial pengobatan dan penyuluhan kesehatan gigi & mulut
                  bersama <b>Kembara Nusa</b>,{' '}
                  <a href="https://gigi.id" target="_blank" rel="noreferrer">
                    <b>Gigi ID</b>
                  </a>{' '}
                  , dan <b>Melangkiki Committee</b>.
                  <br />
                  Bakti sosial ini memberikan sertifikat Satuan Kredit Profesi
                  (SKP) Kemenkes untuk semua tenaga medis.
                </p>

                <div className="mt-8 flex justify-center">
                  <Button color="blue" href="/register" className="action-btn">
                    Daftar Sekarang
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section id="lokasi" className="relative overflow-hidden py-12">
          <Container className="relative">
            <div className="prose max-w-2xl md:mx-auto xl:max-w-none">
              <h2 className="section-h2">
                📍{' '}
                <a href="#lokasi" className="section-href">
                  Lokasi
                </a>
              </h2>
              <Location />
            </div>
          </Container>
        </section>

        <section
          id="flight"
          className="relative overflow-hidden bg-gray-100 py-8"
        >
          <Container className="relative">
            <div className="prose max-w-2xl md:mx-auto xl:max-w-none">
              <h2 className="section-h2">
                ✈️{' '}
                <a href="#flight" className="section-href">
                  Opsi Penerbangan
                </a>
              </h2>
              <Flight />
            </div>
          </Container>
        </section>

        <section id="rate" className="relative overflow-hidden py-8">
          <Container className="relative">
            <div className="prose max-w-2xl md:mx-auto xl:max-w-none">
              <h2 className="section-h2">
                💰{' '}
                <a href="#rate" className="section-href italic">
                  Rate
                </a>
              </h2>
              <Rate />
            </div>
          </Container>
        </section>

        <section
          id="itinerary"
          className="relative overflow-hidden bg-gray-100 py-8"
        >
          <Container className="relative">
            <div className="prose max-w-2xl md:mx-auto xl:max-w-none">
              <h2 className="section-h2">
                🗓️{' '}
                <a href="#itinerary" className="section-href italic">
                  Itinerary
                </a>
              </h2>
              <ItineraryShort />
            </div>
          </Container>
        </section>

        <section id="to-bring-list" className="relative overflow-hidden py-8">
          <Container className="relative">
            <div className="prose max-w-2xl md:mx-auto xl:max-w-none">
              <h2 className="section-h2">
                🎒{' '}
                <a href="#to-bring-list" className="section-href italic">
                  To Bring List
                </a>
              </h2>
              <ToBringList />
            </div>
          </Container>
        </section>

        <section id="faq" className="relative overflow-hidden bg-gray-100 py-8">
          <Container className="relative">
            <div className="prose max-w-2xl md:mx-auto xl:max-w-none">
              <h2 className="section-h2">
                ❓{' '}
                <a href="#faq" className="section-href italic">
                  Frequently Asked Questions (FAQs)
                </a>
              </h2>
              <Faqs />
            </div>
          </Container>
        </section>

        <section id="contact" className="relative overflow-hidden py-8">
          <Container className="relative">
            <div className="prose max-w-2xl md:mx-auto xl:max-w-none">
              <h2 id="contact" className="section-h2">
                📞{' '}
                <a href="#contact" className="section-href">
                  Kontak
                </a>
              </h2>
              <Contact />

              <div className="mt-6 flex justify-center">
                <Button color="blue" href="/register">
                  Daftar Sekarang
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}

const Location = () => {
  return (
    <ul>
      <li>
        Meeting & Departure Point:{' '}
        <a
          href="https://maps.app.goo.gl/14r6jFjKXpffUyF76"
          target="_blank"
          rel="noreferrer"
        >
          <strong>Bandara Mali (ARD), Alor, Nusa Tenggara Timur</strong>
        </a>
      </li>
      <li>
        Lokasi Baksos #1:{' '}
        <a
          href="https://maps.app.goo.gl/8P6etWFJHxfzCn4u7"
          target="_blank"
          rel="noreferrer"
        >
          <strong>Desa Kokar, Kecamatan Alor Barat Laut</strong>
        </a>
      </li>
      <li>
        Lokasi Baksos #2:{' '}
        <a
          href="https://maps.app.goo.gl/Z8SibUWj41asVtTc7"
          target="_blank"
          rel="noreferrer"
        >
          <strong>Posyandu Lipa B, Kecamatan Teluk Mutiara</strong>
        </a>
      </li>
    </ul>
  )
}

const Rate = () => {
  return (
    <>
      <h5 className="font-bold">TBA</h5>
      <p className="italic text-gray-600">
        Informasi biaya dan detail pembayaran akan segera diumumkan.
      </p>

      <p className="font-bold italic">Include:</p>
      <ol>
        <li>Akomodasi 5 hari 4 malam</li>
        <li>Transportasi</li>
        <li>
          Konsumsi (<em>breakfast, lunch, dinner</em>)
        </li>
        <li>Donasi bakti sosial pengobatan gigi</li>
        <li>
          Sertifikat baksos dengan Satuan Kredit Profesi (SKP) Kemenkes (untuk
          semua tenaga medis)
        </li>
        <li>Dokumentasi</li>
        <li>
          <span className="italic">Local guide</span>
        </li>
        <li>Tiket masuk tempat wisata</li>
      </ol>

      <p className="font-bold italic">Exclude:</p>
      <ol>
        <li>Tiket pesawat</li>
        <li>Kebutuhan pribadi</li>
      </ol>
    </>
  )
}

const ItineraryShort = () => {
  return (
    <>
      <div className="space-y-4">
        <div className="rounded-lg bg-white p-4 shadow-sm">
          <h4 className="mb-2 font-bold text-blue-600">Hari 1:</h4>
          <ul className="list-disc pl-5">
            <li>
              Tiba di{' '}
              <a
                href="https://maps.app.goo.gl/14r6jFjKXpffUyF76"
                target="_blank"
                rel="noreferrer"
              >
                <strong>Bandara Mali (ARD), Alor, Nusa Tenggara Timur</strong>
              </a>
            </li>

            <li>
              Wisata{' '}
              <a
                href="https://maps.app.goo.gl/RjZs3NLGe9ckEoym6"
                target="_blank"
                rel="noreferrer"
              >
                <strong>Desa Takpala</strong>
              </a>
            </li>
            <li>
              Wisata{' '}
              <a
                href="https://maps.app.goo.gl/grV975jd6U4dysb89"
                target="_blank"
                rel="noreferrer"
              >
                <strong>Sunset Batu Putih</strong>
              </a>
            </li>
          </ul>
        </div>

        <div className="rounded-lg bg-white p-4 shadow-sm">
          <h4 className="mb-2 font-bold text-blue-600">Hari 2:</h4>
          <ul className="list-disc pl-5">
            <li>
              Bakti sosial di{' '}
              <a
                href="https://maps.app.goo.gl/8P6etWFJHxfzCn4u7"
                target="_blank"
                rel="noreferrer"
              >
                <strong>Desa Kokar, Kecamatan Alor Barat Laut</strong>
              </a>
            </li>
            <li>
              Wisata{' '}
              <a
                href="https://maps.app.goo.gl/anuz8ThiSrAwjdvL7"
                target="_blank"
                rel="noreferrer"
              >
                <strong>Kabola</strong>
              </a>
            </li>
            <li>
              Wisata{' '}
              <a
                href="https://maps.app.goo.gl/vxDm5kes1LkEnWS9A"
                target="_blank"
                rel="noreferrer"
              >
                <strong>Al-Quran Tertua di Alor Besar</strong>
              </a>
            </li>
            <li>
              Wisata{' '}
              <a
                href="https://maps.app.goo.gl/846HFRhgZPyMD4iq8"
                target="_blank"
                rel="noreferrer"
              >
                <strong>Hulnani</strong>
              </a>
            </li>
            <li>
              Wisata{' '}
              <a
                href="https://maps.app.goo.gl/m3ZSmqGKVysRioW59"
                target="_blank"
                rel="noreferrer"
              >
                <strong>Sunset Tongke Lima</strong>
              </a>
            </li>
          </ul>
        </div>

        <div className="rounded-lg bg-white p-4 shadow-sm">
          <h4 className="mb-2 font-bold text-blue-600">Hari 3:</h4>
          <ul className="list-disc pl-5">
            <li>
              Bakti sosial di{' '}
              <a
                href="https://maps.app.goo.gl/Z8SibUWj41asVtTc7"
                target="_blank"
                rel="noreferrer"
              >
                <strong>Posyandu Lipa B, Kecamatan Teluk Mutiara</strong>
              </a>
            </li>
            <li>
              Wisata{' '}
              <a
                href="https://maps.app.goo.gl/PMm6Fc7mV3Xg8Dhq6"
                target="_blank"
                rel="noreferrer"
              >
                <strong>Pantai Mali</strong>
              </a>
            </li>
            <li>
              Trip{' '}
              <a
                href="https://maps.app.goo.gl/2yWTVBt1XtMxU9qw8"
                target="_blank"
                rel="noreferrer"
              >
                <strong>Dugong (Mawardi)</strong>
              </a>
            </li>
          </ul>
        </div>

        <div className="rounded-lg bg-white p-4 shadow-sm">
          <h4 className="mb-2 font-bold text-blue-600">Hari 4:</h4>
          <ul className="list-disc pl-5">
            <li>
              <a
                href="https://maps.app.goo.gl/hoAmQYZFVqLt4V2w7"
                target="_blank"
                rel="noreferrer"
              >
                <strong>Diving / Snorkling</strong>
              </a>
            </li>
            <li>Wisata Kain Tenun di Ternate / Sopi Pura</li>
            <li>
              Wisata{' '}
              <a
                href="https://maps.app.goo.gl/hoAmQYZFVqLt4V2w7"
                target="_blank"
                rel="noreferrer"
              >
                <strong>Kepa / Alor Kecil</strong>
              </a>
            </li>
          </ul>
        </div>

        <div className="rounded-lg bg-white p-4 shadow-sm">
          <h4 className="mb-2 font-bold text-blue-600">Hari 5:</h4>
          <ul className="list-disc pl-5">
            <li>
              Berpisah di{' '}
              <a
                href="https://maps.app.goo.gl/14r6jFjKXpffUyF76"
                target="_blank"
                rel="noreferrer"
              >
                <strong>Bandara Mali (ARD), Alor, Nusa Tenggara Timur</strong>
              </a>
            </li>
          </ul>
        </div>

        <p className="mt-4 text-sm italic text-gray-500">
          *Lokasi wisata dapat berubah menyesuaikan kondisi
        </p>
      </div>
    </>
  )
}

const Flight = () => {
  return (
    <>
      <p className="italic text-gray-600">
        Informasi opsi penerbangan akan segera diumumkan.
      </p>
    </>
  )
}

const ToBringList = () => {
  return (
    <>
      <h4>Dokter Gigi dan Dokter Umum</h4>
      <ol>
        <li>Sneli (jas dokter lengan panjang / pendek)</li>
        <li>Scrub (warna bebas)</li>
      </ol>

      <h4>Umum</h4>
      <ol>
        <li>Sepatu / sandal gunung tahan air</li>
        <ul>
          <li>Agar nyaman saat di pantai / air terjun</li>
        </ul>
        <li>
          <em>Sunglasses</em>
        </li>
        <li>
          <em>Sunblock</em>
        </li>
        <li>Topi</li>
        <li>Celana panjang bahan / jeans</li>
        <li>Obat-obatan pribadi</li>
        <li>Uang tunai</li>
        <li>
          <em>Power bank</em>
        </li>
      </ol>
    </>
  )
}

const Faqs = () => {
  return (
    <ol>
      <li>
        <p className="italic">
          <strong>
            Apakah baksos ini mendapat Satuan Kredit Profesi (SKP) Kemenkes?
          </strong>
        </p>
        <p>
          Ya, baksos ini mendapat SKP Kemenkes untuk semua tenaga medis (dokter
          gigi, dokter umum, perawat).
        </p>
      </li>

      <li>
        <p className="italic">
          <strong>Saya bukan dokter, apakah boleh ikut mendaftar?</strong>
        </p>
        <p>
          Trip ini terbuka untuk relawan medis dan non-medis. Untuk relawan
          non-medis juga dapat membantu bakti sosial seperti di bagian
          pendaftaran, mengatur flow pasien, dan menyiapkan obat-obatan.
        </p>
      </li>
      <li>
        <p className="italic">
          <strong>
            Untuk dokter umum apakah bisa mendaftar dan mendapat SKP juga?
          </strong>
        </p>
        <p>
          Semua tenaga medis (dokter gigi, dokter umum, perawat) mendapatkan SKP
          Kemenkes. Dokter umum dan perawat bisa mengikuti baksos ini untuk
          membantu pemeriksaan kesehatan umum.
        </p>
      </li>
      <li>
        <p className="italic">
          <strong>
            Saya ingin mengikuti baksos saja tanpa ikut jalan-jalan, apakah
            bisa?
          </strong>
        </p>
        <p>
          Bisa, untuk pendaftaran baksos saja harap menghubungi nomor{' '}
          <em>contact person</em> (CP) yang tertera.
        </p>
      </li>
    </ol>
  )
}

const Contact = () => {
  return (
    <>
      <ul>
        <li>
          Safira <a href="tel:081298054631">081298054631</a>
        </li>
        <li>
          Stella <a href="tel:08118330500">08118330500</a>
        </li>
      </ul>
      <a
        href="https://www.instagram.com/kembara.nusa/"
        target="_blank"
        rel="noreferrer"
        className="no-underline"
      >
        <InstagramSvg className="inline-block w-6" /> @kembara.nusa
      </a>
    </>
  )
}
