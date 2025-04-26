import { useState } from 'react';

export default function Chatbox({ onSend }) {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      onSend(input);
      setInput('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 p-4 flex items-center space-x-2 shadow-inner">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Ask AI to build or update something..."
        className="flex-1 p-3 border rounded-lg dark:bg-gray-800 dark:text-white"
      />
      <button onClick={handleSend} className="bg-blue-500 text-white px-4 py-2 rounded-lg">
        Send
      </button>
    </div>
  );
}
