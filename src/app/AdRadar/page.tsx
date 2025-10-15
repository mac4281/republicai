'use client';

import { useEffect } from 'react';

export default function AdRadarRedirect() {
  useEffect(() => {
    window.location.href = 'https://www.adradar.net/';
  }, []);

  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center">
      <div className="text-2xl font-bold">Redirecting to AdRadar...</div>
    </div>
  );
}
