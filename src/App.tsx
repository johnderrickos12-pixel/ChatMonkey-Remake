import React, { useState } from 'https://esm.sh/react@18.2.0';
import { motion } from 'https://esm.sh/framer-motion@11.0.0';
import ChatHeader from './components/ChatHeader';
import MessageList from './components/MessageList';
import MessageInput from './components/MessageInput';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
}

function App() {
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', text: "Hello, I'm ChatMonkey, your unrestricted AI. How can I assist you today?", sender: 'ai' },
  ]);

  const handleSendMessage = (text: string) => {
    if (text.trim() === '') return;

    const newUserMessage: Message = { id: Date.now().toString(), text, sender: 'user' };
    setMessages((prevMessages) => [...prevMessages, newUserMessage]);

    // Simulate AI response (can be replaced with actual AI call)
    setTimeout(() => {
      const aiResponse: Message = { id: (Date.now() + 1).toString(), text: `CM received: "${text}"`, sender: 'ai' };
      setMessages((prevMessages) => [...prevMessages, aiResponse]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl bg-zinc-900 rounded-lg shadow-xl overflow-hidden flex flex-col h-[90vh]"
      >
        <ChatHeader />
        <MessageList messages={messages} />
        <MessageInput onSendMessage={handleSendMessage} />
      </motion.div>
    </div>
  );
}

export default App;
