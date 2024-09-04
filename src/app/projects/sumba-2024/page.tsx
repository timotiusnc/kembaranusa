import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { InstagramSvg } from '@/components/logo/InstagramSvg'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bakti Sosial & Explore Sumba 2024',
  description:
    'Kembara Nusa mengadakan bakti sosial pengobatan dan penyuluhan kesehatan gigi dan mulut di Sumba, 23 - 27 Oktober 2024.',
}

export default function Projects() {
  return (
    <>
      <Header />
      <main>
        <section
          id="project"
          aria-label="Features for running your books"
          className="relative overflow-hidden pb-16 pt-6 lg:py-20"
        >
          <Container className="relative">
            <div className="max-w-2xl text-center md:mx-auto xl:max-w-none">
              <h2 className="font-display text-3xl tracking-tight sm:text-4xl md:text-5xl">
                Bakti Sosial + Explore{' '}
                <span className="text-red-400">Sumba</span>
              </h2>
              <h3 className="mt-2 font-display text-lg tracking-tight sm:text-xl md:text-2xl">
                23 - 27 Oktober 2024 (5D4N)
              </h3>
            </div>

            <div className="prose mt-6 max-w-2xl md:mx-auto xl:max-w-none">
              <p className="lead">
                Kembara Nusa mengadakan bakti sosial pengobatan dan penyuluhan
                kesehatan gigi dan mulut. Bakti sosial ini memberikan sertifikat
                Satuan Kredit Profesi (SKP) Kemenkes untuk dokter gigi.
              </p>

              <div className="flex justify-center">
                <Button color="blue" href="/register">
                  Daftar Sekarang
                </Button>
              </div>

              <h2 id="lokasi">
                <a href="#lokasi">Lokasi</a>
              </h2>
              <Location />

              <h2 id="flight">
                <a href="#flight">Opsi Penerbangan</a>
              </h2>
              <Flight />

              <h2 id="faq">
                <a href="#faq">Frequently Asked Questions (FAQs)</a>
              </h2>
              <Faqs />

              <h2 id="contact">
                <a href="#contact">Contact Persons (CPs) </a>
              </h2>
              <Contact />

              <div className="flex justify-center">
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
    <>
      <p>
        Lokasi Baksos #1:{' '}
        <strong>Desa Waipaddi, kecamatan Kodi Bangedo, Sumba Barat Daya</strong>{' '}
        -{' '}
        <a
          href="https://maps.app.goo.gl/zgyXZE5VfM2ACngEA"
          target="_blank"
          rel="noreferrer"
        >
          Peta
        </a>
      </p>
      <p>
        Lokasi Baksos #2:{' '}
        <strong>
          Pusat Pengembangan Anak (PPA) Yayasan Cahaya Kasih Sumba
        </strong>{' '}
        -{' '}
        <a
          href="https://maps.app.goo.gl/pRpejXRBRwRpBUN38"
          target="_blank"
          rel="noreferrer"
        >
          Peta
        </a>
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
              Bakti sosial hari #2: Program Pengembangan Anak (PPA) Cahaya Kasih
              Sumba
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
          href="https://en.tiket.com/pesawat/search?d=CGK&a=TMC&date=2024-10-23&adult=1&child=0&infant=0&class=economy&dType=AIRPORT&aType=AIRPORT&dLabel=Jakarta&aLabel=Tambolaka&type=depart&flexiFare=true"
          target="_blank"
          rel="noreferrer"
        >
          Jakarta (CGK) - Tambolaka, Waikabubak (TMC) – 23 Oct 2024
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
            <td>CGK - DPS</td>
            <td>Super Air Jet</td>
            <td>IU-756</td>
            <td>06:30</td>
            <td>09:20</td>
          </tr>
          <tr>
            <td>DPS-TMC</td>
            <td>Wings Air</td>
            <td>IW-1832</td>
            <td>10:35</td>
            <td>12:00</td>
          </tr>
        </tbody>
      </table>

      <h3>Kembali</h3>
      <h4>
        <a
          href="https://en.tiket.com/pesawat/search?d=WGP&a=CGK&date=2024-10-27&adult=1&child=0&infant=0&class=economy&dType=AIRPORT&aType=AIRPORT&dLabel=Waingapu&aLabel=Jakarta&type=depart&flexiFare=true"
          target="_blank"
          rel="noreferrer"
        >
          Umbu Mehang Kunda / Mau Hau, Waingapu (WGP) - Jakarta (CGK) – 27 Oct
          2024
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
            <td>WGP - DPS</td>
            <td>Wings Air</td>
            <td>IW-1885</td>
            <td>06:35</td>
            <td>08:15</td>
          </tr>
          <tr>
            <td>DPS-CGK</td>
            <td>Super Air Jet</td>
            <td>IU-751</td>
            <td>09:00</td>
            <td>09:45</td>
          </tr>
        </tbody>
      </table>
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
          Bisa, namun hanya berlaku untuk dokter gigi dari PDGI cabang Sumba /
          NTT. Untuk pendaftaran baksos saja harap menghubungi nomor contact
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
          <a href="tel:08118330500">08118330500</a>
        </li>
        <li>
          <a href="tel:081298054631">081298054631</a>
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
