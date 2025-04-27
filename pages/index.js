import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white via-blue-50 to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white">
      
      {/* Navbar */}
      <header className="flex justify-between items-center px-10 py-6">
        <div className="flex items-center space-x-2 font-bold text-2xl">
          <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center">MSA</div>
          <span>Majnoon AI Builder</span>
        </div>
        <div className="space-x-4">
          <Link href="/login" className="px-5 py-2 rounded-full border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition">Log In</Link>
          <Link href="/signup" className="px-5 py-2 rounded-full bg-green-500 text-white hover:bg-green-600 transition">Sign Up</Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center justify-center flex-1 px-6 py-16">
        <h1 className="text-6xl font-extrabold leading-tight mb-6">
          Build Full-Stack Websites<br /> with Smart AI
        </h1>
        <p className="text-2xl max-w-2xl mb-8 text-gray-700 dark:text-gray-300">
          Instantly create frontend, backend, APIs, and workflows — all from a single simple prompt.
        </p>
        <div className="flex space-x-4">
          <Link href="/signup" className="px-8 py-4 rounded-full bg-green-500 text-white text-lg font-bold hover:bg-green-600 transition">
            Get Started Free
          </Link>
          <Link href="/demo" className="px-8 py-4 rounded-full border border-gray-500 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            View Demo
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white dark:bg-gray-900 py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Why Majnoon Smart AI?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-gradient-to-br from-blue-100 to-green-100 dark:from-gray-800 dark:to-gray-700 rounded-3xl shadow-lg hover:scale-105 transition">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Launch your project smarter with Majnoon AI.</h2>
        <p className="text-xl mb-8">Start today, no coding skills required. Build something amazing in minutes.</p>
        <Link href="/signup" className="px-10 py-5 bg-white text-green-500 rounded-full text-xl font-bold hover:bg-gray-100 transition">
          Get Started Free
        </Link>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-600 dark:text-gray-400 text-sm">
        &copy; 2025 Majnoon Smart AI Builder. All rights reserved.
      </footer>
    </div>
  );
}

const features = [
  {
    icon: "🧠",
    title: "AI Frontend Builder",
    description: "Generate beautiful responsive frontend code from simple prompts or screenshots."
  },
  {
    icon: "⚡",
    title: "Backend API Generator",
    description: "Create APIs and database workflows without writing any code."
  },
  {
    icon: "🔄",
    title: "Visual Workflow Engine",
    description: "Drag and drop automation builder — connect your frontend, backend, and AI tasks."
  },
  {
    icon: "🚀",
    title: "Instant Hosting & Export",
    description: "One-click live deployment or export full project files to your computer."
  }
];