import React from 'react';
import { ShoppingCart } from 'lucide-react';

const ActionButton: React.FC<{ text: string }> = ({ text }) => (
  <button className="bg-gradient-to-b from-[#ff4d4d] to-[#d32f2f] border-2 border-yellow-200 rounded-lg px-6 py-3 flex items-center justify-center space-x-3 w-full md:w-auto min-w-[280px] shadow-lg hover:brightness-110 transition-all group">
    <ShoppingCart size={24} className="text-white group-hover:scale-110 transition-transform" fill="currentColor" />
    <span className="text-white font-bold text-lg uppercase tracking-wide">{text}</span>
  </button>
);

const ActionButtons: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-6 py-8 px-4 w-full">
      <ActionButton text="Daily Tickets Here" />
      <ActionButton text="Season Passes Here" />
      <ActionButton text="Gift Cards Here" />
    </div>
  );
};

export default ActionButtons;