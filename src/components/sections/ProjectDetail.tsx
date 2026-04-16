import React, { useEffect } from 'react';
import { Project } from '../../types';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';


interface UnifiedProjectDetailProps {
  project: Project;
  onBack: () => void;
}

export const UnifiedProjectDetail: React.FC<UnifiedProjectDetailProps> = ({ project, onBack }) => {
  const { theme } = useTheme();
  useEffect(() => {
    window.scrollTo(0, 0);
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
        <button onClick={onBack} className="relative z-10 flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-ink)] text-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-[var(--color-on-active)] transition-all cursor-pointer group">
          <ArrowLeft className="w-4 h-4" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Back</span>
        </button>

        {/* Right Action */}
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="relative z-10 flex items-center gap-1.5 px-4 py-2 bg-[var(--color-ink)] text-[var(--color-paper)] rounded-full transition-all hover:scale-[1.02] active:scale-95 shadow-lg"
          >
            <span className="text-[9px] font-bold uppercase tracking-widest">Live Prototype</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        ) : <div className="w-8 relative z-10" />}
      </header>

      {/* Content */}
      <div className="flex-1 overflow-hidden relative bg-[var(--color-paper)]">
        <div className="h-full overflow-y-auto bg-[var(--color-paper)] overflow-x-hidden">
          <div className="p-6 md:p-12 pb-24 space-y-16 max-w-full">
            <div className="pb-8 border-b border-[var(--color-ink)]/10">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight text-[var(--color-ink)] uppercase">
                {project.title}
              </h2>
              <p className="text-xl text-[var(--color-ink-subtle)] font-mono leading-relaxed">{project.tagline}</p>
            </div>

            {/* Hero Image */}
            <div className="w-full aspect-video bg-[var(--color-paper-dim)] rounded-[var(--radius-lg)] md:rounded-[32px] overflow-hidden relative border border-[var(--color-ink)]/5">
              <img
                src={theme === 'dark' && project.heroUrlLight ? project.heroUrlLight : project.heroUrl}
                alt={`${project.title} Hero`}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>


            <section>
              <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink)] opacity-40 mb-6 border-b border-[var(--color-ink)]/10 pb-2">System Context</h3>
              <p className="text-lg leading-relaxed text-[var(--color-ink)] font-normal text-balance">{project.description}</p>
            </section>

            <section className="space-y-10">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink)] opacity-40 border-b border-[var(--color-ink)]/10 pb-2">Architecture</h3>
              <div className="space-y-8">
                <div className="space-y-3">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--color-ink)] opacity-50 px-2 py-1 bg-[var(--color-ink)]/5 rounded-sm">The Challenge</span>
                  <p className="text-lg leading-relaxed text-[var(--color-ink-subtle)] font-normal">{project.challenge}</p>
                </div>
                <div className="space-y-3">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--color-ink)] opacity-50 px-2 py-1 bg-[var(--color-ink)]/5 rounded-sm">The Resolution</span>
                  <p className="text-lg leading-relaxed text-[var(--color-ink-subtle)] font-normal">{project.solution}</p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink)] opacity-40 mb-6 border-b border-[var(--color-ink)]/10 pb-2">Interaction Logic</h3>
              <div className="p-8 bg-[var(--color-paper-dim)] rounded-[var(--radius-lg)] border-l-4 border-[var(--color-ink)]/20 shadow-inner">
                <p className="text-xl leading-relaxed text-[var(--color-ink)] italic font-light font-sans">{project.interactionNotes}</p>
              </div>
            </section>

            <section>
              <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink)] opacity-40 mb-6 border-b border-[var(--color-ink)]/10 pb-2">Outcome</h3>
              <p className="text-lg leading-relaxed text-[var(--color-paper)] font-bold bg-[var(--color-ink)] p-8 rounded-[var(--radius-lg)] md:rounded-[32px] shadow-xl">{project.outcome}</p>
            </section>

            {/* Bottom Actions */}
            <div className="flex items-center justify-between pt-12 border-t border-[var(--color-ink)]/10">
              <button onClick={onBack} className="flex items-center gap-2 px-6 py-2 rounded-full border border-[var(--color-ink)] text-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-[var(--color-on-active)] active:scale-95 transition-all cursor-pointer">
                <ArrowLeft className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase tracking-wider">Back Home</span>
              </button>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-6 py-2 bg-[var(--color-ink)] text-[var(--color-paper)] rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg"
                >
                  <span className="text-[10px] font-bold uppercase tracking-widest">Live Site</span>
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