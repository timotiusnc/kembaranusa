'use server'

import { Readable } from 'stream'
import { gSheets } from '@/lib/spreadsheet/sheet'
import { gDrive } from '@/lib/spreadsheet/drive'
import { redirect } from 'next/navigation'

const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5 MB

export async function createRegistration(prevData: any, formData: FormData) {
  const registrationData = getRegistrationData(formData)
  console.log({ registrationData })

  // Validate file size
  const registrationProof: File = registrationData.registration_proof as File
  if (registrationProof.size > MAX_FILE_SIZE) {
    console.log(`File size too large ${registrationProof.size}`)
    return { message: `File size too large  ${registrationProof.size}` }
  }

  // Upload file, get the link
  const [timestamp, viewLink] = await uploadFile(
    registrationProof,
    registrationData,
  )

  // Prepare data for sheet and write it
  const registrationDataForSheet = getRegistrationDataForSheet(
    registrationData,
    timestamp,
    viewLink,
  )
  console.log({ registrationDataForSheet })
  await gSheets.spreadsheets.values.append({
    spreadsheetId: process.env.SHEET_ID,
    range: 'Sheet1!A:C',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [registrationDataForSheet],
    },
  })

  // Redirect to thank you page
  redirect('/thanks')
}

const getRegistrationData = (formData: FormData) => {
  return {
    email: formData.get('email'),
    full_name: formData.get('full_name'),
    nick_name: formData.get('nick_name'),
    phone: `'${formData.get('phone')}`,
    sex: formData.get('sex'),
    job: formData.get('job'),
    volunteer: formData.get('volunteer'),
    volunteer_interest_penyuluhan: formData.get(
      'volunteer_interest_penyuluhan',
    ),
    volunteer_interest_perawatan_gigi_anak: formData.get(
      'volunteer_interest_perawatan_gigi_anak',
    ),
    volunteer_interest_konservasi: formData.get(
      'volunteer_interest_konservasi',
    ),
    volunteer_interest_pencabutan: formData.get(
      'volunteer_interest_pencabutan',
    ),
    volunteer_interest_screening: formData.get('volunteer_interest_screening'),
    instagram: formData.get('instagram'),
    domicile: formData.get('domicile'),
    size: formData.get('size'),
    allergy: formData.get('allergy'),
    allergy_other_text: formData.get('allergy_other_text'),
    volunteer_exp: formData.get('volunteer_exp'),
    volunteer_exp_other_text: formData.get('volunteer_exp_other_text'),
    registration_proof: formData.get('registration_proof'),
    other_request: formData.get('other_request'),
    emergency_contact: formData.get('emergency_contact'),
  }
}

const getRegistrationDataForSheet = (
  registrationData: any,
  timestamp: string | null | undefined,
  registrationProofLink: string | null | undefined,
) => {
  return [
    timestamp,
    registrationData.email,
    registrationData.full_name,
    registrationData.nick_name,
    registrationData.phone,
    registrationData.sex,
    registrationData.job,
    registrationData.volunteer,
    registrationData.volunteer_interest_penyuluhan,
    registrationData.volunteer_interest_perawatan_gigi_anak,
    registrationData.volunteer_interest_konservasi,
    registrationData.volunteer_interest_pencabutan,
    registrationData.volunteer_interest_screening,
    registrationData.instagram,
    registrationData.domicile,
    registrationData.size,
    registrationData.allergy,
    registrationData.allergy_other_text,
    registrationData.volunteer_exp,
    registrationData.volunteer_exp_other_text,
    registrationData.other_request,
    registrationData.emergency_contact,
    registrationProofLink,
  ]
}

const uploadFile = async (uploadedFile: File, registrationData: any) => {
  const folderId = process.env.FOLDER_ID || ''
  const timestamp = new Date().toISOString()
  const metadata = {
    name: `${timestamp.replaceAll(/[-:.]/g, '-')}_${registrationData.email}_${
      uploadedFile.name
    }`,
    parents: [folderId],
  }

  const buffer = await uploadedFile.arrayBuffer()
  const fileBuffer = Buffer.from(buffer)
  const media = {
    mimeType: uploadedFile.type,
    body: Readable.from(fileBuffer),
  }

  const response = await gDrive.files.create({
    requestBody: metadata,
    media,
    fields: 'id, webViewLink',
  })

  const docId = response.data.id
  const viewLink = response.data.webViewLink

  console.log(
    `File '${metadata.name}' uploaded with ID: ${docId}, view link: ${viewLink}`,
  )
  return [timestamp, viewLink]
}
