import React, { useState } from 'react';
import { PROJECTS } from '../../constants/siteData';
import { Mail, Github, Phone, Sun, Moon } from 'lucide-react';
import { ProjectGridTile } from '../ui/Card';
import { useTheme } from '../../hooks/useTheme';

interface HomeProps {
  onNavigate: (projectId: string) => void;
  onNavigateToDocumentation: () => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate, onNavigateToDocumentation }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();

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

  // Increased size to w-11 h-11 (44px) for accessibility
  const baseIconBtnStyle = "p-2 rounded-[var(--radius-sm)] border border-[var(--color-paper-dark)]/30 text-[var(--color-ink)] transition-all active:scale-90 flex items-center justify-center w-11 h-11 group hover:bg-[#2B6B7C] hover:text-white hover:border-[#2B6B7C] active:bg-[#2B6B7C] active:text-white active:border-[#2B6B7C]";

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[var(--color-ink)] focus:text-[var(--color-paper)] focus:rounded-[var(--radius-sm)] focus:font-bold">
        Skip to content
      </a>
      <main id="main-content" className="min-h-[100dvh] w-full flex flex-col bg-[var(--color-paper)]">
         {/* Feedback Toast */}
         {copiedId && (
           <div className="fixed bottom-8 left-1/2 -translate-x-1/2 px-4 py-2 bg-[var(--color-ink)] text-[var(--color-paper)] text-xs font-mono uppercase tracking-widest rounded-[var(--radius-sm)] shadow-lg z-50 animate-in fade-in slide-in-from-bottom-2 duration-300 pointer-events-none">
             {getFeedbackText(copiedId)}
           </div>
         )}
  
         {/* Header */}
         <div className="flex justify-between items-start px-6 py-6 border-b border-[var(--color-paper-dark)]/10 bg-[var(--color-paper)]">
            <h1 className="font-mono text-sm font-bold text-[var(--color-ink)] lowercase tracking-tight pt-2">ramanadesign.tech</h1>
             <div className="flex flex-col items-end gap-3">
               <div className="flex items-center gap-1.5">
                 <a 
                   href="tel:+1234567890" 
                   className={baseIconBtnStyle} 
                   aria-label="Phone"
                   onClick={(e) => handleCopy(e, '+1234567890', 'phone')}
                 >
                   <Phone className="w-5 h-5" />
                 </a>
                 <a 
                   href="https://github.com" 
                   target="_blank" 
                   rel="noreferrer" 
                   className={baseIconBtnStyle} 
                   aria-label="GitHub"
                 >
                   <Github className="w-5 h-5" />
                 </a>
                 <a 
                   href="mailto:hello@ramanadesign.tech" 
                   className={baseIconBtnStyle} 
                   aria-label="Email"
                   onClick={(e) => handleCopy(e, 'hello@ramanadesign.tech', 'email')}
                 >
                   <Mail className="w-5 h-5" />
                 </a>
                 <a 
                   href="https://linkedin.com" 
                   target="_blank" 
                   rel="noreferrer" 
                   className={baseIconBtnStyle} 
                   aria-label="LinkedIn"
                 >
                   <span className="text-[16px] font-bold leading-none pb-0.5" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}>in</span>
                 </a>
               </div>
               
               {/* Theme Toggle Bar */}
               <div className="flex items-center gap-1 self-end mt-1 mr-3">
                 <Sun className="w-4 h-4 text-[var(--color-ink)]" />
                 <button
                   onClick={toggleTheme}
                   className="w-12 h-12 flex items-center justify-center cursor-pointer group"
                   aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                 >
                   <div className="w-8 h-4 border border-[var(--color-ink)] rounded-[2px] relative flex items-center transition-opacity group-hover:opacity-80">
                     <div className={`absolute w-2.5 h-2.5 bg-[var(--color-ink)] shadow-sm transition-transform duration-200 ease-out ${theme === 'dark' ? 'translate-x-[18px]' : 'translate-x-[3px]'}`} />
                   </div>
                 </button>
                 <Moon className="w-4 h-4 text-[var(--color-ink)]" />
               </div>
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
                  className="px-8 py-3 text-xs font-bold uppercase tracking-wider border border-[var(--color-ink)] text-[var(--color-ink)] rounded-[var(--radius-md)] hover:bg-[var(--color-ink)] hover:border-[var(--color-ink)] hover:text-[var(--color-on-active)] active:bg-[var(--color-ink)] active:border-[var(--color-ink)] active:text-[var(--color-on-active)] active:scale-95 transition-all cursor-pointer"
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
      </main>
    </>
  );
};