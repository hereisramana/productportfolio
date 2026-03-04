import React, { useEffect } from 'react';
import { DOCUMENTATION_TEXT, TECH_STACK } from '../../constants/siteData';
import { ArrowLeft } from 'lucide-react';

interface DocumentationProps {
  onBack: () => void;
}

export const Documentation: React.FC<DocumentationProps> = ({ onBack }) => {
  useEffect(() => {
     window.scrollTo(0,0);
  }, []);

  return (
    <div className="min-h-[100dvh] w-full max-w-2xl mx-auto border-x border-[var(--color-paper-dark)]/20 shadow-2xl bg-[var(--color-paper)] flex flex-col font-sans overflow-x-hidden">
      {/* Header */}
      <header className="relative h-16 shrink-0 border-b border-[var(--color-paper-dark)]/20 px-4 flex items-center justify-between bg-[var(--color-paper)] z-50">
        
        {/* Absolute Centered Title Group */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none w-full max-w-[60%]">
           <h1 className="text-xs uppercase font-bold tracking-[0.2em] line-clamp-1 text-center w-full">ramanadesign.tech-a case study</h1>
        </div>

        {/* Left Action */}
        <button onClick={onBack} className="relative z-10 flex items-center gap-2 px-3 py-1.5 rounded-[var(--radius-md)] border border-[var(--color-ink)] text-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:border-[var(--color-ink)] hover:text-white active:bg-[var(--color-ink)] active:border-[var(--color-ink)] active:text-white transition-all cursor-pointer group">
          <ArrowLeft className="w-4 h-4" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Back</span>
        </button>
        
        {/* Right Action Spacer */}
        <div className="w-8 relative z-10" />
      </header>

      {/* Content */}
      <div className="flex-1 overflow-hidden relative bg-[var(--color-paper)]">
           <div className="h-full overflow-y-auto bg-[var(--color-paper-dim)] overflow-x-hidden">
              <div className="p-6 pb-24 space-y-12 max-w-full">
                 
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
           </div>
      </div>
    </div>
  );
};
