// app/api/check-connection/route.js
import { readFile } from 'fs/promises';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await readFile(path.join(process.cwd(), 'tokens.json'));
    return NextResponse.json({ isConnected: true });
  } catch (error) {
    return NextResponse.json({ isConnected: false });
  }
}