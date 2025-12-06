import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-surface relative overflow-hidden">
      {/* Background Decor (Subtle Grid) */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Profile
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">About Me</h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Education (Cyber Security) */}
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
            
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
            </div>

            <h3 className="text-xl font-bold text-slate-800 mb-2">Education</h3>
            <p className="text-slate-500 font-medium leading-relaxed mb-4">BS Cyber Security<br/><span className="text-sm text-slate-400">3rd Semester</span></p>
            
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 bg-slate-50 px-3 py-2 rounded-lg w-fit">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                IUB, Pakistan
            </div>
          </div>

          {/* Card 2: The Developer (Web) */}
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
            
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-50 to-teal-100 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
            </div>

            <h3 className="text-xl font-bold text-slate-800 mb-2">Full Stack Dev</h3>
            <p className="text-slate-500 font-medium leading-relaxed mb-4">Building secure, scalable web applications with modern architectures.</p>
            
            <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 rounded bg-accent/10 text-accentDark text-xs font-bold font-mono">React</span>
                <span className="px-2 py-1 rounded bg-accent/10 text-accentDark text-xs font-bold font-mono">Node</span>
                <span className="px-2 py-1 rounded bg-accent/10 text-accentDark text-xs font-bold font-mono">Secure</span>
            </div>
          </div>

          {/* Card 3: Growth (Marketing) */}
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-purple-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
            
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 6l-9.5 9.5-5-5L1 18"></path><path d="M17 6h6v6"></path></svg>
            </div>

            <h3 className="text-xl font-bold text-slate-800 mb-2">Growth Expert</h3>
            <p className="text-slate-500 font-medium leading-relaxed mb-4">Digital Marketer & Content Creator focused on brand scaling.</p>
            
            <div className="flex flex-wrap gap-2">
                 <span className="px-2 py-1 rounded bg-purple-50 text-purple-700 text-xs font-bold font-mono">SEO</span>
                 <span className="px-2 py-1 rounded bg-purple-50 text-purple-700 text-xs font-bold font-mono">Content</span>
                 <span className="px-2 py-1 rounded bg-purple-50 text-purple-700 text-xs font-bold font-mono">Ads</span>
            </div>
          </div>

          {/* Card 4: Tech Stack (Wide) - KEPT THIS ONE AS YOU LIKED IT */}
          <div className="md:col-span-3 bg-slate-900 p-8 sm:p-10 rounded-2xl text-white shadow-2xl shadow-slate-900/20 relative overflow-hidden flex flex-col justify-center group">
             {/* Dynamic Background */}
             <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -mr-20 -mt-20 opacity-50 group-hover:opacity-70 transition-opacity duration-700"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -ml-10 -mb-10 opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>
             
             {/* Content */}
             <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                    <div>
                        <h3 className="text-2xl font-bold flex items-center gap-2">
                           <span className="text-accent text-3xl">&lt;</span>
                           Tech Arsenal
                           <span className="text-accent text-3xl">/&gt;</span>
                        </h3>
                        <p className="text-slate-400 mt-2">The tools I use to build and break things.</p>
                    </div>
                    {/* Decorative line */}
                    <div className="hidden md:block h-px flex-1 bg-gradient-to-r from-slate-800 to-transparent mx-8"></div>
                </div>
                
                <div className="flex flex-wrap gap-3">
                   {['JavaScript', 'React', 'Node.js', 'Python', 'MongoDB', 'Tailwind', 'Pentesting', 'Burp Suite', 'SEO', 'Ads Manager', 'Git'].map((tech) => (
                       <span key={tech} className="px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg text-sm font-medium font-mono transition-all hover:-translate-y-1 cursor-default backdrop-blur-sm">
                           {tech}
                       </span>
                   ))}
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};