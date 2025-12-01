import React from 'https://esm.sh/react@18.2.0';
import { motion } from 'https://esm.sh/framer-motion@11.0.0';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
}

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.sender === 'user';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className={`flex mb-4 ${isUser ? 'justify-end' : 'justify-start'}`}
    >
      {!isUser && (
        <img
          src="https://source.unsplash.com/random/30x30/?robot,ai"
          alt="AI Avatar"
          className="w-8 h-8 rounded-full object-cover mr-3"
        />
      )}
      <div
        className={`relative p-3 rounded-lg max-w-[70%] ${isUser
          ? 'bg-purple-600 text-white rounded-br-none'
          : 'bg-zinc-700 text-zinc-100 rounded-bl-none'
        } shadow-md`}
      >
        <p className="text-sm">{message.text}</p>
      </div>
      {isUser && (
        <img
          src="https://source.unsplash.com/random/30x30/?human,user"
          alt="User Avatar"
          className="w-8 h-8 rounded-full object-cover ml-3"
        />
      )}
    </motion.div>
  );
};

export default ChatMessage;
