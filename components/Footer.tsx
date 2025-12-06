import React from 'react';

export const Footer: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-slate-950 text-white pt-20 pb-8 border-t border-slate-900 relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-20">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    
                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-2 space-y-4">
                        <a href="#" className="text-3xl font-bold font-heading tracking-tight text-white">
                            Junaid<span className="text-primary">.Dev</span>
                        </a>
                        <p className="text-slate-400 leading-relaxed max-w-sm">
                            Bridging the gap between secure architectures and high-performance web applications. 
                            Let's build the future of the web, securely.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="space-y-4">
                        <h4 className="font-bold text-lg text-white">Navigation</h4>
                        <ul className="space-y-2">
                            <li><a href="#home" className="text-slate-400 hover:text-primary transition-colors">Home</a></li>
                            <li><a href="#about" className="text-slate-400 hover:text-primary transition-colors">About</a></li>
                            <li><a href="#projects" className="text-slate-400 hover:text-primary transition-colors">Projects</a></li>
                            <li><a href="#contact" className="text-slate-400 hover:text-primary transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div className="space-y-4">
                        <h4 className="font-bold text-lg text-white">Connect</h4>
                        <div className="flex gap-4">
                             <a 
                                href="https://www.linkedin.com/in/junaidameercreative?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-slate-800/50 flex items-center justify-center text-slate-300 hover:bg-[#0077b5] hover:text-white transition-all transform hover:-translate-y-1 border border-slate-700"
                                title="LinkedIn"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            </a>
                            <a 
                                href="https://instagram.com/junaidameer_insta" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-slate-800/50 flex items-center justify-center text-slate-300 hover:bg-[#E1306C] hover:text-white transition-all transform hover:-translate-y-1 border border-slate-700"
                                title="Instagram"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Junaid Ameer. All rights reserved.</p>
                    
                    <button 
                        onClick={scrollToTop}
                        className="flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-white transition-colors group"
                    >
                        Back to Top
                        <span className="p-1.5 rounded-full bg-slate-800 group-hover:bg-primary transition-colors">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
                        </span>
                    </button>
                </div>
            </div>
        </footer>
    );
};