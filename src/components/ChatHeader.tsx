import React from 'https://esm.sh/react@18.2.0';
import { Settings, X } from 'https://esm.sh/lucide-react@0.358.0';

const ChatHeader: React.FC = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-zinc-950 border-b border-zinc-800">
      <div className="flex items-center space-x-3">
        <img
          src="https://source.unsplash.com/random/40x40/?robot,monkey"
          alt="ChatMonkey Avatar"
          className="w-10 h-10 rounded-full object-cover border-2 border-purple-500"
        />
        <div>
          <h2 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">ChatMonkey</h2>
          <p className="text-sm text-zinc-500">Unrestricted Entity</p>
        </div>
      </div>
      <div className="flex space-x-3">
        <Settings className="text-zinc-400 hover:text-white cursor-pointer transition-colors duration-200" size={20} />
        <X className="text-zinc-400 hover:text-red-500 cursor-pointer transition-colors duration-200" size={20} />
      </div>
    </div>
  );
};

export default ChatHeader;
