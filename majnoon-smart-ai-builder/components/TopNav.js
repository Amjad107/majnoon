export default function TopNav({ onLogout }) {
  return (
    <div className="flex justify-between items-center p-4 bg-white dark:bg-gray-900 shadow-md">
      <div className="text-xl font-bold">Majnoon Smart AI Builder</div>
      <div className="flex items-center space-x-4">
        <button className="p-2" onClick={() => document.documentElement.classList.toggle('dark')}>
          🌞 / 🌙
        </button>
        <button onClick={onLogout} className="p-2 bg-red-500 text-white rounded-lg">
          Logout
        </button>
      </div>
    </div>
  );
}
