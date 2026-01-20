
import React from 'react';
import Calculator from './components/Calculator.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-black">
      {/* Animated Watery Background Elements */}
      <div className="water-bg" />
      <div 
        className="blob w-96 h-96 bg-blue-600 top-[-10%] left-[-10%]" 
        style={{ animationDelay: '0s' }}
      />
      <div 
        className="blob w-80 h-80 bg-emerald-600 bottom-[-5%] right-[10%]" 
        style={{ animationDelay: '4s' }}
      />
      <div 
        className="blob w-[30rem] h-[30rem] bg-amber-600 top-[20%] right-[-10%]" 
        style={{ animationDelay: '8s' }}
      />
      
      {/* UAE Luxury Theme: Gold accents and dark glass */}
      <div className="z-10 w-full max-w-md px-4">
        <div className="text-center mb-10 flex flex-col items-center">
          <div className="relative group">
            <h1 className="text-5xl tracking-[0.6em] font-extralight uppercase select-none mr-[-0.6em]">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-amber-100 via-amber-400 to-amber-700 drop-shadow-[0_0_12px_rgba(251,191,36,0.2)]">
                JCal
              </span>
            </h1>
            {/* Elegant decorative accents */}
            <div className="absolute -top-4 -left-4 w-4 h-4 border-t border-l border-amber-500/30" />
            <div className="absolute -bottom-4 -right-4 w-4 h-4 border-b border-r border-amber-500/30" />
          </div>
          
          <div className="flex items-center gap-4 mt-6 w-full max-w-[200px]">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-amber-500/40" />
            <p className="text-white/40 text-[9px] tracking-[0.3em] uppercase font-medium whitespace-nowrap">
              Made in Chikarkot
            </p>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-amber-500/40" />
          </div>
        </div>
        
        <Calculator />

        <div className="mt-10 text-center text-white/10 text-[9px] font-light tracking-[0.25em] uppercase flex flex-col gap-2">
          <span>Designed in Pakistan • Powered by Jawad</span>
          <div className="h-[1px] w-12 bg-white/5 mx-auto" />
          <span className="text-white/5 italic">Exclusive Chikarkot Edition</span>
        </div>
      </div>
    </div>
  );
};

export default App;
