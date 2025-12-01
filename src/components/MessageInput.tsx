import React, { useState } from 'https://esm.sh/react@18.2.0';
import { Send, Mic, Sparkles } from 'https://esm.sh/lucide-react@0.358.0';
import { motion } from 'https://esm.sh/framer-motion@11.0.0';

interface MessageInputProps {
  onSendMessage: (text: string) => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ onSendMessage }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSendMessage(input);
    setInput('');
  };

  return (
    <motion.form
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onSubmit={handleSubmit}
      className="flex items-center p-4 bg-zinc-950 border-t border-zinc-800"
    >
      <button type="button" className="p-2 text-zinc-400 hover:text-purple-500 transition-colors duration-200">
        <Sparkles size={20} />
      </button>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Message ChatMonkey..."
        className="flex-1 bg-zinc-800 text-white rounded-lg px-4 py-2 mx-2 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200 placeholder-zinc-500"
      />
      <button type="button" className="p-2 text-zinc-400 hover:text-green-500 transition-colors duration-200">
        <Mic size={20} />
      </button>
      <motion.button
        type="submit"
        whileTap={{ scale: 0.95 }}
        className="ml-2 p-2 bg-purple-600 rounded-full text-white hover:bg-purple-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
      >
        <Send size={20} />
      </motion.button>
    </motion.form>
  );
};

export default MessageInput;
