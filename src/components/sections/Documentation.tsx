import React, { useEffect } from 'react';
import { TECH_STACK } from '../../constants/siteData';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

interface DocumentationProps {
  onBack: () => void;
}

export const Documentation: React.FC<DocumentationProps> = ({ onBack }) => {
  useEffect(() => {
     window.scrollTo(0,0);
  }, []);

  const philosophy = "The interface follows a \"Calm Technology\" ethos. It avoids unnecessary animation, high-contrast jarring elements, and \"scroll-jacking\". Every interaction is intentional. The visual language (\"Industrial Clay\") uses low-saturation, matte colors to reduce eye strain and focus attention on the content.";
  
  const technical = "Uses the browser's native History API to manage view states, allowing for deep-linking and back-button navigation without a heavy router library. Built mobile-first with a unified component architecture that adapts to viewport constraints without code duplication.";

  return (
    <main className="min-h-[100dvh] w-full max-w-2xl mx-auto border-x border-[var(--color-paper-dark)]/20 shadow-2xl bg-[var(--color-paper)] flex flex-col font-sans overflow-x-hidden">
      {/* Header */}
      <header className="relative h-16 shrink-0 border-b border-[var(--color-paper-dark)]/20 px-4 flex items-center justify-between bg-[var(--color-paper)] z-50">
        
        {/* Absolute Centered Title Group */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none w-full max-w-[60%]">
           <h1 className="text-xs uppercase font-bold tracking-[0.2em] line-clamp-1 text-center w-full">ramanadesign.tech</h1>
        </div>

        {/* Left Action */}
        <button onClick={onBack} className="relative z-10 flex items-center gap-2 px-3 py-1.5 rounded-[var(--radius-md)] border border-[var(--color-ink)] text-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:border-[var(--color-ink)] hover:text-[var(--color-on-active)] active:bg-[var(--color-ink)] active:border-[var(--color-ink)] active:text-[var(--color-on-active)] transition-all cursor-pointer group">
          <ArrowLeft className="w-4 h-4" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Back</span>
        </button>
        
        {/* Right Action */}
        <a 
            href="https://github.com/bvvramana/portfolio" 
            target="_blank" 
            rel="noreferrer" 
            className="relative z-10 flex items-center gap-1.5 px-3 py-1.5 border border-[#2B6B7C] text-[#2B6B7C] rounded-[var(--radius-md)] transition-colors hover:bg-[#2B6B7C] hover:text-white active:bg-[#2B6B7C] active:text-white active:scale-95"
        >
             <span className="text-[9px] font-bold uppercase tracking-widest">Source</span>
             <ArrowUpRight className="w-3 h-3" />
        </a>
      </header>

      {/* Content */}
      <div className="flex-1 overflow-hidden relative bg-[var(--color-paper)]">
           <div className="h-full overflow-y-auto bg-[var(--color-paper-dim)] overflow-x-hidden">
              <div className="p-6 pb-24 space-y-12 max-w-full">
                  <div className="pb-8 border-b border-[var(--color-paper-dark)]/50">
                     <h2 className="text-3xl font-medium tracking-tight mb-4 leading-tight text-[var(--color-ink)]">
                      Portfolio Case Study
                     </h2>
                     <p className="text-lg text-[var(--color-ink-subtle)] font-light leading-relaxed">
                       Engineered as a product, not just a static collection of images.
                     </p>
                  </div>

                  {/* Hero Image Placeholder */}
                  <div className="w-full aspect-video bg-[var(--color-paper-dark)]/20 rounded-[var(--radius-md)] overflow-hidden relative">
                    <img 
                        src="https://picsum.photos/seed/portfolio/1200/600?grayscale" 
                        alt="Portfolio Architecture"
                        className="w-full h-full object-cover opacity-80"
                        referrerPolicy="no-referrer"
                    />
                  </div>

                  <section>
                     <h3 className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-ink)] opacity-40 mb-4 border-b border-[var(--color-paper-dark)]/30 pb-2">System Context</h3>
                     <p className="text-base leading-relaxed text-[var(--color-ink)] font-light text-balance">{philosophy}</p>
                  </section>

                  <section className="space-y-8">
                     <h3 className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-ink)] opacity-40 border-b border-[var(--color-paper-dark)]/30 pb-2">Architecture</h3>
                     <div className="space-y-6">
                        <div className="space-y-2">
                           <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--color-ink)] opacity-50">Technical Implementation</span>
                           <p className="text-base leading-relaxed text-[var(--color-ink-subtle)] font-light">{technical}</p>
                        </div>
                        
                        <div className="space-y-2">
                           <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--color-ink)] opacity-50">Tech Stack</span>
                           <div className="grid grid-cols-2 gap-4 pt-2">
                              {TECH_STACK.map(group => (
                                <div key={group.category}>
                                    <h4 className="text-[10px] font-bold uppercase text-[var(--color-ink)] mb-1">{group.category}</h4>
                                    <ul className="list-disc list-inside">
                                        {group.items.map(item => (
                                            <li key={item} className="text-xs text-[var(--color-ink-subtle)] font-mono">{item}</li>
                                        ))}
                                    </ul>
                                </div>
                              ))}
                           </div>
                        </div>
                     </div>
                  </section>

                  <section>
                     <h3 className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-ink)] opacity-40 mb-4 border-b border-[var(--color-paper-dark)]/30 pb-2">Interaction Logic</h3>
                     <div className="pl-4 border-l-[3px] border-[#2B6B7C]/40">
                        <p className="text-lg leading-relaxed text-[var(--color-ink)] italic font-light">
                           "Calm Technology" ethos. Avoids unnecessary animation. Uses CSS transforms for 60fps performance.
                        </p>
                     </div>
                  </section>

                  <section>
                     <h3 className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-ink)] opacity-40 mb-4 border-b border-[var(--color-paper-dark)]/30 pb-2">Outcome</h3>
                     <p className="text-sm leading-relaxed text-[var(--color-paper)] font-medium bg-[var(--color-ink)] p-6 rounded-[var(--radius-md)]">
                        Optimized for sub-second load times and high accessibility standards (WCAG AA).
                     </p>
                  </section>

                  {/* Bottom Actions */}
                  <div className="flex items-center justify-between pt-8 border-t border-[var(--color-paper-dark)]/30">
                    <button onClick={onBack} className="flex items-center gap-2 px-3 py-1.5 rounded-[var(--radius-md)] border border-[var(--color-ink)] text-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:border-[var(--color-ink)] hover:text-[var(--color-on-active)] active:bg-[var(--color-ink)] active:border-[var(--color-ink)] active:text-[var(--color-on-active)] transition-all cursor-pointer group">
                      <ArrowLeft className="w-4 h-4" />
                      <span className="text-[10px] font-bold uppercase tracking-wider">Back</span>
                    </button>

                    <a 
                        href="https://github.com/bvvramana/portfolio" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="flex items-center gap-1.5 px-3 py-1.5 border border-[#2B6B7C] text-[#2B6B7C] rounded-[var(--radius-md)] transition-colors hover:bg-[#2B6B7C] hover:text-white active:bg-[#2B6B7C] active:text-white active:scale-95"
                    >
                        <span className="text-[10px] font-bold uppercase tracking-widest">Source</span>
                        <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
              </div>
           </div>
      </div>
    </main>
  );
};
