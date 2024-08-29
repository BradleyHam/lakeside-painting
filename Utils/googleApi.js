// utils/googleApi.js

import { google } from 'googleapis';

let myBusiness;

export function getMyBusinessClient() {
  if (myBusiness) {
    return myBusiness;
  }

  const auth = new google.auth.GoogleAuth({
    credentials: {
      type: 'service_account',
      project_id: process.env.GOOGLE_PROJECT_ID,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
    },
    scopes: ['https://www.googleapis.com/auth/business.manage'],
  });

  myBusiness = google.mybusiness({ version: 'v4', auth });
  return myBusiness;
}