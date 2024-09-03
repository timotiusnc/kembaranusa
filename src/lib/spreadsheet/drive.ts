import { drive_v3, auth, drive } from '@googleapis/drive'

// Scopes: https://developers.google.com/sheets/api/guides/authorizing?hl=en
const authObj = new auth.GoogleAuth({
  credentials: {
    client_email: process.env.FIREBASE_CLIENT_EMAIL,
    private_key: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  },
  scopes: 'https://www.googleapis.com/auth/drive',
})

const gDrive: drive_v3.Drive = new drive_v3.Drive({
  auth: authObj,
})

export { gDrive }
