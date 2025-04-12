import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { InstagramSvg } from '@/components/logo/InstagramSvg'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bakti Sosial & Explore Lombok 2025',
  description:
    'Kembara Nusa mengadakan bakti sosial pengobatan dan penyuluhan kesehatan gigi dan mulut di Lombok, 16 - 20 Juli 2025.',
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
                <span className="font-bold text-red-500">Lombok</span>
              </h2>

              <h3 className="mt-2 font-display text-lg tracking-tight text-gray-700 sm:text-xl md:text-2xl">
                16 - 20 Juli 2025 (5D4N)
              </h3>

              <div className="prose mt-6 max-w-2xl md:mx-auto xl:max-w-none">
                <p className="lead text-lg text-gray-800">
                  Kembara Nusa mengadakan bakti sosial pengobatan dan penyuluhan
                  kesehatan gigi dan mulut.
                  <br />
                  Bakti sosial ini memberikan sertifikat Satuan Kredit Profesi
                  (SKP) Kemenkes untuk dokter gigi.
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
          href="https://maps.app.goo.gl/jdAmAKAYaKnaCXPK7"
          target="_blank"
          rel="noreferrer"
        >
          <strong>
            Lombok Intl Aiport (LOP) - Lombok Tengah, Nusa Tenggara Barat
          </strong>
        </a>
      </li>
      <li>
        Lokasi Baksos:{' '}
        <a
          href="https://maps.app.goo.gl/V7r2tfbWhEur7z1X6"
          target="_blank"
          rel="noreferrer"
        >
          <strong>Desa Senaru - Kec. Lombok Utara, Nusa Tenggara Barat</strong>
        </a>
      </li>
    </ul>
  )
}

const Rate = () => {
  return (
    <>
      <h5 className="font-bold">Rp 4.950.000</h5>
      <ul>
        <li>DP 30% (Rp 1.485.000) saat pendaftaran</li>
        <li>Sisa 70% dilunasi paling lambat 14 hari sebelum hari-H</li>
        <li>
          Semua pembayaran tidak dapat di-refund, namun dapat dialihkan ke
          peserta lain
        </li>
        <li>
          Transfer ke BCA Digital (Blu) 0076-4608-4381 a.n. Stella Valentina
        </li>
      </ul>
      <p className="font-bold italic">Include:</p>
      <ol>
        <li>Akomodasi 5 hari 4 malam (di hotel bintang 3 / setara)</li>
        <li>Transportasi</li>
        <li>
          Konsumsi (<em>breakfast, lunch, dinner</em>)
        </li>
        <li>Donasi bakti sosial pengobatan gigi</li>
        <li>
          Sertifikat baksos dengan Satuan Kredit Profesi (SKP) Kemenkes (untuk
          dokter gigi)
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
      <p className="font-bold">Hari 1 (Rabu, 23 Okt 2024)</p>
      <ol>
        <li>
          Tiba di{' '}
          <a
            href="https://maps.app.goo.gl/jdAmAKAYaKnaCXPK7"
            target="_blank"
            rel="noreferrer"
          >
            <strong>
              Lombok Intl Airport (LOP) - Lombok Tengah, Nusa Tenggara Barat
            </strong>
          </a>
        </li>
        <li>
          <a
            href="https://maps.app.goo.gl/uXsF2dRXUfroBZoc7"
            target="_blank"
            rel="noreferrer"
          >
            <strong>Tour Desa Sasak Ende</strong>
          </a>
        </li>
        <li>
          <a
            href="https://maps.app.goo.gl/F7pdaPyqqrRQcoM97"
            target="_blank"
            rel="noreferrer"
          >
            <strong>Tour Desa Sukarara</strong>
          </a>
        </li>
        <li>
          <a
            href="https://maps.app.goo.gl/rFvv1roF5Fxe4kiZ7"
            target="_blank"
            rel="noreferrer"
          >
            <strong>Malimbu Hill</strong>
          </a>
        </li>
      </ol>
      <p className="font-bold">Hari 2 (Kamis, 24 Okt 2024)</p>
      <ol>
        <li>
          Bakti sosial di{' '}
          <a
            href="https://maps.app.goo.gl/V7r2tfbWhEur7z1X6"
            target="_blank"
            rel="noreferrer"
          >
            <strong>
              Desa Senaru - Kec. Lombok Utara, Nusa Tenggara Barat
            </strong>
          </a>
        </li>
        <li>
          <a
            href="https://maps.app.goo.gl/GmyuxamSSoPm83yu7"
            target="_blank"
            rel="noreferrer"
          >
            <strong>Air Terjun Tiu Kelep</strong>
          </a>
        </li>
        <li>
          <a
            href="https://maps.app.goo.gl/9ntgtZ5uxSshUk4u5"
            target="_blank"
            rel="noreferrer"
          >
            <strong>Wisata Masjid Kuno Bayan Beleq</strong>
          </a>
        </li>
      </ol>
      <p className="font-bold">Hari 3 (Jumat, 25 Okt 2024)</p>
      <ol>
        <li>
          Bakti sosial di{' '}
          <a
            href="https://maps.app.goo.gl/V7r2tfbWhEur7z1X6"
            target="_blank"
            rel="noreferrer"
          >
            <strong>
              Desa Senaru - Kec. Lombok Utara, Nusa Tenggara Barat
            </strong>
          </a>
        </li>
        <li>
          <a
            href="https://maps.app.goo.gl/jptAJfg5BRKouJkK8"
            target="_blank"
            rel="noreferrer"
          >
            <strong>Wisata Senggigi</strong>
          </a>
        </li>
      </ol>
      <p className="font-bold">Hari 4 (Sabtu, 26 Okt 2024)</p>
      <ol>
        <li>
          <a
            href="https://maps.app.goo.gl/FRqzfPrTY4pR6b1E9"
            target="_blank"
            rel="noreferrer"
          >
            <strong>Wisata dan Menginap di Gili</strong>
          </a>
        </li>
      </ol>
      <p className="font-bold">Hari 5 (Minggu, 27 Okt 2024)</p>
      <ol>
        <li>
          <a
            href="https://maps.app.goo.gl/dpoT6U1jExopbdWp8"
            target="_blank"
            rel="noreferrer"
          >
            <strong>Wisata Kuta Mandalika</strong>
          </a>
        </li>
        <li>
          Berpisah di{' '}
          <a
            href="https://maps.app.goo.gl/jdAmAKAYaKnaCXPK7"
            target="_blank"
            rel="noreferrer"
          >
            <strong>
              Lombok Intl Airport (LOP) - Lombok Tengah, Nusa Tenggara Barat
            </strong>
          </a>
        </li>
      </ol>

      <p>
        <a
          href="https://maps.app.goo.gl/8FQzQLJDWGSkddxE6"
          target="_blank"
          rel="noreferrer"
        >
          <strong>Google Maps list</strong>
        </a>
      </p>

      <p className="text-sm italic">
        *) lokasi wisata dapat berubah menyesuaikan kondisi
      </p>
    </>
  )
}

const Itinerary = () => {
  return (
    <>
      <h4>Rabu, 23 Okt 2024</h4>
      <table>
        <thead>
          <tr>
            <th className="w-20">Jam</th>
            <th>Kegiatan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>09:45</td>
            <td>Sampai di Sumba</td>
          </tr>
          <tr>
            <td>12:00</td>
            <td>Bertemu di meeting point: bandara Tambolaka (TMC)</td>
          </tr>
          <tr>
            <td>14:00</td>
            <td>Check-in di hotel Sinar Tambolaka</td>
          </tr>
          <tr>
            <td>15:00</td>
            <td>Kopi sore: Talasi</td>
          </tr>
          <tr>
            <td>18:00</td>
            <td>Sunset di pantai Mananga Aba</td>
          </tr>
          <tr>
            <td>19:00</td>
            <td>Dinner di Sinar Tambolaka</td>
          </tr>
        </tbody>
      </table>

      <h4>Kamis, 24 Okt 2024</h4>
      <table>
        <thead>
          <tr>
            <th className="w-20">Jam</th>
            <th>Kegiatan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>09:00</td>
            <td>Bakti sosial hari #1: desa Waipaddi</td>
          </tr>
          <tr>
            <td>15:00</td>
            <td>Perjalanan ke danau Waikuri</td>
          </tr>
          <tr>
            <td>16:00</td>
            <td>Mengagumi keindahan danau Waikuri</td>
          </tr>
          <tr>
            <td>19:00</td>
            <td>Makan malam di Dapur Sumba</td>
          </tr>
        </tbody>
      </table>

      <h4>Jumat, 25 Okt 2024</h4>
      <table>
        <thead>
          <tr>
            <th className="w-20">Jam</th>
            <th>Kegiatan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>09:00</td>
            <td>
              Bakti sosial hari #2: Program Pengembangan Anak (PPA) Talitakum
              Gereja Kristen Sumba (GKS) Mata - Tambolaka, Sumba Barat Daya
            </td>
          </tr>
          <tr>
            <td>15:00</td>
            <td>Perjalanan ke pantai Mandorak</td>
          </tr>
          <tr>
            <td>16:00</td>
            <td>Berkontemplasi di pantai Mandorak</td>
          </tr>
          <tr>
            <td>19:00</td>
            <td>Makan malam di Gula Garam</td>
          </tr>
        </tbody>
      </table>

      <h4>Sabtu, 26 Okt 2024</h4>
      <table>
        <thead>
          <tr>
            <th className="w-20">Jam</th>
            <th>Kegiatan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>06:30</td>
            <td>Check-out</td>
          </tr>
          <tr>
            <td>07:00</td>
            <td>Perjalanan ke desa adat Prai Ijing</td>
          </tr>
          <tr>
            <td>08:00</td>
            <td>Mengagumi budaya Marapu di desa adat Prai Ijing </td>
          </tr>
          <tr>
            <td>09:00</td>
            <td>Perjalanan ke bukit Wairinding</td>
          </tr>
          <tr>
            <td>11:30</td>
            <td>Refleksi diri di bukit Wairinding</td>
          </tr>
          <tr>
            <td>13:00</td>
            <td>Makan siang di Casa Kandara</td>
          </tr>
          <tr>
            <td>14:00</td>
            <td>Check-in di Casa Kandara</td>
          </tr>
          <tr>
            <td>15:30</td>
            <td>Perjalanan ke bukit Hiliwuku</td>
          </tr>
          <tr>
            <td>16:30</td>
            <td>Menikmati keindahan alam bukit Hiliwuku</td>
          </tr>
          <tr>
            <td>17:00</td>
            <td>Menikmati keindahan alam bukit Merdeka</td>
          </tr>
          <tr>
            <td>16:30</td>
            <td>Menikmati keindahan alam bukit Piarakuku</td>
          </tr>
          <tr>
            <td>16:30</td>
            <td>Makan malam di Local Three cafe & eatery</td>
          </tr>
        </tbody>
      </table>

      <h4>Minggu, 27 Okt 2024</h4>
      <table>
        <thead>
          <tr>
            <th className="w-20">Jam</th>
            <th>Kegiatan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>06:35</td>
            <td>Kembali ke Jakarta (via Waingapu)</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

const Flight = () => {
  return (
    <>
      <h3>Berangkat</h3>
      <h4>
        <a
          href="https://en.tiket.com/pesawat/search?d=CGK&a=LOP&date=2025-07-16&adult=1&child=0&infant=0&class=economy&dType=AIRPORT&aType=AIRPORT&dLabel=Jakarta&aLabel=Praya&type=depart&flexiFare=true"
          target="_blank"
          rel="noreferrer"
        >
          Jakarta (CGK) - Lombok Intl Airport (LOP) – 16 Jul 2025
        </a>
        <br />
      </h4>
      <table>
        <thead>
          <tr>
            <th>Rute</th>
            <th>Maskapai</th>
            <th>Kode</th>
            <th>Berangkat</th>
            <th>Tiba</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>CGK - LOP</td>
            <td>Super Air Jet</td>
            <td>IU-762</td>
            <td>06:00</td>
            <td>08:55</td>
          </tr>
          <tr>
            <td>CGK - LOP</td>
            <td>Lion Air</td>
            <td>JT-656</td>
            <td>07:00</td>
            <td>09:55</td>
          </tr>
          <tr>
            <td>CGK - LOP</td>
            <td>Citilink</td>
            <td>QG-640</td>
            <td>08:40</td>
            <td>11:40</td>
          </tr>
          <tr>
            <td>CGK - LOP</td>
            <td>Pelita Air</td>
            <td>IP-140</td>
            <td>06:20</td>
            <td>09:15</td>
          </tr>
          <tr>
            <td>CGK - LOP</td>
            <td>Batik Air</td>
            <td>ID-6658</td>
            <td>08:50</td>
            <td>11:45</td>
          </tr>
          <tr>
            <td>CGK - LOP</td>
            <td>Garuda Indonesia</td>
            <td>GA-432</td>
            <td>07:30</td>
            <td>10:30</td>
          </tr>
        </tbody>
      </table>

      <h3>Kembali</h3>
      <h4>
        <a
          href="https://en.tiket.com/pesawat/search?d=LOP&a=CGK&date=2025-07-20&adult=1&child=0&infant=0&class=economy&dType=AIRPORT&aType=AIRPORT&dLabel=Praya&aLabel=Jakarta&type=depart&flexiFare=true"
          target="_blank"
          rel="noreferrer"
        >
          Lombok Intl Airport (LOP) - Jakarta (CGK) – 20 Jul 2025
        </a>
      </h4>
      <table>
        <thead>
          <tr>
            <th>Rute</th>
            <th>Maskapai</th>
            <th>Kode</th>
            <th>Berangkat</th>
            <th>Tiba</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>LOP - CGK</td>
            <td>Super Air Jet</td>
            <td>IU-769</td>
            <td>06:00</td>
            <td>07:00</td>
          </tr>
          <tr>
            <td>LOP - CGK</td>
            <td>Lion Air</td>
            <td>JT-647</td>
            <td>10:40</td>
            <td>11:40</td>
          </tr>
          <tr>
            <td>LOP - CGK</td>
            <td>Citilink</td>
            <td>QG-641</td>
            <td>12:10</td>
            <td>13:10</td>
          </tr>
          <tr>
            <td>LOP - CGK</td>
            <td>Pelita Air</td>
            <td>IP-141</td>
            <td>10:20</td>
            <td>10:55</td>
          </tr>
          <tr>
            <td>LOP - CGK</td>
            <td>Batik Air</td>
            <td>ID-6659</td>
            <td>12:25</td>
            <td>13:25</td>
          </tr>
          <tr>
            <td>LOP - CGK</td>
            <td>Garuda Indonesia</td>
            <td>GA-435</td>
            <td>17:50</td>
            <td>18:50</td>
          </tr>
        </tbody>
      </table>
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
        <p>Ya, baksos ini mendapat SKP Kemenkes khusus dokter gigi.</p>
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
          Maaf 🙏 untuk saat ini SKP Kemenkes hanya untuk anggota Persatuan
          Dokter Gigi Indonesia (PDGI). Namun dokter umum tetap bisa mengikuti
          baksos ini untuk membantu pemeriksaan kesehatan umum.
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
          Bisa, namun hanya berlaku untuk dokter gigi dari PDGI cabang Lombok /
          NTB. Untuk pendaftaran baksos saja harap menghubungi nomor contact
          person (CP) yang tertera.
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
          Acha <a href="tel:081917081112">081917081112</a>
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
