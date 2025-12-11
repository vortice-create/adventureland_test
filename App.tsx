import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ActionButtons from './components/ActionButtons';
import NavBar from './components/NavBar';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#c2185b] via-[#ad1457] to-[#880e4f] flex flex-col font-sans overflow-x-hidden">
      <Header />
      
      <main className="flex-grow flex flex-col items-center w-full max-w-7xl mx-auto px-4">
        {/* Spacer for visual balance similar to image */}
        <div className="h-4 md:h-12"></div>
        
        <Hero />
        
        <div className="h-4 md:h-16"></div>
        
        <ActionButtons />
        
        <div className="h-8"></div>
      </main>

      <NavBar />
      
      {/* Background Decorative Element (Optional Texture) */}
      <div className="fixed inset-0 pointer-events-none opacity-5 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay z-0"></div>
      
      <ChatWidget />
    </div>
  );
};

export default App;