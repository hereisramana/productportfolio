import React, { useEffect } from 'react';
import { Project } from '../../types';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

interface UnifiedProjectDetailProps {
  project: Project;
  onBack: () => void;
}

export const UnifiedProjectDetail: React.FC<UnifiedProjectDetailProps> = ({ project, onBack }) => {
  useEffect(() => {
     window.scrollTo(0,0);
  }, []);

  return (
    <main className="min-h-[100dvh] w-full max-w-2xl mx-auto border-x border-[var(--color-paper-dark)]/20 shadow-2xl bg-[var(--color-paper)] flex flex-col font-sans overflow-x-hidden">
      {/* Header */}
      <header className="relative h-16 shrink-0 border-b border-[var(--color-paper-dark)]/20 px-4 flex items-center justify-between bg-[var(--color-paper)] z-50">
        
        {/* Absolute Centered Title Group */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none w-full max-w-[60%]">
           <h1 className="text-xs uppercase font-bold tracking-[0.2em] line-clamp-1 text-center w-full">{project.title}</h1>
        </div>

        {/* Left Action */}
        <button onClick={onBack} className="relative z-10 flex items-center gap-2 px-3 py-1.5 rounded-[var(--radius-md)] border border-[var(--color-ink)] text-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:border-[var(--color-ink)] hover:text-[var(--color-on-active)] active:bg-[var(--color-ink)] active:border-[var(--color-ink)] active:text-[var(--color-on-active)] transition-all cursor-pointer group">
          <ArrowLeft className="w-4 h-4" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Back</span>
        </button>
        
        {/* Right Action */}
        {project.liveUrl ? (
          <a 
            href={project.liveUrl} 
            target="_blank" 
            rel="noreferrer" 
            className="relative z-10 flex items-center gap-1.5 px-3 py-1.5 border border-[#2B6B7C] text-[#2B6B7C] rounded-[var(--radius-md)] transition-colors hover:bg-[#2B6B7C] hover:text-white active:bg-[#2B6B7C] active:text-white active:scale-95"
          >
             <span className="text-[9px] font-bold uppercase tracking-widest">Prototype</span>
             <ArrowUpRight className="w-3 h-3" />
          </a>
        ) : <div className="w-8 relative z-10" />}
      </header>

      {/* Content */}
      <div className="flex-1 overflow-hidden relative bg-[var(--color-paper)]">
           <div className="h-full overflow-y-auto bg-[var(--color-paper-dim)] overflow-x-hidden">
              <div className="p-6 pb-24 space-y-12 max-w-full">
                  <div className="pb-8 border-b border-[var(--color-paper-dark)]/50">
                     <h2 className="text-3xl font-medium tracking-tight mb-4 leading-tight text-[var(--color-ink)]">
                      {project.title}
                     </h2>
                     <p className="text-lg text-[var(--color-ink-subtle)] font-light leading-relaxed">{project.tagline}</p>
                  </div>

                  {/* Hero Image Placeholder */}
                  <div className="w-full aspect-video bg-[var(--color-paper-dark)]/20 rounded-[var(--radius-md)] overflow-hidden relative">
                    <img 
                        src={project.heroUrl} 
                        alt={`${project.title} Hero`}
                        className="w-full h-full object-cover opacity-80"
                        referrerPolicy="no-referrer"
                    />
                  </div>

                  <section>
                     <h3 className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-ink)] opacity-40 mb-4 border-b border-[var(--color-paper-dark)]/30 pb-2">System Context</h3>
                     <p className="text-base leading-relaxed text-[var(--color-ink)] font-light text-balance">{project.description}</p>
                  </section>

                  <section className="space-y-8">
                     <h3 className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-ink)] opacity-40 border-b border-[var(--color-paper-dark)]/30 pb-2">Architecture</h3>
                     {/* Flattened content - removed card styling */}
                     <div className="space-y-6">
                        <div className="space-y-2">
                           <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--color-ink)] opacity-50">The Challenge</span>
                           <p className="text-base leading-relaxed text-[var(--color-ink-subtle)] font-light">{project.challenge}</p>
                        </div>
                        <div className="space-y-2">
                           <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--color-ink)] opacity-50">The Resolution</span>
                           <p className="text-base leading-relaxed text-[var(--color-ink-subtle)] font-light">{project.solution}</p>
                        </div>
                     </div>
                  </section>

                  <section>
                     <h3 className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-ink)] opacity-40 mb-4 border-b border-[var(--color-paper-dark)]/30 pb-2">Interaction Logic</h3>
                     <div className="pl-4 border-l-[3px] border-[#2B6B7C]/40">
                        <p className="text-lg leading-relaxed text-[var(--color-ink)] italic font-light">{project.interactionNotes}</p>
                     </div>
                  </section>

                  <section>
                     <h3 className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-ink)] opacity-40 mb-4 border-b border-[var(--color-paper-dark)]/30 pb-2">Outcome</h3>
                     {/* Matching Desktop Outcome Style: High Contrast */}
                     <p className="text-sm leading-relaxed text-[var(--color-paper)] font-medium bg-[var(--color-ink)] p-6 rounded-[var(--radius-md)]">{project.outcome}</p>
                  </section>

                  {/* Bottom Actions */}
                  <div className="flex items-center justify-between pt-8 border-t border-[var(--color-paper-dark)]/30">
                    <button onClick={onBack} className="flex items-center gap-2 px-3 py-1.5 rounded-[var(--radius-md)] border border-[var(--color-ink)] text-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:border-[var(--color-ink)] hover:text-[var(--color-on-active)] active:bg-[var(--color-ink)] active:border-[var(--color-ink)] active:text-[var(--color-on-active)] transition-all cursor-pointer group">
                      <ArrowLeft className="w-4 h-4" />
                      <span className="text-[10px] font-bold uppercase tracking-wider">Back</span>
                    </button>

                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="flex items-center gap-1.5 px-3 py-1.5 border border-[#2B6B7C] text-[#2B6B7C] rounded-[var(--radius-md)] transition-colors hover:bg-[#2B6B7C] hover:text-white active:bg-[#2B6B7C] active:text-white active:scale-95"
                      >
                        <span className="text-[10px] font-bold uppercase tracking-widest">Prototype</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                  </div>
              </div>
           </div>
      </div>
    </main>
  );
};