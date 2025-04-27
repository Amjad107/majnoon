import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <header className="flex justify-between items-center px-10 py-6">
        <div className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Majnoon Logo" width={48} height={48} priority className="rounded-full" />
          <span className="text-2xl font-bold">Majnoon Smart AI Builder</span>
        </div>
        <div className="space-x-4">
          <Link href="/login" className="px-5 py-2 rounded-full border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition">Log In</Link>
          <Link href="/signup" className="px-5 py-2 rounded-full bg-green-500 text-white hover:bg-green-600 transition">Sign Up</Link>
        </div>
      </header>
      <section className="relative flex flex-col items-center text-center justify-center flex-1 px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image src="/background.png" alt="Background" fill style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.3 }} priority />
        </div>
        <h1 className="text-6xl font-extrabold leading-tight mb-6">Build Full-Stack Websites<br /> with Smart AI</h1>
        <p className="text-2xl max-w-2xl mb-8 text-gray-700 dark:text-gray-300">
          Instantly create frontend, backend, APIs, and workflows — all from a simple prompt.
        </p>
        <div className="flex space-x-4">
          <Link href="/signup" className="px-8 py-4 rounded-full bg-green-500 text-white text-lg font-bold hover:bg-green-600 transition">Get Started Free</Link>
          <Link href="/demo" className="px-8 py-4 rounded-full border border-gray-500 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition">View Demo</Link>
        </div>
      </section>
      <footer className="text-center py-6 text-gray-600 dark:text-gray-400 text-sm">
        &copy; 2025 Majnoon Smart AI Builder. All rights reserved.
      </footer>
    </div>
  );
}