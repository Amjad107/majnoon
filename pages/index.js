import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-900 to-green-500 text-white">
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-white dark:bg-gray-900 text-black dark:text-white shadow-md">
        <div className="flex items-center space-x-2">
          <div className="bg-blue-500 text-white w-10 h-10 flex items-center justify-center rounded-full text-lg font-bold">MSA</div>
          <span className="text-xl font-bold">Majnoon Smart AI Builder</span>
        </div>
        <div className="space-x-4">
          <Link href="/login" className="px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white">Log In</Link>
          <Link href="/signup" className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">Sign Up</Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center p-8 space-y-6">
        <h1 className="text-5xl font-extrabold leading-tight">Create, Edit, and Launch with AI</h1>
        <p className="text-xl max-w-2xl">The fastest way to build full-stack web apps using Smart AI technology. Launch in minutes, not months!</p>
        <div className="space-x-4 mt-4">
          <Link href="/signup" className="px-6 py-3 bg-white text-green-500 rounded-lg text-lg font-semibold hover:bg-gray-100">Get Started Free</Link>
          <Link href="/demo" className="px-6 py-3 border border-white text-white rounded-lg text-lg font-semibold hover:bg-white hover:text-green-500">View Demo</Link>
        </div>
      </main>

      {/* Features Section */}
      <section className="bg-white dark:bg-gray-900 text-black dark:text-white py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Powerful Features</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <FeatureCard icon="🧠" title="AI Frontend Generator" description="Generate beautiful websites from simple prompts or screenshots." />
          <FeatureCard icon="⚡" title="AI Backend API Creator" description="Create APIs and database workflows without writing code." />
          <FeatureCard icon="🔄" title="Visual Workflow Engine" description="Automate tasks with drag-and-drop logic builder." />
          <FeatureCard icon="🚀" title="Instant Hosting & Export" description="One-click to deploy live or download your complete project." />
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-16 text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to build your next big idea?</h2>
        <p className="text-xl mb-8">Start free today and launch smarter with Majnoon Smart AI Builder.</p>
        <Link href="/signup" className="px-8 py-4 bg-white text-green-500 rounded-lg text-xl font-bold hover:bg-gray-100">Start For Free</Link>
      </section>

      {/* Footer */}
      <footer className="p-4 text-center text-sm bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400">
        &copy; 2025 Majnoon Smart AI Builder. All rights reserved.
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md text-center">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
    </div>
  );
}