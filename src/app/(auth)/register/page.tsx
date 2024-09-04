import Link from 'next/link'

import { Logo } from '@/components/Logo'
import { type Metadata } from 'next'

import { RegistrationForm } from './registrationForm'

export const metadata: Metadata = {
  title: 'Sign Up',
}

export default function Register() {
  return (
    <div className="relative flex min-h-full shrink-0 justify-center md:px-12 lg:px-0">
      <div className="relative z-10 flex flex-1 flex-col bg-white px-4 py-10 shadow-2xl sm:justify-center md:flex-none md:px-28">
        <main className="mx-auto w-full max-w-4xl sm:px-4 md:px-0">
          <div className="flex justify-center">
            <Link href="/" aria-label="Home">
              <Logo className="h-24 w-auto" />
            </Link>
          </div>
          <div>
            <p className="mt-8 italic text-gray-900">
              <strong>Yayasan Kembara Nusa</strong> bersama dengan{' '}
              <strong>PDGI Cabang Sumba</strong> mengadakan{' '}
              <strong>
                Bakti Sosial Penyuluhan dan Pengobatan Gigi dan Mulut
              </strong>{' '}
              untuk masyarakat Sumba yang akan dilaksanakan pada:
            </p>
            <div className="mt-8">
              <strong>Waktu dan tempat:</strong>
              <strong>
                <ol>
                  <li>
                    Kamis, 24 Oktober 2024:{' '}
                    <a
                      href="https://maps.app.goo.gl/zgyXZE5VfM2ACngEA"
                      target="_blank"
                      rel="noopener"
                      className="underline"
                    >
                      Desa Waipaddi, Kec. Kodi Bangedo, Sumba Barat Daya, NTT
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://maps.app.goo.gl/pRpejXRBRwRpBUN38"
                      target="_blank"
                      rel="noopener"
                      className="underline"
                    >
                      Jumat, 25 Oktober 2024: Yayasan Cahaya Kasih Sumba, Kota
                      Tambolaka, Sumba Barat Daya, NTT
                    </a>
                  </li>
                </ol>
              </strong>
              <strong>Pukul: 08:00 - 16:00 WITA</strong>
            </div>
            <div className="mt-8">
              <div>
                Donasi kegiatan bakti sosial: <strong>Rp 400.000 / pax</strong>
              </div>
              <ul>
                <li>• Baksos ber-SKP Kemenkes</li>
                <li>• Termasuk makan siang</li>
                <li>• Wajib mengikuti 2 hari baksos</li>
                <li>
                  • Transfer ke BCA Digital (Blu) a.n. Stella Valentina no.
                  0076-4608-4381
                </li>
              </ul>
            </div>
            <div className="mt-8">
              <strong>CP: 0811-833-0500 / 0812-9805-4631</strong>
            </div>
            <div className="mt-8">
              <a href="/projects" className="font-bold underline">
                Klik di sini untuk informasi lebih lanjut
              </a>
            </div>
          </div>
          <RegistrationForm />
        </main>
      </div>
    </div>
  )
}
