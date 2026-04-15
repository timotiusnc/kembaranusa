'use client'

import { Button } from '@/components/Button'
import { TextField, formClasses } from '@/components/Fields'
import { ImageUploadField } from '@/components/ImageUpload'
import clsx from 'clsx'

import { createRegistration } from './registration'
import { useActionState, useState } from 'react'
import { useFormStatus } from 'react-dom'

const sexs = [
  { id: 'laki', title: 'Laki-laki' },
  { id: 'perempuan', title: 'Perempuan' },
]

const volunteers = [
  { id: 'dokter-gigi', title: 'Dokter Gigi Umum' },
  { id: 'dokter-gigi-spesialis', title: 'Dokter Gigi Spesialis' },
  { id: 'dokter-umum', title: 'Dokter Umum' },
  { id: 'non-medis', title: 'Non-medis' },
]

const volunteer_interests = [
  { id: 'volunteer_interest_penyuluhan', title: 'Penyuluhan' },
  {
    id: 'volunteer_interest_perawatan_gigi_anak',
    title: 'Perawatan Gigi Anak',
  },
  { id: 'volunteer_interest_konservasi', title: 'Konservasi' },
  { id: 'volunteer_interest_pencabutan', title: 'Pencabutan' },
  { id: 'volunteer_interest_screening', title: 'Screening' },
]

const sizes = [
  { id: 'XS', title: 'XS' },
  { id: 'S', title: 'S' },
  { id: 'M', title: 'M' },
  { id: 'L', title: 'L' },
  { id: 'XL', title: 'XL' },
  { id: 'XXL', title: 'XXL' },
]

const RedStar = () => <span className="text-red-500">*</span>
const isDefaultValue = false

export function RegistrationForm() {
  const [state, formAction] = useActionState(createRegistration, null)
  const [paymentType, setPaymentType] = useState('full-package')
  const [volunteerType, setVolunteerType] = useState('')

  return (
    <form
      action={formAction}
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
        defaultValue={isDefaultValue ? 'asd@dasd.com' : ''}
      />
      <TextField
        label="Nama Lengkap"
        desc="(beserta gelar)"
        name="full_name"
        type="text"
        autoComplete="full-name"
        required
        defaultValue={isDefaultValue ? 'Timotius Nugroho Chandra' : ''}
      />
      <TextField
        label="Nama Panggilan"
        name="nick_name"
        type="text"
        required
        defaultValue={isDefaultValue ? 'Timmy' : ''}
      />
      <TextField
        className="col-span-full"
        label="Nomor Pokok Anggota (NPA) PDGI / IDI"
        desc="(diisi oleh relawan medis untuk keperluan SKP)"
        name="npa_pdgi"
        type="text"
        defaultValue={isDefaultValue ? '1234567890' : ''}
      />
      <TextField
        className="col-span-full"
        label="Nomor HP"
        desc="(WhatsApp)"
        name="phone"
        type="number"
        required
        defaultValue={isDefaultValue ? '081234567890' : ''}
      />

      <fieldset>
        <legend className="mb-3 block text-sm font-medium text-gray-700">
          Jenis Kelamin <RedStar />
        </legend>
        <div className="space-y-6">
          {sexs.map((sex) => (
            <div key={sex.id} className="flex items-center">
              <input
                defaultChecked={isDefaultValue}
                id={sex.id}
                value={sex.id}
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
        <input
          id="date-of-birth"
          name="date_of_birth"
          type="date"
          required
          defaultValue={isDefaultValue ? '1990-01-01' : ''}
          className={formClasses}
        />
      </div>

      <TextField
        className="col-span-full"
        label="Pekerjaan"
        name="job"
        type="text"
        required
        defaultValue={isDefaultValue ? 'Swasta' : ''}
      />

      <fieldset className="col-span-full">
        <legend className="mb-3 block text-sm font-medium text-gray-700">
          Volunteer <RedStar />
        </legend>
        <div className="space-y-6">
          <div className="flex items-center">
            <input
              defaultChecked={isDefaultValue}
              id="dokter-gigi"
              value="dokter-gigi"
              name="volunteer"
              type="radio"
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              required
              onChange={(e) => setVolunteerType(e.target.value)}
            />
            <label
              htmlFor="dokter-gigi"
              className="ml-3 block text-sm font-medium leading-6 text-gray-900"
            >
              Dokter Gigi Umum
            </label>
          </div>

          <div className="flex items-start">
            <input
              id="dokter-gigi-spesialis"
              value="dokter-gigi-spesialis"
              name="volunteer"
              type="radio"
              className="mt-1 h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              required
              onChange={(e) => setVolunteerType(e.target.value)}
            />
            <div className="ml-3 flex-1">
              <label
                htmlFor="dokter-gigi-spesialis"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Dokter Gigi Spesialis
              </label>
              {volunteerType === 'dokter-gigi-spesialis' && (
                <input
                  name="specialist_detail"
                  type="text"
                  placeholder="Pedodonti, Ortodonti, Periodonsia, Prostodonsia, Penyakit Mulut, Bedah Mulut, Konservasi Gigi, Radiologi, atau lainnya"
                  required
                  className={clsx(formClasses, 'mt-2')}
                />
              )}
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="dokter-umum"
              value="dokter-umum"
              name="volunteer"
              type="radio"
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              required
              onChange={(e) => setVolunteerType(e.target.value)}
            />
            <label
              htmlFor="dokter-umum"
              className="ml-3 block text-sm font-medium leading-6 text-gray-900"
            >
              Dokter Umum
            </label>
          </div>

          <div className="flex items-center">
            <input
              id="non-medis"
              value="non-medis"
              name="volunteer"
              type="radio"
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              required
              onChange={(e) => setVolunteerType(e.target.value)}
            />
            <label
              htmlFor="non-medis"
              className="ml-3 block text-sm font-medium leading-6 text-gray-900"
            >
              Non-medis
            </label>
          </div>
        </div>
      </fieldset>

      <fieldset className="col-span-full">
        <legend className="mb-3 block text-sm font-medium text-gray-700">
          Peminatan Bakti Sosial{' '}
          <span className="italic">
            (diisi oleh relawan dokter gigi saja, boleh pilih lebih dari 1)
          </span>
        </legend>
        <div className="space-y-6">
          {volunteer_interests.map((volunteer) => (
            <div key={volunteer.id} className="flex items-center">
              <input
                id={volunteer.id}
                name={volunteer.id}
                type="checkbox"
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
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
        name="domicile"
        type="text"
        required
        defaultValue={isDefaultValue ? '81L' : ''}
      />

      <fieldset>
        <legend className="mb-3 block text-sm font-medium text-gray-700">
          Ukuran Baju <RedStar />
        </legend>
        <div className="space-y-6">
          {sizes.map((size) => (
            <div key={size.id} className="flex items-center">
              <input
                defaultChecked={isDefaultValue}
                id={size.id}
                value={size.id}
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
              defaultChecked={isDefaultValue}
              id="allergy-none"
              value="allergy-none"
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
              value="allergy-other"
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
              name="allergy_other_text"
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
              defaultChecked={isDefaultValue}
              id="volunteer-exp-none"
              value="volunteer-exp-none"
              name="volunteer_exp"
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
              value="volunteer-exp-other"
              name="volunteer_exp"
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
              name="volunteer_exp_other_text"
              type="text"
              className={clsx(formClasses, 'ml-4')}
              placeholder="contoh: volunteer 1000 Guru, Kalimantan Timur, 2018"
            />
          </div>
        </div>
      </fieldset>

      <fieldset className="col-span-full">
        <legend className="mb-3 block text-sm font-medium text-gray-700">
          Paket Pendaftaran <RedStar />
        </legend>
        <div className="space-y-6">
          <div className="flex items-center">
            <input
              defaultChecked={true}
              id="full-package"
              value="full-package"
              name="payment_type"
              type="radio"
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              required
              onChange={(e) => setPaymentType(e.target.value)}
            />
            <label
              htmlFor="full-package"
              className="ml-3 block text-sm font-medium leading-6 text-gray-900"
            >
              Bakti Sosial + Trip (Rp 5.650.000)
            </label>
          </div>
          <div className="flex items-start">
            <input
              id="baksos-only"
              value="baksos-only"
              name="payment_type"
              type="radio"
              className="mt-1 h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              required
              onChange={(e) => setPaymentType(e.target.value)}
            />
            <div className="ml-3">
              <label
                htmlFor="baksos-only"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Bakti Sosial Only (Rp 450.000)
              </label>
              <p className="mt-1 text-xs italic text-gray-600">
                Termasuk: T-Shirt, SKP, makan siang, snack, transportasi lokal,
                dan donasi bakti sosial
              </p>
            </div>
          </div>
        </div>
      </fieldset>

      <ImageUploadField
        label={
          paymentType === 'full-package'
            ? 'Upload bukti pendaftaran (DP Rp 1.695.000)'
            : 'Upload bukti pendaftaran (Rp 450.000)'
        }
        name="registration_proof"
        className="required"
        required
      />
      <div className="col-span-full hidden font-bold italic text-red-500">
        Bukti pendaftaran (DP Rp 1.695.000) harap dikirimkan melalui IG{' '}
        <a
          href="https://instagram.com/kembara.nusa"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          @kembara.nusa
        </a>
      </div>

      <TextField
        className="col-span-full"
        label="Other Request"
        name="other_request"
        type="text"
      />

      <TextField
        className="col-span-full"
        label="Emergency Contact"
        name="emergency_contact"
        type="text"
        placeholder="Rizal - suami - 081xxxxxxx"
      />

      <div className="text-sm italic text-red-500">* Wajib diisi</div>

      <div className="col-span-full">
        <SubmitButton />
      </div>
    </form>
  )
}

const SubmitButton = () => {
  const { pending } = useFormStatus()

  return (
    <Button
      type="submit"
      variant="solid"
      color="blue"
      className={clsx('w-full', {
        'bg-gray-400 hover:bg-gray-400 hover:text-white active:bg-gray-400 active:text-white':
          pending,
      })}
      disabled={pending}
    >
      {pending ? (
        <div className="flex items-center justify-center">
          <svg
            className="mr-2 h-5 w-5 animate-spin text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <span>Memproses pendaftaran...</span>
        </div>
      ) : (
        <span>
          Daftar <span aria-hidden="true">&rarr;</span>
        </span>
      )}
    </Button>
  )
}
