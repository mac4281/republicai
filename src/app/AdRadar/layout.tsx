import { AuthProvider } from '@/contexts/AuthContext';

export default function AdRadarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthProvider>{children}</AuthProvider>;
}

