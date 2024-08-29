// utils/tokenManager.js
import fs from 'fs/promises';
import path from 'path';

const TOKEN_FILE = path.join(process.cwd(), 'tokens.json');

export async function storeTokens(clientId, tokens) {
  try {
    let allTokens = {};
    try {
      const data = await fs.readFile(TOKEN_FILE, 'utf8');
      allTokens = JSON.parse(data);
    } catch (error) {
      // File doesn't exist or is empty, which is fine
    }

    allTokens[clientId] = {
      accessToken: tokens.access_token,
      refreshToken: tokens.refresh_token,
      expiryDate: new Date(Date.now() + tokens.expiry_in * 1000).toISOString()
    };

    await fs.writeFile(TOKEN_FILE, JSON.stringify(allTokens, null, 2));
  } catch (error) {
    console.error('Error storing tokens:', error);
    throw error;
  }
}

export async function getTokens(clientId) {
  try {
    const data = await fs.readFile(TOKEN_FILE, 'utf8');
    const allTokens = JSON.parse(data);
    return allTokens[clientId];
  } catch (error) {
    console.error('Error retrieving tokens:', error);
    throw error;
  }
}