'use client'

import { Button } from '@/components/Button'
import { TextField, formClasses } from '@/components/Fields'
import { ImageUploadField } from '@/components/ImageUpload'
import clsx from 'clsx'

import { createRegistration } from './registration'
import { useFormState, useFormStatus } from 'react-dom'

const sexs = [
  { id: 'laki', title: 'Laki-laki' },
  { id: 'perempuan', title: 'Perempuan' },
]

const volunteers = [
  { id: 'dokter-gigi', title: 'Dokter gigi' },
  { id: 'dokter-umum', title: 'Dokter umum' },
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
  const [state, formAction] = useFormState(createRegistration, null)
  console.log({ state })

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
          {volunteers.map((volunteer) => (
            <div key={volunteer.id} className="flex items-center">
              <input
                defaultChecked={isDefaultValue}
                id={volunteer.id}
                value={volunteer.id}
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

      <ImageUploadField
        label="Upload bukti pendaftaran (DP Rp 1.485.000)"
        name="registration_proof"
        className="required"
      />
      <div className="col-span-full hidden font-bold italic text-red-500">
        Bukti pendaftaran (DP Rp 1.485.000) harap dikirimkan melalui IG{' '}
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
      <span>
        Daftar <span aria-hidden="true">&rarr;</span>
      </span>
    </Button>
  )
}
