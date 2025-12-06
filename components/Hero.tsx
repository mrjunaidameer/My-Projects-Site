import React, { useState, useEffect } from 'react';

export const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ["<Web Developer/>", "<Security Analyst/>", "<Growth Expert/>"];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000); // Pause at end
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, roles]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-28 pb-12 overflow-hidden relative bg-surface">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-20 left-[-100px] w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-20 right-[-100px] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-slate-200/50 rounded-full opacity-30"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-slate-200/30 rounded-full opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Left Side: Text */}
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white text-xs font-bold uppercase tracking-wider mb-2 shadow-lg shadow-slate-900/10">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              Architecting Secure Digital Solutions
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 leading-tight tracking-tight mb-8">
              <span className="block text-xl sm:text-2xl lg:text-3xl font-medium text-slate-500 mb-3">Hi, I'm Junaid</span>
              {/* min-h ensured to accommodate wrapping text without overlapping subtext */}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent font-mono block min-h-[1.2em] h-auto pb-2">
                {text}
                <span className="cursor text-primary">|</span>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light mt-4">
              Bridging the gap between <span className="font-semibold text-slate-900">robust applications</span> and <span className="font-semibold text-slate-900">impenetrable security</span>. 
              Currently pursuing BS Cyber Security at <span className="border-b-2 border-primary/30 text-primary font-medium">IUB</span>.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-6">
              <a href="#projects" className="btn-primary w-full sm:w-auto px-8 py-3.5 rounded-lg text-base font-bold text-center text-white">
                View My Work
              </a>
              <a href="#contact" className="btn-secondary w-full sm:w-auto px-8 py-3.5 rounded-lg text-slate-700 font-bold text-base text-center">
                Contact Me
              </a>
            </div>
          </div>

          {/* Right Side: Visual */}
          <div className="lg:w-1/2 flex justify-center relative min-h-[350px] md:min-h-[450px]">
            <div className="relative w-72 h-72 md:w-[450px] md:h-[450px]">
                
                {/* Orbiting Elements */}
                <div className="absolute inset-0 animate-orbit z-20 pointer-events-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 bg-white/90 backdrop-blur px-4 py-2.5 rounded-xl shadow-lg border border-slate-100 flex items-center gap-2 transform -rotate-12">
                        <span className="text-xl">🛡️</span> <span className="font-bold text-xs text-slate-700 uppercase tracking-wide">Secured</span>
                    </div>
                </div>
                 <div className="absolute inset-0 animate-orbit z-20 pointer-events-none" style={{ animationDelay: '-5s' }}>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-6 bg-white/90 backdrop-blur px-4 py-2.5 rounded-xl shadow-lg border border-slate-100 flex items-center gap-2 transform rotate-12">
                        <span className="text-xl">⚡</span> <span className="font-bold text-xs text-slate-700 uppercase tracking-wide">Optimized</span>
                    </div>
                </div>
                <div className="absolute inset-0 animate-orbit z-20 pointer-events-none" style={{ animationDelay: '-10s' }}>
                    <div className="absolute top-1/2 right-0 translate-x-6 bg-white/90 backdrop-blur px-4 py-2.5 rounded-xl shadow-lg border border-slate-100 flex items-center gap-2 transform rotate-6">
                        <span className="text-xl">💻</span> <span className="font-bold text-xs text-slate-700 uppercase tracking-wide">Web Dev</span>
                    </div>
                </div>

                {/* Main Profile Circle */}
                {/* Main Profile Circle */}
<div className="w-full h-full rounded-full p-2 border border-slate-200 shadow-2xl relative z-10 bg-white animate-float">
    <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 relative">
        {/* UPDATED IMAGE SOURCE */}
        <img 
            src="/profile.png" 
            alt="Junaid Ameer" 
            className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
    </div>
</div>
                
                {/* Decorative Rings */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-primary/20 rounded-full -z-10"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] border border-slate-200 border-dashed rounded-full -z-20 opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};