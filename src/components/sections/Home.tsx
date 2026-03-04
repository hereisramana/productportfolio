import React, { useState } from 'react';
import { PROJECTS } from '../../constants/siteData';
import { Mail, Github, Phone } from 'lucide-react';
import { ProjectGridTile } from '../ui/Card';

interface HomeProps {
  onNavigate: (projectId: string) => void;
  onNavigateToDocumentation: () => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate, onNavigateToDocumentation }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (e: React.MouseEvent, text: string, id: string) => {
    // Check if desktop (md breakpoint is usually 768px)
    if (window.matchMedia('(min-width: 768px)').matches) {
      e.preventDefault();
      navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  const getFeedbackText = (id: string) => {
    if (id === 'phone') return 'Phone number copied';
    if (id === 'email') return 'Email address copied';
    return 'Copied to clipboard';
  };

  const baseIconBtnStyle = "p-2 rounded-[var(--radius-sm)] border border-[var(--color-paper-dark)]/30 text-[var(--color-ink)] transition-all active:scale-90 flex items-center justify-center w-9 h-9 group hover:bg-[#2B6B7C] hover:text-white hover:border-[#2B6B7C] active:bg-[#2B6B7C] active:text-white active:border-[#2B6B7C]";

  return (
    <div className="min-h-[100dvh] w-full flex flex-col bg-[var(--color-paper)]">
       {/* Feedback Toast */}
       {copiedId && (
         <div className="fixed bottom-8 left-1/2 -translate-x-1/2 px-4 py-2 bg-[var(--color-ink)] text-[var(--color-paper)] text-xs font-mono uppercase tracking-widest rounded-[var(--radius-sm)] shadow-lg z-50 animate-in fade-in slide-in-from-bottom-2 duration-300 pointer-events-none">
           {getFeedbackText(copiedId)}
         </div>
       )}

       {/* Header */}
       <div className="flex justify-between items-center px-6 py-6 border-b border-[var(--color-paper-dark)]/10 bg-[var(--color-paper)]">
          <h1 className="font-mono text-sm font-bold text-[var(--color-ink)] lowercase tracking-tight">ramanadesign.tech</h1>
           <div className="flex items-center gap-1.5">
             <a 
               href="tel:+1234567890" 
               className={baseIconBtnStyle} 
               aria-label="Phone"
               onClick={(e) => handleCopy(e, '+1234567890', 'phone')}
             >
               <Phone className="w-4 h-4" />
             </a>
             <a 
               href="https://github.com" 
               target="_blank" 
               rel="noreferrer" 
               className={baseIconBtnStyle} 
               aria-label="GitHub"
             >
               <Github className="w-4 h-4" />
             </a>
             <a 
               href="mailto:hello@ramanadesign.tech" 
               className={baseIconBtnStyle} 
               aria-label="Email"
               onClick={(e) => handleCopy(e, 'hello@ramanadesign.tech', 'email')}
             >
               <Mail className="w-4 h-4" />
             </a>
             <a 
               href="https://linkedin.com" 
               target="_blank" 
               rel="noreferrer" 
               className={baseIconBtnStyle} 
               aria-label="LinkedIn"
             >
               <span className="text-[15px] font-bold leading-none pb-0.5" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}>in</span>
             </a>
           </div>
       </div>

       {/* Hero - Common */}
       <div className="px-6 pt-12 pb-12 max-w-7xl mx-auto w-full">
          <div className="p-8 gradient-border-teal">
              <h2 className="text-6xl font-medium tracking-tight leading-[1.05] mb-6 text-[var(--color-ink)]">Product Design.</h2>
              <p className="text-xl text-[var(--color-ink-subtle)] leading-relaxed max-w-2xl mb-8">
                This portfolio is a product in itself, built to demonstrate technical literacy and systemic thinking.
              </p>
              <button 
                onClick={onNavigateToDocumentation}
                className="px-8 py-3 text-xs font-bold uppercase tracking-wider border border-[var(--color-ink)] text-[var(--color-ink)] rounded-[var(--radius-md)] hover:bg-[var(--color-ink)] hover:border-[var(--color-ink)] hover:text-white active:bg-[var(--color-ink)] active:border-[var(--color-ink)] active:text-white active:scale-95 transition-all cursor-pointer"
              >
                case study of this site
              </button>
          </div>
       </div>

       {/* Content Area */}
       <div className="flex-1 p-6 pb-24 w-full max-w-7xl mx-auto">
             <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--color-ink)] mb-6 opacity-50">Projects</h3>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-in slide-in-from-bottom-2 duration-500">
                {PROJECTS.map((project) => (
                   <ProjectGridTile 
                      key={project.id} 
                      project={project} 
                      onNavigate={onNavigate}
                   />
                ))}
             </div>
       </div>
    </div>
  );
};