import React, { useState } from 'react';
import { ContactMode } from '../types';

export const Contact: React.FC = () => {
  const [mode, setMode] = useState<ContactMode>('whatsapp');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (mode === 'whatsapp') {
      const text = `Hi Junaid, my name is ${formData.name}. ${formData.message}`;
      const url = `https://wa.me/923058333729?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank');
    } else {
      const subject = `Portfolio Contact from ${formData.name}`;
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
      window.location.href = `mailto:thejunaidinsights@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
  };

  return (
    <section id="contact" className="py-24 bg-surface relative overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
          
          {/* Left Info - Premium Dark Card */}
          <div className="lg:w-2/5 bg-slate-900 text-white p-10 lg:p-14 relative overflow-hidden flex flex-col justify-between">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -mr-10 -mt-10"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -ml-10 -mb-10"></div>

            <div className="relative z-10">
                <span className="text-accent font-bold text-xs uppercase tracking-widest mb-4 block">Get in Touch</span>
                <h2 className="text-4xl font-bold leading-tight mb-6">Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Extraordinary.</span></h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                  Whether you need a secure audit, a full-stack web application, or growth strategy—I'm ready to collaborate.
                </p>

                <div className="space-y-6">
                    <div className="flex items-center gap-4 group">
                        <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white group-hover:bg-primary transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        </div>
                        <div>
                            <h4 className="font-bold text-sm text-slate-300">Email Me</h4>
                            <a href="mailto:thejunaidinsights@gmail.com" className="text-white hover:text-accent transition-colors font-medium">thejunaidinsights@gmail.com</a>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 group">
                        <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white group-hover:bg-green-500 transition-colors">
                             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        </div>
                        <div>
                            <h4 className="font-bold text-sm text-slate-300">WhatsApp</h4>
                            <a href="https://wa.me/923058333729" target="_blank" className="text-white hover:text-accent transition-colors font-medium">Direct Message</a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="relative z-10 mt-12">
                <p className="text-slate-500 text-sm">Based in Bahawalpur, PK. Available Globally.</p>
            </div>
          </div>

          {/* Right Form - Clean White */}
          <div className="lg:w-3/5 bg-white p-10 lg:p-14">
             
             {/* Toggle Switch */}
             <div className="flex justify-start mb-8">
                 <div className="bg-slate-100 p-1.5 rounded-xl inline-flex relative border border-slate-200">
                     <button 
                         onClick={() => setMode('whatsapp')}
                         className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 ${mode === 'whatsapp' ? 'bg-white text-slate-900 shadow-md transform scale-105' : 'text-slate-500 hover:text-slate-700'}`}
                     >
                         <span className="flex items-center gap-2">
                             <span className={`w-2 h-2 rounded-full ${mode === 'whatsapp' ? 'bg-green-500' : 'bg-slate-300'}`}></span>
                             WhatsApp
                         </span>
                     </button>
                     <button 
                         onClick={() => setMode('email')}
                         className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 ${mode === 'email' ? 'bg-white text-slate-900 shadow-md transform scale-105' : 'text-slate-500 hover:text-slate-700'}`}
                     >
                        <span className="flex items-center gap-2">
                             <span className={`w-2 h-2 rounded-full ${mode === 'email' ? 'bg-primary' : 'bg-slate-300'}`}></span>
                             Email
                         </span>
                     </button>
                 </div>
             </div>

             <form onSubmit={handleSubmit} className="space-y-6">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div>
                         <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Your Name</label>
                         <input 
                             type="text" 
                             name="name" 
                             required
                             value={formData.name}
                             onChange={handleChange}
                             className="input-modern w-full px-4 py-3.5 rounded-xl bg-slate-50/50 text-slate-900 outline-none focus:bg-white transition-all"
                             placeholder="Junaid Ameer"
                         />
                     </div>
                     <div className={`transition-all duration-300 ${mode === 'email' ? 'opacity-100' : 'opacity-50 pointer-events-none'}`}>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Your Email</label>
                         <input 
                             type="email" 
                             name="email"
                             required={mode === 'email'}
                             disabled={mode !== 'email'}
                             value={formData.email}
                             onChange={handleChange}
                             className="input-modern w-full px-4 py-3.5 rounded-xl bg-slate-50/50 text-slate-900 outline-none focus:bg-white transition-all"
                             placeholder="junaid@example.com"
                         />
                     </div>
                 </div>

                 <div>
                     <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Message</label>
                     <textarea 
                         name="message"
                         required
                         rows={4}
                         value={formData.message}
                         onChange={handleChange}
                         className="input-modern w-full px-4 py-3.5 rounded-xl bg-slate-50/50 text-slate-900 outline-none focus:bg-white transition-all resize-none"
                         placeholder="Tell me about your project needs..."
                     />
                 </div>

                 <button 
                     type="submit"
                     className={`w-full py-4 rounded-xl font-bold text-white text-base mt-2 transition-all active:scale-[0.99] shadow-lg flex items-center justify-center gap-2 ${
                         mode === 'whatsapp' 
                         ? 'bg-[#25D366] hover:bg-[#20bd5a] shadow-green-500/25' 
                         : 'btn-primary'
                     }`}
                 >
                     {mode === 'whatsapp' ? (
                        <>Start WhatsApp Chat <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></>
                     ) : (
                        <>Send Inquiry <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></>
                     )}
                 </button>
             </form>
          </div>
        </div>
      </div>
    </section>
  );
};