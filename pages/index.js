import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-900 to-green-500 text-white">
      <header className="flex justify-between items-center p-6 bg-white dark:bg-gray-900 text-black dark:text-white">
        <div className="flex items-center space-x-2">
          <div className="bg-blue-500 text-white w-10 h-10 flex items-center justify-center rounded-full text-lg font-bold">MSA</div>
          <span className="text-xl font-bold">Majnoon Smart AI Builder</span>
        </div>
        <div className="space-x-4">
          <Link href="/login" className="px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white">Log In</Link>
          <Link href="/signup" className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">Sign Up</Link>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center text-center p-8 space-y-6">
        <h1 className="text-5xl font-extrabold">Create Full-Stack Apps with AI</h1>
        <p className="text-xl">Transform your ideas into full websites and backend systems effortlessly using our AI-powered platform.</p>
        <Link href="/signup" className="px-6 py-3 bg-white text-green-500 rounded-lg text-lg font-semibold hover:bg-gray-100">Get Started Free</Link>
      </main>

      <footer className="p-4 text-center text-sm bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400">
        &copy; 2025 Majnoon Smart AI Builder. All rights reserved.
      </footer>
    </div>
  );
}
