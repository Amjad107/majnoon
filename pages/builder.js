import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabaseClient';
import TopNav from '../components/TopNav';
import Sidebar from '../components/Sidebar';
import PreviewArea from '../components/PreviewArea';
import Chatbox from '../components/Chatbox';
import { fetchFakeResponse } from '../lib/fakeAiGenerator';
import { fetchRealResponse } from '../lib/openaiClient';

export default function Builder() {
  const [blocks, setBlocks] = useState([]);
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push('/login');
      } else {
        setUser(user);
        // Optionally: load saved project from Supabase here
      }
    };
    getUser();
  }, [router]);

  const handleSendPrompt = async (prompt) => {
    if (!prompt.trim()) return;

    let aiResponse;

    try {
      // Use real OpenAI API response
      aiResponse = await fetchRealResponse(prompt);
    } catch (error) {
      // fallback to fake local response if OpenAI fails
      aiResponse = fetchFakeResponse(prompt);
    }

    setBlocks((prev) => [...prev, ...aiResponse]);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-100 to-pink-100 dark:from-gray-900 dark:to-gray-800">
      <TopNav onLogout={handleLogout} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar blocks={blocks} />
        <PreviewArea blocks={blocks} setBlocks={setBlocks} />
      </div>
      <Chatbox onSend={handleSendPrompt} />
    </div>
  );
}
