import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Youtube, Instagram } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <div className="bg-[#b91c53] text-white py-2 px-4 md:px-8 text-sm md:text-base font-medium">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
        
        {/* Contact Info */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Phone size={16} fill="currentColor" className="text-white" />
            <span>631-694-6868</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail size={16} className="text-white" />
            <a href="mailto:GuestRelations@Adventureland.us" className="hover:underline">
              GuestRelations@Adventureland.us
            </a>
          </div>
        </div>

        {/* Social Icons & Location */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <a href="#" className="hover:text-gray-200"><MapPin size={18} fill="currentColor" /></a>
          <a href="#" className="hover:text-gray-200"><Phone size={18} fill="currentColor" /></a>
          <a href="#" className="hover:text-gray-200"><Facebook size={18} fill="currentColor" /></a>
          <a href="#" className="hover:text-gray-200"><Twitter size={18} fill="currentColor" /></a>
          <a href="#" className="hover:text-gray-200"><Youtube size={18} fill="currentColor" /></a>
          <a href="#" className="hover:text-gray-200"><Instagram size={18} /></a>
          <a href="#" className="hover:text-gray-200"><Mail size={18} /></a>
        </div>
        
      </div>
    </div>
  );
};

export default Header;