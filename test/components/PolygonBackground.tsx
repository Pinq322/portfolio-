
import React, { useEffect, useState } from 'react';

const PolygonBackground: React.FC<{ theme: 'dark' | 'light' }> = ({ theme }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className={`fixed inset-0 -z-10 overflow-hidden transition-colors duration-700 ${theme === 'dark' ? 'bg-[#080808]' : 'bg-slate-50'}`}>
      <div 
        className={`absolute top-[-10%] left-[-10%] w-[800px] h-[800px] blur-[150px] rounded-full transition-all duration-1000 opacity-40 ${theme === 'dark' ? 'bg-brand/20' : 'bg-brand/10'}`}
        style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
      />
      <div 
        className={`absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] blur-[150px] rounded-full transition-all duration-1000 opacity-30 ${theme === 'dark' ? 'bg-cyan-600/10' : 'bg-cyan-600/5'}`}
        style={{ transform: `translate(${-mousePos.x}px, ${-mousePos.y}px)` }}
      />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />
    </div>
  );
};

export default PolygonBackground;
