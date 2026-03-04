import React, { useState } from 'react';
import { PROJECTS, DOCUMENTATION_TEXT, TECH_STACK } from '../constants';
import { DetailMode } from '../types';
import { Mail, Github, Phone } from 'lucide-react';
import { ProjectGridTile } from './ProjectGridTile';

interface HomeProps {
  onNavigate: (projectId: string, mode?: DetailMode) => void;
}

type Tab = 'WORKS' | 'DOCUMENTATION';

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<Tab>('WORKS');

  const baseIconBtnStyle = "p-2 rounded-[var(--radius-sm)] border border-[var(--color-paper-dark)]/30 text-[var(--color-ink)] transition-all active:scale-90 flex items-center justify-center w-9 h-9 group";

  return (
    <div className={`min-h-[100dvh] w-full flex flex-col transition-colors duration-500 ${activeTab === 'DOCUMENTATION' ? 'bg-[var(--color-paper-dim)]' : 'bg-[var(--color-paper)]'}`}>
       {/* Header */}
       <div className={`flex justify-between items-center px-6 py-6 border-b border-[var(--color-paper-dark)]/10 transition-colors ${activeTab === 'DOCUMENTATION' ? 'bg-[var(--color-paper-dim)]' : 'bg-[var(--color-paper)]'}`}>
          <h1 className="font-mono text-sm font-bold text-[var(--color-ink)] lowercase tracking-tight">ramanadesign.tech</h1>
           <div className="flex items-center gap-1.5">
             <a 
               href="tel:+1234567890" 
               className={`${baseIconBtnStyle} active:bg-[#007AFF] active:border-[#007AFF] active:text-white hover:bg-[#007AFF] hover:border-[#007AFF] hover:text-white`} 
               aria-label="Phone"
             >
               <Phone className="w-4 h-4" />
             </a>
             <a 
               href="https://github.com" 
               target="_blank" 
               rel="noreferrer" 
               className={`${baseIconBtnStyle} active:bg-[#333333] active:border-[#333333] active:text-white hover:bg-[#333333] hover:border-[#333333] hover:text-white`} 
               aria-label="GitHub"
             >
               <Github className="w-4 h-4" />
             </a>
             <a 
               href="mailto:hello@ramanadesign.tech" 
               className={`${baseIconBtnStyle} active:bg-[#007AFF] active:border-[#007AFF] active:text-white hover:bg-[#007AFF] hover:border-[#007AFF] hover:text-white`} 
               aria-label="Email"
             >
               <Mail className="w-4 h-4" />
             </a>
             <a 
               href="https://linkedin.com" 
               target="_blank" 
               rel="noreferrer" 
               className={`${baseIconBtnStyle} active:bg-[#0077b5] active:border-[#0077b5] active:text-white hover:bg-[#0077b5] hover:border-[#0077b5] hover:text-white`} 
               aria-label="LinkedIn"
             >
               <span className="text-[15px] font-bold leading-none opacity-80 active:opacity-100 pb-0.5" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}>in</span>
             </a>
           </div>
       </div>

       {/* Hero - Common */}
       <div className="px-6 pt-8 pb-6 max-w-7xl mx-auto w-full">
          <h2 className="text-3xl font-medium tracking-tight leading-[1.05] mb-4 text-[var(--color-ink)]">Product Design.</h2>
          <p className="text-lg text-[var(--color-ink-subtle)] leading-relaxed max-w-2xl">This portfolio is a product in itself, built to demonstrate technical literacy and systemic thinking.</p>
       </div>

       {/* Sticky Toggle Bar - CENTERED */}
       <div className="sticky top-0 z-30 bg-inherit backdrop-blur-sm border-b border-[var(--color-paper-dark)]/20 px-6 flex justify-center gap-12">
          <button 
            onClick={() => setActiveTab('WORKS')} 
            className={`py-3 text-xs font-bold uppercase tracking-widest relative transition-colors ${activeTab === 'WORKS' ? 'text-[var(--color-ink)]' : 'text-[var(--color-ink)]/40'}`}
          >
            Works
            {activeTab === 'WORKS' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--color-ink)] rounded-full" />}
          </button>
          <button 
            onClick={() => setActiveTab('DOCUMENTATION')} 
            className={`py-3 text-xs font-bold uppercase tracking-widest relative transition-colors ${activeTab === 'DOCUMENTATION' ? 'text-[var(--color-ink)]' : 'text-[var(--color-ink)]/40'}`}
          >
            Documentation
            {activeTab === 'DOCUMENTATION' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--color-ink)] rounded-full" />}
          </button>
       </div>

       {/* Content Area */}
       <div className="flex-1 p-6 pb-24 w-full max-w-7xl mx-auto">
          {activeTab === 'WORKS' ? (
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-in slide-in-from-bottom-2 duration-500">
                {PROJECTS.map((project) => (
                   <ProjectGridTile 
                      key={project.id} 
                      project={project} 
                      onNavigate={(id, mode) => onNavigate(id, mode || 'WRITTEN')}
                   />
                ))}
             </div>
          ) : (
             <div className="animate-in slide-in-from-bottom-2 duration-300 space-y-12 py-4 px-2 max-w-2xl mx-auto">
                <div className="prose prose-stone">
                    <p className="text-base leading-relaxed text-[var(--color-ink)] whitespace-pre-line">{DOCUMENTATION_TEXT.trim()}</p>
                </div>
                
                <div className="space-y-8">
                    {TECH_STACK.map(group => (
                    <div key={group.category}>
                        <h3 className="font-mono text-[10px] uppercase tracking-widest mb-3 opacity-50 border-b border-[var(--color-paper-dark)]/30 pb-2 text-[var(--color-ink)]">{group.category}</h3>
                        <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                            {group.items.map(item => (
                                <li key={item} className="text-sm font-medium text-[var(--color-ink)] opacity-80">{item}</li>
                            ))}
                        </ul>
                    </div>
                    ))}
                </div>
             </div>
          )}
       </div>
    </div>
  );
};