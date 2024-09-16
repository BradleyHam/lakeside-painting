// app/admin/page.js
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AdminPage() {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    // Check if we have stored tokens
    fetch('/api/check-connection')
      .then(res => res.json())
      .then(data => setIsConnected(data.isConnected));
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      {isConnected ? (
        <p>Google My Business is connected. Reviews will update automatically.</p>
      ) : (
        <Link className='p-5 bg-blue-200' href="/api/auth/google">
          Connect Google My Business
        </Link>
      )}
    </div>
  );
}