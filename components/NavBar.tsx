import React from 'react';
import { ChevronDown } from 'lucide-react';

const NavItem: React.FC<{ text: string; hasDropdown?: boolean }> = ({ text, hasDropdown = false }) => (
  <div className="flex items-center space-x-1 cursor-pointer hover:text-yellow-300 transition-colors group relative py-4 px-2">
    <span className="text-white font-semibold text-lg">{text}</span>
    {hasDropdown && <ChevronDown size={16} className="text-white group-hover:text-yellow-300 transition-transform group-hover:rotate-180" />}
    
    {/* Mock Dropdown */}
    {hasDropdown && (
      <div className="absolute top-full left-0 w-48 bg-white shadow-xl rounded-b-lg hidden group-hover:block z-50">
        <div className="py-2">
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-sm">Option 1</a>
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-sm">Option 2</a>
        </div>
      </div>
    )}
  </div>
);

const NavBar: React.FC = () => {
  return (
    <div className="w-full bg-[#a31545] border-t border-[#c2185b] border-opacity-50 mt-auto shadow-inner">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-x-6 gap-y-2">
          <NavItem text="Plan a Visit" hasDropdown />
          <NavItem text="Birthday Parties" hasDropdown />
          <NavItem text="Group Sales" hasDropdown />
          <NavItem text="Contact" hasDropdown />
          <NavItem text="Shop" hasDropdown />
          <NavItem text="Helping Hands Foundation" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;