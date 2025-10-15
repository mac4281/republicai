'use client';

import { useAuth } from '@/contexts/AuthContext';
import LoginForm from '@/components/LoginForm';
import AccountManagement from '@/components/AccountManagement';
import Link from 'next/link';

export default function AdRadarPage() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-white text-black flex items-center justify-center">
        <div className="text-2xl font-bold">LOADING...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="border-b-4 border-black py-6 px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-3xl font-bold hover:underline">
            REPUBLIC AI
          </Link>
          <h1 className="text-3xl font-bold">AdRadar</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          {!user ? (
            <div className="flex flex-col items-center">
              <div className="mb-8 text-center">
                <h2 className="text-5xl font-bold mb-4">ACCOUNT MANAGEMENT</h2>
                <p className="text-lg">
                  Sign in to manage your AdRadar subscription
                </p>
              </div>
              <LoginForm />
            </div>
          ) : (
            <AccountManagement />
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white text-black py-12 px-6 border-t-4 border-black mt-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-lg font-semibold">© 2025 REPUBLIC AI</p>
          <div className="flex gap-8 text-base">
            <Link href="/privacy" className="hover:underline font-semibold">
              PRIVACY POLICY
            </Link>
            <Link href="/terms" className="hover:underline font-semibold">
              TERMS & CONDITIONS
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

