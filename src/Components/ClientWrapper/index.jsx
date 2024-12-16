// components/ClientWrapper.jsx
'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';

export default function ClientWrapper({ children }) {
  const pathname = usePathname();

  return (
    <>
      {pathname !== '/login' && <Navbar />}
      {children}
      {pathname !== '/login' && <Footer />}
    </>
  );
}
