import React from 'react'
import { HomePage } from '@/view/pages/home/Home.page.jsx'

export default function Home() {
  return (
    <main className="p-8 bg-white text-gray-900 h-[calc(100vh-5rem)] flex flex-col gap-6">
      <HomePage />
    </main>
  );
}
