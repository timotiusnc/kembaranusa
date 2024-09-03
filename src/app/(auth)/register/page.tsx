import Link from 'next/link'

import { Button } from '@/components/Button'
import { TextField, formClasses } from '@/components/Fields'
import { Logo } from '@/components/Logo'
import { type Metadata } from 'next'
import { ImageUploadField } from '@/components/ImageUpload'
import clsx from 'clsx'

export const metadata: Metadata = {
  title: 'Sign Up',
}

const sexs = [
  { id: 'male', title: 'Laki-laki' },
  { id: 'female', title: 'Perempuan' },
]

const volunteers = [
  { id: 'dentist', title: 'Dokter gigi' },
  { id: 'general-practitioner', title: 'Dokter umum' },
  { id: 'non-medic', title: 'Non-medis' },
]

const sizes = [
  { id: 'xs', title: 'XS' },
  { id: 's', title: 'S' },
  { id: 'm', title: 'M' },
  { id: 'l', title: 'L' },
  { id: 'xl', title: 'XL' },
  { id: 'xxl', title: 'XXL' },
]

const RedStar = () => <span className="text-red-500">*</span>

export default function Register() {
  return (
    <div className="relative flex min-h-full shrink-0 justify-center md:px-12 lg:px-0">
      <div className="relative z-10 flex flex-1 flex-col bg-white px-4 py-10 shadow-2xl sm:justify-center md:flex-none md:px-28">
        <main className="mx-auto w-full max-w-5xl sm:px-4 md:px-0">
          <div className="flex">
            <Link href="/" aria-label="Home">
              <Logo className="h-10 w-auto" />
            </Link>
          </div>
          <h2 className="mt-20 text-lg font-semibold text-gray-900">
            Get started for free
          </h2>
          <p className="mt-2 text-sm text-gray-700">
            Already registered?{' '}
            <Link
              href="/login"
              className="font-medium text-blue-600 hover:underline"
            >
              Sign in
            </Link>{' '}
            to your account.
          </p>
          <form
            action="#"
            className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2"
          >
            <TextField
              className="col-span-full"
              label="Email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="Your email address"
            />
            <TextField
              label="Nama Lengkap (beserta gelar)"
              name="full_name"
              type="text"
              autoComplete="full-name"
              required
            />
            <TextField
              label="Nama Panggilan"
              name="nick_name"
              type="text"
              required
            />

            <TextField
              className="col-span-full"
              label="Nomor HP (WhatsApp)"
              name="phone"
              type="number"
              required
            />

            <fieldset>
              <legend className="mb-3 block text-sm font-medium text-gray-700">
                Jenis Kelamin <RedStar />
              </legend>
              <div className="space-y-6">
                {sexs.map((sex) => (
                  <div key={sex.id} className="flex items-center">
                    <input
                      id={sex.id}
                      name="sex"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      required
                    />
                    <label
                      htmlFor={sex.id}
                      className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                    >
                      {sex.title}
                    </label>
                  </div>
                ))}
              </div>
            </fieldset>

            <div>
              <label htmlFor="date-of-birth">Tanggal Lahir</label> <RedStar />
              <br />
              <input id="date-of-birth" type="date" required />
            </div>

            <TextField
              className="col-span-full"
              label="Pekerjaan"
              name="job"
              type="text"
              required
            />

            <fieldset>
              <legend className="mb-3 block text-sm font-medium text-gray-700">
                Volunteer <RedStar />
              </legend>
              <div className="space-y-6">
                {volunteers.map((volunteer) => (
                  <div key={volunteer.id} className="flex items-center">
                    <input
                      id={volunteer.id}
                      name="volunteer"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      required
                    />
                    <label
                      htmlFor={volunteer.id}
                      className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                    >
                      {volunteer.title}
                    </label>
                  </div>
                ))}
              </div>
            </fieldset>

            <TextField
              className="col-span-full"
              label="Instagram Account"
              name="instagram"
              type="text"
            />

            <TextField
              className="col-span-full"
              label="Domisili"
              name="domiciled"
              type="text"
              required
            />

            <fieldset>
              <legend className="mb-3 block text-sm font-medium text-gray-700">
                Ukuran Baju <RedStar />
              </legend>
              <div className="space-y-6">
                {sizes.map((size) => (
                  <div key={size.id} className="flex items-center">
                    <input
                      id={size.id}
                      name="size"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      htmlFor={size.id}
                      className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                    >
                      {size.title}
                    </label>
                  </div>
                ))}
              </div>
            </fieldset>

            <fieldset className="col-span-full">
              <legend className="mb-3 block text-sm font-medium text-gray-700">
                Alergi makanan <RedStar />
              </legend>
              <div className="space-y-6">
                <div key="allergy-none" className="flex items-center">
                  <input
                    id="allergy-none"
                    name="allergy"
                    type="radio"
                    required
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="allergy-none"
                    className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                  >
                    Tidak ada
                  </label>
                </div>
                <div key="allergy-other" className="flex items-center">
                  <input
                    id="allergy-other"
                    name="allergy"
                    type="radio"
                    required
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="allergy-other"
                    className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                  >
                    Other
                  </label>
                  <input
                    id="allergy-other-text"
                    type="text"
                    className={clsx(formClasses, 'ml-4')}
                  />
                </div>
              </div>
            </fieldset>

            <fieldset className="col-span-full">
              <legend className="mb-3 block text-sm font-medium text-gray-700">
                Pengalaman volunteer sebelumnya <RedStar />
              </legend>
              <div className="space-y-6">
                <div key="volunteer-exp-none" className="flex items-center">
                  <input
                    id="volunteer-exp-none"
                    name="volunteer-exp"
                    type="radio"
                    required
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="volunteer-exp-none"
                    className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                  >
                    Tidak ada
                  </label>
                </div>
                <div key="volunteer-exp-other" className="flex items-center">
                  <input
                    id="volunteer-exp-other"
                    name="volunteer-exp"
                    type="radio"
                    required
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="volunteer-exp-other"
                    className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                  >
                    Other
                  </label>
                  <input
                    id="volunteer-exp-other-text"
                    type="text"
                    className={clsx(formClasses, 'ml-4')}
                    placeholder="contoh: volunteer 1000 Guru, Kalimantan Timur, 2018"
                  />
                </div>
              </div>
            </fieldset>

            <ImageUploadField
              label="Upload bukti pendaftaran (DP Rp 1.650.000)"
              required
            />

            <TextField
              className="col-span-full"
              label="Other Request"
              name="other-request"
              type="text"
            />

            <TextField
              className="col-span-full"
              label="Emergency Contact"
              name="emergency-contact"
              type="text"
              placeholder="Rizal - suami - 081xxxxxxx"
            />

            <div className="col-span-full">
              <Button
                type="submit"
                variant="solid"
                color="blue"
                className="w-full"
              >
                <span>
                  Sign up <span aria-hidden="true">&rarr;</span>
                </span>
              </Button>
            </div>
          </form>
        </main>
      </div>
    </div>
  )
}
