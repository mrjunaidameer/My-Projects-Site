import React, { useState } from 'react';
import { Project } from '../types';

const projectsData: Project[] = [
  {
    id: 1,
    title: "Vulnerax Scanner",
    category: "CyberSecurity",
    description: "Advanced AI-based vulnerability scanner for automated threat detection and reporting.",
    badge: "AI Powered",
    isFeatured: true,
    link: "http://vulnerax.junaidprojects.site"
  },
  {
    id: 2,
    title: "E-Commerce Secure API",
    category: "Web Dev",
    description: "High-performance API architecture.",
  },
  {
    id: 3,
    title: "Packet Analyzer",
    category: "CyberSecurity",
    description: "Network traffic monitoring tool.",
  },
  {
    id: 4,
    title: "Growth Dashboard",
    category: "Commercial",
    description: "Marketing analytics platform.",
  }
];

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'CyberSecurity' | 'Web Dev' | 'Commercial'>('All');

  const filteredProjects = projectsData.filter(p => filter === 'All' || p.category === filter);
  
  const tabs = ['All', 'CyberSecurity', 'Web Dev', 'Commercial'];

  return (
    <section id="projects" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <span className="text-primary font-bold text-sm uppercase tracking-widest">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-4">Featured Projects</h2>
            <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto">Secure. Scalable. Innovative.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    onClick={() => setFilter(tab as any)}
                    className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                        filter === tab 
                        ? 'bg-slate-900 text-white shadow-lg' 
                        : 'bg-white text-slate-500 hover:bg-slate-50 border border-slate-200'
                    }`}
                >
                    {tab}
                </button>
            ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
                <div 
                    key={project.id}
                    className={`rounded-2xl overflow-hidden transition-all duration-300 group relative border ${
                        project.isFeatured 
                        ? 'md:col-span-2 bg-slate-900 border-slate-900 text-white shadow-2xl' 
                        : 'card-modern'
                    }`}
                >
                    {/* Card Content Wrapper */}
                    <div className="h-full flex flex-col items-start justify-between relative z-10">

                        {/* Background Gradient for Featured */}
                        {project.isFeatured && (
                            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 -z-10"></div>
                        )}

                        {/* --- PREVIEW IMAGE FOR VULNERAX --- */}
                        {project.title === "Vulnerax Scanner" && (
                            <div className="w-full aspect-video overflow-hidden mb-6 rounded-lg border border-slate-700/50 shadow-2xl relative group-hover:scale-[1.02] transition-transform duration-300">
                                <img 
                                    src="/junaidameerproject.png" 
                                    alt="Vulnerax Scanner Preview" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        )}

                        <div className="w-full px-8 pb-8 pt-2">
                            {/* Header (Tags, Title, Desc) */}
                            <div className="flex justify-between items-start mb-6">
                                <span className={`text-xs font-bold font-mono px-3 py-1 rounded uppercase tracking-wide ${project.isFeatured ? 'bg-primary text-white' : 'bg-slate-100 text-slate-500'}`}>
                                    {project.category}
                                </span>
                                {project.badge && (
                                    <span className="flex h-3 w-3 relative">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                                    </span>
                                )}
                            </div>
                            
                            <h3 className={`text-2xl font-bold mb-3 ${project.isFeatured ? 'text-white' : 'text-slate-800'}`}>
                                {project.title}
                            </h3>
                            
                            <p className={`mb-8 font-medium leading-relaxed ${project.isFeatured ? 'text-slate-300 max-w-lg text-lg' : 'text-slate-500'}`}>
                                {project.description}
                            </p>
                        </div>

                        {/* Link / Button */}
                        <div className="px-8 pb-8">
                            {project.link ? (
                                <a 
                                    href={project.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-transform hover:-translate-y-1 ${
                                        project.isFeatured 
                                        ? 'bg-accent text-white shadow-lg shadow-accent/20' 
                                        : 'bg-slate-900 text-white shadow-lg shadow-slate-900/20'
                                    }`}
                                >
                                    View Live
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                </a>
                            ) : (
                                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 text-slate-400 font-bold text-xs uppercase tracking-wide">
                                    <span>🚀 Coming Soon</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};